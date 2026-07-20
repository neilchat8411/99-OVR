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

if(gameOver)
return;


let availableTeams =
teams.filter(
team=>!usedTeams.includes(team.name)
);


if(availableTeams.length===0)
return;



spinButton.disabled=true;


let spins=0;


let animation=setInterval(()=>{


currentTeam =
availableTeams[
Math.floor(Math.random()*availableTeams.length)
];


teamName.innerHTML =
currentTeam.name;


teamLogo.src =
currentTeam.logo;


spins++;


if(spins>=20){


clearInterval(animation);

displayAttributes();

spinButton.disabled=false;


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


if(rerolls<=0 || gameOver){

rerollButton.disabled=true;

return;

}


rerolls--;


rerollButton.innerHTML=
"REROLL ("+rerolls+")";


spinTeam();



if(rerolls===0){

rerollButton.disabled=true;

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



let finalOVR =
Math.round(
weightedTotal/weights
);



let wins;



if(finalOVR>=95){

wins=72+Math.floor(Math.random()*8);

}

else if(finalOVR>=90){

wins=60+Math.floor(Math.random()*10);

}

else if(finalOVR>=85){

wins=48+Math.floor(Math.random()*12);

}

else if(finalOVR>=80){

wins=35+Math.floor(Math.random()*10);

}

else{

wins=20+Math.floor(Math.random()*15);

}



let championship =
Math.round(
(finalOVR-70)*3
);



championship=
Math.max(
1,
Math.min(
95,
championship
)
);



let tier;



if(finalOVR>=93){

tier="🔥 DYNASTY";

}

else if(finalOVR>=88){

tier="🏆 TITLE CONTENDER";

}

else if(finalOVR>=83){

tier="⭐ PLAYOFF TEAM";

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