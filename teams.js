const teams = [

    {
    name:"Atlanta Hawks",
    logo:"https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
    ratings:{
    TIER:"Playoffs",
    OVR:82,
    INS:75,
    OUT:85,
    ATH:78,
    PLA:77,
    DEF:61,
    REB:56,
    INT:69,
    BEST:89
    }
    },
    
    {
    name:"Boston Celtics",
    logo:"https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
    ratings:{
    TIER:"Championship",
    OVR:83,
    INS:71,
    OUT:85,
    ATH:83,
    PLA:80,
    DEF:76,
    REB:63,
    INT:81,
    BEST:93
    }
    },
    
    {
    name:"Brooklyn Nets",
    logo:"https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
    ratings:{
    TIER:"Rebuild",
    OVR:80,
    INS:75,
    OUT:82,
    ATH:80,
    PLA:66,
    DEF:60,
    REB:60,
    INT:82,
    BEST:86
    }
    },
    
    {
    name:"Charlotte Hornets",
    logo:"https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
    ratings:{
    TIER:"Rebuild",
    OVR:82,
    INS:61,
    OUT:86,
    ATH:75,
    PLA:68,
    DEF:60,
    REB:59,
    INT:74,
    BEST:87
    }
    },
    
    {
    name:"Chicago Bulls",
    logo:"https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
    ratings:{
    TIER:"Play-In",
    OVR:81,
    INS:62,
    OUT:81,
    ATH:78,
    PLA:75,
    DEF:59,
    REB:59,
    INT:81,
    BEST:85
    }
    },
    
    {
    name:"Cleveland Cavaliers",
    logo:"https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
    ratings:{
    TIER:"Contender",
    OVR:82,
    INS:75,
    OUT:81,
    ATH:82,
    PLA:63,
    DEF:74,
    REB:60,
    INT:66,
    BEST:93
    }
    },
    
    {
    name:"Dallas Mavericks",
    logo:"https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
    ratings:{
    TIER:"Play-In",
    OVR:82,
    INS:67,
    OUT:86,
    ATH:77,
    PLA:74,
    DEF:64,
    REB:60,
    INT:73,
    BEST:90
    }
    },
    
    {
    name:"Denver Nuggets",
    logo:"https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
    ratings:{
    TIER:"Contender",
    OVR:84,
    INS:77,
    OUT:87,
    ATH:78,
    PLA:75,
    DEF:63,
    REB:57,
    INT:79,
    BEST:98
    }
    },
    
    {
    name:"Detroit Pistons",
    logo:"https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
    ratings:{
    TIER:"Contender",
    OVR:83,
    INS:68,
    OUT:72,
    ATH:83,
    PLA:72,
    DEF:79,
    REB:60,
    INT:77,
    BEST:95
    }
    },
    
    {
    name:"Golden State Warriors",
    logo:"https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
    ratings:{
    TIER:"Play-In",
    OVR:83,
    INS:68,
    OUT:85,
    ATH:81,
    PLA:75,
    DEF:66,
    REB:55,
    INT:77,
    BEST:95
    }
    },
    
    {
    name:"Houston Rockets",
    logo:"https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
    ratings:{
    TIER:"Playoffs",
    OVR:84,
    INS:83,
    OUT:83,
    ATH:80,
    PLA:77,
    DEF:67,
    REB:54,
    INT:66,
    BEST:93
    }
    },
    
    {
    name:"Indiana Pacers",
    logo:"https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
    ratings:{
    TIER:"Playoffs",
    OVR:84,
    INS:73,
    OUT:81,
    ATH:77,
    PLA:71,
    DEF:68,
    REB:55,
    INT:77,
    BEST:93
    }
    },
    
    {
    name:"Los Angeles Clippers",
    logo:"https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
    ratings:{
    TIER:"Play-In",
    OVR:81,
    INS:63,
    OUT:86,
    ATH:79,
    PLA:75,
    DEF:52,
    REB:53,
    INT:73,
    BEST:86
    }
    },
    
    {
    name:"Los Angeles Lakers",
    logo:"https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    ratings:{
    TIER:"Contender",
    OVR:83,
    INS:72,
    OUT:86,
    ATH:76,
    PLA:72,
    DEF:56,
    REB:54,
    INT:81,
    BEST:97
    }
    },
    
    {
    name:"Memphis Grizzlies",
    logo:"https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
    ratings:{
    TIER:"Rebuild",
    OVR:80,
    INS:64,
    OUT:83,
    ATH:69,
    PLA:64,
    DEF:57,
    REB:56,
    INT:79,
    BEST:83
    }
    },

    {
        name:"Miami Heat",
        logo:"https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:82,
        INS:85,
        OUT:82,
        ATH:88,
        PLA:72,
        DEF:79,
        REB:59,
        INT:79,
        BEST:97
        }
        },
        
        {
        name:"Milwaukee Bucks",
        logo:"https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:81,
        INS:59,
        OUT:85,
        ATH:77,
        PLA:79,
        DEF:59,
        REB:55,
        INT:67,
        BEST:87
        }
        },
        
        {
        name:"Minnesota Timberwolves",
        logo:"https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:84,
        INS:72,
        OUT:79,
        ATH:80,
        PLA:69,
        DEF:69,
        REB:51,
        INT:76,
        BEST:96
        }
        },
        
        {
        name:"New Orleans Pelicans",
        logo:"https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
        ratings:{
        TIER:"Play-In",
        OVR:82,
        INS:76,
        OUT:80,
        ATH:80,
        PLA:67,
        DEF:57,
        REB:58,
        INT:69,
        BEST:96
        }
        },
        
        {
        name:"New York Knicks",
        logo:"https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
        ratings:{
        TIER:"Championship",
        OVR:84,
        INS:79,
        OUT:87,
        ATH:83,
        PLA:73,
        DEF:61,
        REB:52,
        INT:74,
        BEST:96
        }
        },
        
        {
        name:"Oklahoma City Thunder",
        logo:"https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
        ratings:{
        TIER:"Championship",
        OVR:86,
        INS:79,
        OUT:86,
        ATH:81,
        PLA:76,
        DEF:78,
        REB:55,
        INT:72,
        BEST:98
        }
        },
        
        {
        name:"Orlando Magic",
        logo:"https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
        ratings:{
        TIER:"Playoffs",
        OVR:83,
        INS:80,
        OUT:84,
        ATH:79,
        PLA:75,
        DEF:59,
        REB:57,
        INT:78,
        BEST:88
        }
        },
        
        {
        name:"Philadelphia 76ers",
        logo:"https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
        ratings:{
        TIER:"Championship",
        OVR:84,
        INS:74,
        OUT:90,
        ATH:81,
        PLA:77,
        DEF:69,
        REB:53,
        INT:78,
        BEST:95
        }
        },
        
        {
        name:"Phoenix Suns",
        logo:"https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
        ratings:{
        TIER:"Playoffs",
        OVR:82,
        INS:71,
        OUT:82,
        ATH:80,
        PLA:62,
        DEF:79,
        REB:55,
        INT:72,
        BEST:93
        }
        },
        
        {
        name:"Portland Trail Blazers",
        logo:"https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:84,
        INS:63,
        OUT:84,
        ATH:86,
        PLA:82,
        DEF:60,
        REB:54,
        INT:70,
        BEST:88
        }
        },
        
        {
        name:"Sacramento Kings",
        logo:"https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:81,
        INS:79,
        OUT:83,
        ATH:74,
        PLA:63,
        DEF:50,
        REB:59,
        INT:71,
        BEST:86
        }
        },
        
        {
        name:"San Antonio Spurs",
        logo:"https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
        ratings:{
        TIER:"Championship",
        OVR:86,
        INS:77,
        OUT:86,
        ATH:82,
        PLA:79,
        DEF:74,
        REB:57,
        INT:78,
        BEST:97
        }
        },
        
        {
        name:"Toronto Raptors",
        logo:"https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:84,
        INS:81,
        OUT:88,
        ATH:84,
        PLA:80,
        DEF:76,
        REB:57,
        INT:84,
        BEST:95
        }
        },
        
        {
        name:"Utah Jazz",
        logo:"https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:83,
        INS:74,
        OUT:86,
        ATH:74,
        PLA:62,
        DEF:56,
        REB:57,
        INT:85,
        BEST:87
        }
        },
        
        {
        name:"Washington Wizards",
        logo:"https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
        ratings:{
        TIER:"Play-In",
        OVR:83,
        INS:71,
        OUT:81,
        ATH:80,
        PLA:74,
        DEF:65,
        REB:58,
        INT:82,
        BEST:92
        }
        }
        
        ];