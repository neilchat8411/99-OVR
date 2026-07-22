// =======================================
// BUILD A TEAM SIMULATION ENGINE
// Version 1.0
// =======================================

let userConference = "East";

let seasonWins = 0;
let seasonLosses = 0;

let eastStandings = [];
let westStandings = [];

let playoffBracket = [];


// ---------------------------
// Conference Team Lists
// ---------------------------

const EAST_TEAMS = [

"Boston Celtics",
"Brooklyn Nets",
"New York Knicks",
"Philadelphia 76ers",
"Toronto Raptors",

"Chicago Bulls",
"Cleveland Cavaliers",
"Detroit Pistons",
"Indiana Pacers",
"Milwaukee Bucks",

"Atlanta Hawks",
"Charlotte Hornets",
"Miami Heat",
"Orlando Magic",
"Washington Wizards"

];



const WEST_TEAMS = [

"Dallas Mavericks",
"Denver Nuggets",
"Houston Rockets",
"Memphis Grizzlies",
"New Orleans Pelicans",

"Golden State Warriors",
"LA Clippers",
"Los Angeles Lakers",
"Phoenix Suns",
"Sacramento Kings",

"Minnesota Timberwolves",
"Oklahoma City Thunder",
"Portland Trail Blazers",
"San Antonio Spurs",
"Utah Jazz"

];


// ---------------------------
// Ask Conference
// ---------------------------

function chooseConference(){

    attributeContainer.innerHTML=`

    <h2>

    Choose Your Conference

    </h2>

    <br>

    <button onclick="setConference('East')">

    Eastern Conference

    </button>

    <br><br>

    <button onclick="setConference('West')">

    Western Conference

    </button>

    `;

}



// ---------------------------

function setConference(conf){

    userConference=conf;

    startSeasonSimulation();

}



// ---------------------------

function calculateStrength(){

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



    let score=0;

    let total=0;



    attributeList.forEach(attribute=>{

        const rating=

        selectedAttributes[attribute].rating;



        const range=

        ATTRIBUTE_RANGES[attribute];



        const normalized=

        (rating-range.min)/(range.max-range.min);



        score+=

        normalized*

        importance[attribute];



        total+=

        importance[attribute];



    });



    score/=total;



    score+=

    (selectedCoach.overall-90)/150;



    return score;

}



// ---------------------------

function simulateTeam(strength){

    let wins=0;

    for(let i=0;i<82;i++){

        const opponent=

        .35+

        Math.random()*.55;



        const probability=

        strength/

        (strength+opponent);



        if(Math.random()<probability)

            wins++;

    }

    return wins;

}



// ---------------------------

function buildLeague(){

    eastStandings=[];

    westStandings=[];



    teams.forEach(team=>{

        const strength=

        (team.ratings.OVR-76)/10;



        const wins=

        simulateTeam(strength);



        const obj={

            name:team.name,

            wins:wins

        };



        if(EAST_TEAMS.includes(team.name))

            eastStandings.push(obj);

        else

            westStandings.push(obj);



    });



    if(userConference==="East"){

        eastStandings.pop();



        eastStandings.push({

            name:"Your Team",

            wins:seasonWins,

            custom:true

        });

    }

    else{

        westStandings.pop();



        westStandings.push({

            name:"Your Team",

            wins:seasonWins,

            custom:true

        });

    }



    eastStandings.sort(

        (a,b)=>b.wins-a.wins

    );



    westStandings.sort(

        (a,b)=>b.wins-a.wins

    );

}