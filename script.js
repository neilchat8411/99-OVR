// ================================
// BUILD A TEAM v2.0
// ================================

let selectedCoach = null;

// ---------- ATTRIBUTES ----------

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


// ---------- AUTOMATIC NORMALIZATION ----------

// Creates min/max values from your teams.js data
const ATTRIBUTE_RANGES = {};

attributeList.forEach(attribute => {

    const values = teams.map(
        team => team.ratings[attribute]
    );

    ATTRIBUTE_RANGES[attribute] = {

        min: Math.min(...values),

        max: Math.max(...values)

    };

});


const TEAM_OVRS =
teams.map(
    team => team.ratings.OVR
);


const TEAM_MIN =
Math.min(...TEAM_OVRS);


const TEAM_MAX =
Math.max(...TEAM_OVRS);



// ---------- GAME STATE ----------

let currentTeam = null;

let usedTeams = [];

let selectedAttributes = {};

let rerolls = 3;

let waitingForPick = false;

let gameOver = false;

let spinning = false;



// ---------- DOM ELEMENTS ----------

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



// ---------- BUTTON EVENTS ----------

spinButton.onclick = spinTeam;

rerollButton.onclick = rerollTeam;



// ================================
// SPIN TEAM
// ================================

function spinTeam(){


    if(gameOver)
        return;


    if(waitingForPick)
        return;


    if(spinning)
        return;



    let availableTeams =
    teams.filter(
        team =>
        !usedTeams.includes(team.name)
    );


    if(availableTeams.length === 0)
        return;



    spinning = true;

    spinButton.disabled = true;



    let spins = 0;



    let animation =
    setInterval(()=>{


        currentTeam =
        availableTeams[
            Math.floor(
                Math.random() *
                availableTeams.length
            )
        ];



        teamName.innerHTML =
        currentTeam.name;


        teamLogo.src =
        currentTeam.logo;



        spins++;



        if(spins >= 20){


            clearInterval(animation);


            spinning = false;


            waitingForPick = true;


            displayAttributes();



            // Cannot spin again until choosing
            spinButton.disabled = true;



        }



    },80);



}




// ================================
// DISPLAY ATTRIBUTE OPTIONS
// ================================

function displayAttributes(){


    attributeContainer.innerHTML = "";



    attributeList.forEach(attribute => {



        let card =
        document.createElement("div");



        card.className =
        "attributeCard";



        let rating =
        currentTeam.ratings[attribute];



        let modeElement =
        document.getElementById("gameMode");



        let mode =
        modeElement ?
        modeElement.value :
        "casual";



        if(mode === "blind"){

            rating = "???";

        }



        card.innerHTML = `

            <h3>${attribute}</h3>

            <h4>${rating}</h4>

        `;



        if(selectedAttributes[attribute]){


            card.classList.add("locked");


        }
        else{


            card.onclick =
            () =>
            chooseAttribute(attribute);


        }



        attributeContainer.appendChild(card);



    });


}



// ================================
// CHOOSE ATTRIBUTE
// ================================

function chooseAttribute(attribute){


    if(!waitingForPick)
        return;


    if(selectedAttributes[attribute])
        return;



    selectedAttributes[attribute] = {


        team:
        currentTeam.name,


        logo:
        currentTeam.logo,


        rating:
        currentTeam.ratings[attribute]


    };



    usedTeams.push(
        currentTeam.name
    );



    waitingForPick = false;


    spinButton.disabled = false;



    updateTeam();



    attributeContainer.innerHTML =
    "<p>Spin for another team.</p>";



    teamName.innerHTML =
    "Press Spin";


    teamLogo.src = "";



    if(
        Object.keys(selectedAttributes).length
        ===
        attributeList.length
    ){

        startCoachDraft();

    }



}



// ================================
// UPDATE TEAM BUILDER
// ================================

