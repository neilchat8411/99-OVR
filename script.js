const attributeList = [
    "OVR",
    "INS",
    "OUT",
    "ATH",
    "PLA",
    "DEF",
    "REB",
    "INT",
    "BEST"
];

const TEAM_OVRS = teams.map(team => team.ratings.OVR);

const TEAM_MIN = Math.min(...TEAM_OVRS);
const TEAM_MAX = Math.max(...TEAM_OVRS);

let waitingForPick = false;

let currentTeam = null;

let usedTeams = [];

let selectedAttributes = {};

let rerolls = 3;

let gameOver = false;


const spinButton =
document.getElementById("spinButton");

const rerollButton =
document.getElementById("rerollButton");

const teamName =
document.getElementById("teamName");

const teamLogo =
document.getElementById("teamLogo");

const attributeContainer =
document.getElementById("attributeContainer");

const teamBuilder =
document.getElementById("teamBuilder");

const overall =
document.getElementById("overall");

const progressFill =
document.getElementById("progressFill");



spinButton.onclick = spinTeam;

rerollButton.onclick = rerollTeam;



function spinTeam(){

    if(gameOver) return;

    if(waitingForPick) return;

    let availableTeams =
        teams.filter(team => !usedTeams.includes(team.name));

    if(availableTeams.length===0) return;

    spinButton.disabled = true;

    let spins = 0;

    let animation = setInterval(()=>{

        currentTeam =
            availableTeams[
                Math.floor(Math.random()*availableTeams.length)
            ];

        teamName.innerHTML = currentTeam.name;
        teamLogo.src = currentTeam.logo;

        spins++;

        if(spins>=20){

            clearInterval(animation);

            displayAttributes();

            waitingForPick = true;

            // Keep spin disabled until player picks
            spinButton.disabled = true;

        }

    },80);

}



function displayAttributes(){


attributeContainer.innerHTML="";


attributeList.forEach(attribute=>{


let card =
document.createElement("div");


card.className="attributeCard";



let value =
currentTeam.ratings[attribute];



let mode =
document.getElementById("gameMode").value;



if(mode==="blind"){

value="???";

}



card.innerHTML=`

<h3>${attribute}</h3>

<h4>${value}</h4>

`;



if(selectedAttributes[attribute]){

card.classList.add("locked");

}


else{

card.onclick =
()=>chooseAttribute(attribute);

}



attributeContainer.appendChild(card);



});



}



function chooseAttribute(attribute){


if(selectedAttributes[attribute])
return;



selectedAttributes[attribute]={

team:
currentTeam.name,

logo:
currentTeam.logo,

rating:
currentTeam.ratings[attribute]

};



usedTeams.push(currentTeam.name);



updateTeam();

waitingForPick = false;

spinButton.disabled = false;

attributeContainer.innerHTML=
"<p>Spin for another team.</p>";



teamName.innerHTML=
"Press Spin";


teamLogo.src="";



if(
Object.keys(selectedAttributes).length
===
attributeList.length
){

finishGame();

}



}



function updateTeam(){


teamBuilder.innerHTML="";


let total=0;

let weightTotal=0;



attributeList.forEach(attribute=>{


let slot =
document.createElement("div");


slot.className="teamSlot";



if(selectedAttributes[attribute]){


let data =
selectedAttributes[attribute];


slot.innerHTML=`

<img src="${data.logo}">

<div>

<b>${attribute}</b>

<br>

${data.team}

</div>

<strong>
${data.rating}
</strong>

`;



total += data.rating;

weightTotal++;

}



else{


slot.innerHTML=`

<b>${attribute}</b>

<span>
---
</span>

`;

}


teamBuilder.appendChild(slot);



});



let progress =
Object.keys(selectedAttributes).length
/
attributeList.length
*
100;


progressFill.style.width =
progress+"%";



if(weightTotal>0){

overall.innerHTML =
"OVR "+
Math.round(total/weightTotal);

}


}





function rerollTeam(){

    if(gameOver) return;

    if(!waitingForPick) return;

    if(rerolls<=0){

        rerollButton.disabled = true;

        return;

    }

    rerolls--;

    rerollButton.innerHTML =
    "REROLL ("+rerolls+")";

    waitingForPick = false;

    spinTeam();

    if(rerolls===0){

        rerollButton.disabled = true;

    }

}





function finishGame(){


gameOver=true;


spinButton.disabled=true;

rerollButton.disabled=true;



let weightedTotal=0;

let weights=0;



const importance={

OVR:2,

INS:1,

OUT:1,

ATH:1,

PLA:1.1,

DEF:1.3,

REB:1,

INT:1,

BEST:1.2

};



attributeList.forEach(attribute=>{


weightedTotal +=

selectedAttributes[attribute].rating
*
importance[attribute];


weights +=
importance[attribute];


});





let rawOVR = weightedTotal / weights;

// Normalize into the same scale as your dataset
let normalizedOVR = Math.max(
    TEAM_MIN,
    Math.min(TEAM_MAX, rawOVR)
);

let finalOVR = Math.round(normalizedOVR);





const percent =
(finalOVR - TEAM_MIN) /
(TEAM_MAX - TEAM_MIN);

let wins =
Math.round(
20 + percent * 45
);

// 20–65 wins

wins +=
Math.floor(Math.random()*5)-2;

wins =
Math.max(15,
Math.min(68,wins));



let championship = Math.round(
    percent * 85
    );
    
    championship =
    Math.max(
    1,
    Math.min(
    90,
    championship
    ));







let tier;



if(finalOVR>=TEAM_MAX){

    tier="🏆 CHAMPIONSHIP FAVORITE";

}
else if(finalOVR>=TEAM_MAX-1){

    tier="⭐ CONTENDER";

}
else if(finalOVR>=TEAM_MAX-3){

    tier="🏀 PLAYOFF TEAM";

}
else if(finalOVR>=TEAM_MAX-5){

    tier="🎯 PLAY-IN";

}
else{

    tier="🔨 REBUILD";

}



let strengths=[];



attributeList.forEach(attribute=>{


if(
selectedAttributes[attribute].rating>=90
){

strengths.push(attribute);

}


});



document.getElementById("resultScreen")
.style.display="flex";



document.getElementById("finalRating")
.innerHTML=

`${finalOVR} OVR
<br>
${tier}`;



document.getElementById("finalRecord")
.innerHTML=

`
Projected Record:
<br>
${wins}-${82-wins}
`;



document.getElementById("championshipOdds")
.innerHTML=

`
Championship Odds:
<br>
${championship}%
`;



document.getElementById("teamStyle")
.innerHTML=

`
Team Strengths:
<br>
${strengths.join(", ")}
`;



}