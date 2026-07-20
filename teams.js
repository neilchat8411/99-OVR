const teams = [

    {
    name:"Atlanta Hawks",
    logo:"https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
    ratings:{
    TIER:"Play-In",
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
    TIER:"Championship",
    OVR:84,
    INS:77,
    OUT:87,
    ATH:82,
    PLA:97,
    DEF:85,
    REB:91,
    INT:94,
    BEST:97
    }
    },
    
    {
    name:"Detroit Pistons",
    logo:"https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
    ratings:{
    TIER:"Rebuild",
    OVR:78,
    INS:82,
    OUT:77,
    ATH:84,
    PLA:80,
    DEF:79,
    REB:83,
    INT:76,
    BEST:83
    }
    },
    
    {
    name:"Golden State Warriors",
    logo:"https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
    ratings:{
    TIER:"Playoff",
    OVR:87,
    INS:78,
    OUT:94,
    ATH:82,
    PLA:92,
    DEF:81,
    REB:78,
    INT:90,
    BEST:92
    }
    },
    
    {
    name:"Houston Rockets",
    logo:"https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
    ratings:{
    TIER:"Playoff",
    OVR:87,
    INS:88,
    OUT:80,
    ATH:91,
    PLA:84,
    DEF:89,
    REB:90,
    INT:86,
    BEST:89
    }
    },
    
    {
    name:"Indiana Pacers",
    logo:"https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
    ratings:{
    TIER:"Playoff",
    OVR:88,
    INS:84,
    OUT:87,
    ATH:90,
    PLA:92,
    DEF:77,
    REB:81,
    INT:85,
    BEST:91
    }
    },
    
    {
    name:"Los Angeles Clippers",
    logo:"https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
    ratings:{
    TIER:"Contender",
    OVR:88,
    INS:87,
    OUT:88,
    ATH:85,
    PLA:86,
    DEF:90,
    REB:84,
    INT:88,
    BEST:90
    }
    },
    
    {
    name:"Los Angeles Lakers",
    logo:"https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    ratings:{
    TIER:"Contender",
    OVR:90,
    INS:92,
    OUT:82,
    ATH:87,
    PLA:88,
    DEF:84,
    REB:86,
    INT:91,
    BEST:96
    }
    },
    
    {
    name:"Memphis Grizzlies",
    logo:"https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
    ratings:{
    TIER:"Playoff",
    OVR:87,
    INS:86,
    OUT:79,
    ATH:92,
    PLA:83,
    DEF:93,
    REB:88,
    INT:88,
    BEST:91
    }
    },

    {
        name:"Miami Heat",
        logo:"https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
        ratings:{
        TIER:"Playoff",
        OVR:86,
        INS:82,
        OUT:84,
        ATH:82,
        PLA:83,
        DEF:94,
        REB:80,
        INT:92,
        BEST:89
        }
        },
        
        {
        name:"Milwaukee Bucks",
        logo:"https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:90,
        INS:94,
        OUT:84,
        ATH:95,
        PLA:86,
        DEF:87,
        REB:89,
        INT:89,
        BEST:96
        }
        },
        
        {
        name:"Minnesota Timberwolves",
        logo:"https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:91,
        INS:91,
        OUT:83,
        ATH:88,
        PLA:82,
        DEF:95,
        REB:93,
        INT:90,
        BEST:95
        }
        },
        
        {
        name:"New Orleans Pelicans",
        logo:"https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
        ratings:{
        TIER:"Playoff",
        OVR:86,
        INS:90,
        OUT:82,
        ATH:94,
        PLA:84,
        DEF:86,
        REB:87,
        INT:84,
        BEST:91
        }
        },
        
        {
        name:"New York Knicks",
        logo:"https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:91,
        INS:89,
        OUT:84,
        ATH:85,
        PLA:81,
        DEF:92,
        REB:95,
        INT:91,
        BEST:94
        }
        },
        
        {
        name:"Oklahoma City Thunder",
        logo:"https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
        ratings:{
        TIER:"Championship",
        OVR:94,
        INS:86,
        OUT:89,
        ATH:93,
        PLA:91,
        DEF:94,
        REB:85,
        INT:93,
        BEST:97
        }
        },
        
        {
        name:"Orlando Magic",
        logo:"https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
        ratings:{
        TIER:"Playoff",
        OVR:86,
        INS:85,
        OUT:76,
        ATH:91,
        PLA:79,
        DEF:92,
        REB:90,
        INT:87,
        BEST:89
        }
        },
        
        {
        name:"Philadelphia 76ers",
        logo:"https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:89,
        INS:94,
        OUT:84,
        ATH:86,
        PLA:90,
        DEF:89,
        REB:91,
        INT:88,
        BEST:96
        }
        },
        
        {
        name:"Phoenix Suns",
        logo:"https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
        ratings:{
        TIER:"Contender",
        OVR:88,
        INS:86,
        OUT:92,
        ATH:82,
        PLA:88,
        DEF:80,
        REB:79,
        INT:88,
        BEST:94
        }
        },
        
        {
        name:"Portland Trail Blazers",
        logo:"https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:78,
        INS:80,
        OUT:81,
        ATH:85,
        PLA:83,
        DEF:77,
        REB:79,
        INT:77,
        BEST:84
        }
        },
        
        {
        name:"Sacramento Kings",
        logo:"https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
        ratings:{
        TIER:"Playoff",
        OVR:86,
        INS:87,
        OUT:88,
        ATH:86,
        PLA:89,
        DEF:78,
        REB:83,
        INT:84,
        BEST:90
        }
        },
        
        {
        name:"San Antonio Spurs",
        logo:"https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:82,
        INS:88,
        OUT:80,
        ATH:85,
        PLA:87,
        DEF:82,
        REB:84,
        INT:86,
        BEST:94
        }
        },
        
        {
        name:"Toronto Raptors",
        logo:"https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:81,
        INS:81,
        OUT:79,
        ATH:90,
        PLA:82,
        DEF:88,
        REB:86,
        INT:82,
        BEST:86
        }
        },
        
        {
        name:"Utah Jazz",
        logo:"https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:80,
        INS:84,
        OUT:82,
        ATH:83,
        PLA:80,
        DEF:79,
        REB:87,
        INT:80,
        BEST:85
        }
        },
        
        {
        name:"Washington Wizards",
        logo:"https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
        ratings:{
        TIER:"Rebuild",
        OVR:76,
        INS:79,
        OUT:80,
        ATH:84,
        PLA:81,
        DEF:75,
        REB:78,
        INT:74,
        BEST:82
        }
        }
        
        ];