function updateTeam(){


    teamBuilder.innerHTML = "";



    let normalizedTotal = 0;

    let weightTotal = 0;



    const weights = {


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



    attributeList.forEach(attribute => {



        let slot =
        document.createElement("div");



        slot.className =
        "teamSlot";



        if(selectedAttributes[attribute]){


            let data =
            selectedAttributes[attribute];



            slot.innerHTML = `

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



            const range =
            ATTRIBUTE_RANGES[attribute];



            const normalized =

            (
                data.rating -
                range.min
            )
            /
            (
                range.max -
                range.min
            );



            normalizedTotal +=
            normalized *
            weights[attribute];


            weightTotal +=
            weights[attribute];



        }
        else{


            slot.innerHTML = `

            <b>${attribute}</b>

            <span>---</span>

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
    progress + "%";



    if(weightTotal > 0){


        let currentOVR =

        Math.round(

            TEAM_MIN +

            (
                normalizedTotal /
                weightTotal
            )
            *
            (
                TEAM_MAX -
                TEAM_MIN
            )

        );



        overall.innerHTML =
        "OVR " + currentOVR;



    }



}

// ================================
// REROLL TEAM
// ================================

function rerollTeam(){


    if(gameOver)
        return;


    if(!waitingForPick)
        return;


    if(rerolls <= 0){

        rerollButton.disabled = true;

        return;

    }



    rerolls--;



    rerollButton.innerHTML =
    "REROLL (" + rerolls + ")";



    waitingForPick = false;



    spinTeam();



    if(rerolls === 0){

        rerollButton.disabled = true;

    }



}

function showCoach(){

    attributeContainer.innerHTML = `

    <div class="attributeCard">

        <h2>${selectedCoach.name}</h2>

        <p>${selectedCoach.team}</p>

        <br>

        Overall: ${selectedCoach.overall}

        <br>

        Offense: ${selectedCoach.offense}

        <br>

        Defense: ${selectedCoach.defense}

        <br>

        Development: ${selectedCoach.development}

        <br>

        Clutch: ${selectedCoach.clutch}

        <br><br>

        <button onclick="finishGame()">

            Continue

        </button>

    </div>

    `;

}

function spinCoach(){

    spinButton.disabled = true;

    let spins = 0;

    let currentCoach = null;

    let animation = setInterval(()=>{

        currentCoach =

        coaches[
            Math.floor(
                Math.random()*coaches.length
            )
        ];

        teamName.innerHTML =
        currentCoach.name;

        spins++;

        if(spins>=18){

            clearInterval(animation);

            selectedCoach = currentCoach;

            showCoach();

        }

    },80);

}

function startCoachDraft(){

    attributeContainer.innerHTML = "";

    teamName.innerHTML = "Spin For Coach";

    teamLogo.src = "";

    spinButton.disabled = false;

    rerollButton.disabled = true;

    spinButton.onclick = spinCoach;

}

// ================================
// FINISH GAME
// ================================

function finishGame(){


    gameOver = true;


    spinButton.disabled = true;

    rerollButton.disabled = true;



    const weights = {


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



    let normalizedTotal = 0;

    let weightTotal = 0;



    attributeList.forEach(attribute => {


        let rating =
        selectedAttributes[attribute].rating;



        let range =
        ATTRIBUTE_RANGES[attribute];



        let normalized =

        (
            rating -
            range.min
        )
        /
        (
            range.max -
            range.min
        );



        normalizedTotal +=

        normalized *
        weights[attribute];



        weightTotal +=
        weights[attribute];


    });



    let finalOVR =

    Math.round(

        TEAM_MIN +

        (
            normalizedTotal /
            weightTotal
        )
        *
        (
            TEAM_MAX -
            TEAM_MIN
        )

    );



    // ---------- RECORD ----------


    let percent =

    (
        finalOVR -
        TEAM_MIN
    )
    /
    (
        TEAM_MAX -
        TEAM_MIN
    );



    let wins =

    Math.round(

        20 +
        percent * 45

    );



    wins +=
    Math.floor(Math.random()*5)-2;



    wins = Math.max(
        15,
        Math.min(
            68,
            wins
        )
    );



    // ---------- CHAMPIONSHIP ODDS ----------


    let championship =

    Math.round(
        percent * 85
    );



    championship = Math.max(

        1,

        Math.min(

            90,

            championship

        )

    );





    // ---------- TEAM TIER ----------


    let tier;



    if(finalOVR >= TEAM_MAX - 1){

        tier =
        "🏆 CHAMPIONSHIP FAVORITE";

    }

    else if(finalOVR >= TEAM_MAX - 3){

        tier =
        "⭐ CONTENDER";

    }

    else if(finalOVR >= TEAM_MAX - 5){

        tier =
        "🏀 PLAYOFF TEAM";

    }

    else if(finalOVR >= TEAM_MIN + 2){

        tier =
        "🎯 PLAY-IN";

    }

    else{

        tier =
        "🔨 REBUILD";

    }




    // ---------- STRENGTHS ----------


    let strengths = [];



    attributeList.forEach(attribute => {


        let range =
        ATTRIBUTE_RANGES[attribute];


        let rating =
        selectedAttributes[attribute].rating;



        let normalized =

        (
            rating -
            range.min
        )
        /
        (
            range.max -
            range.min
        );



        if(normalized >= .75){

            strengths.push(attribute);

        }



    });






    // ---------- DISPLAY RESULTS ----------


    let resultScreen =
    document.getElementById("resultScreen");



    if(resultScreen){

        resultScreen.style.display =
        "flex";

    }



    let finalRating =
    document.getElementById("finalRating");



    if(finalRating){

        finalRating.innerHTML =

        `
        ${finalOVR} OVR
        <br>
        ${tier}
        `;

    }





    let finalRecord =
    document.getElementById("finalRecord");



    if(finalRecord){

        finalRecord.innerHTML =

        `
        Projected Record:
        <br>
        ${wins}-${82-wins}
        `;

    }




    let championshipOdds =
    document.getElementById("championshipOdds");



    if(championshipOdds){

        championshipOdds.innerHTML =

        `
        Championship Odds:
        <br>
        ${championship}%
        `;

    }





    let teamStyle =
    document.getElementById("teamStyle");



    if(teamStyle){

        teamStyle.innerHTML =

        `
        Team Strengths:
        <br>
        ${
            strengths.length > 0
            ?
            strengths.join(", ")
            :
            "Balanced"
        }
        `;

    }



}