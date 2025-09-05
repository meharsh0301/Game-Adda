// Event data array
const allEvents = [
    // Previous events
    {
        id: 1,
        name: "BGMI Championship",
        description: "National level BGMI tournament with top teams competing for the championship title.",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "15 June 2025",
        day: "15",
        month: "June",
        year: "2025",
        location: "Online",
        participants: "100+ Participants",
        prize: "1,00,000 Prize Pool",
        rules: "1. No cheating or hacks allowed\n2. Teams of 4 players\n3. Best of 3 matches\n4. Registration closes 24 hours before event",
        highlights: [
            "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "Team Titans", score: "120 pts", prize: "₹50,000" },
            { position: 2, name: "Phoenix Squad", score: "110 pts", prize: "₹30,000" },
            { position: 3, name: "Wolf Pack", score: "105 pts", prize: "₹20,000" },
            { position: 4, name: "Eagle Warriors", score: "95 pts", prize: "-" },
            { position: 5, name: "Dragon Slayers", score: "90 pts", prize: "-" }
        ]
    },
    {
        id: 2,
        name: "Call of Duty Warzone",
        description: "Intense Call of Duty Warzone tournament with squads battling for supremacy.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "upcoming",
        date: "22 June 2025",
        day: "22",
        month: "June",
        year: "2025",
        location: "Online",
        participants: "50+ Teams",
        prize: "75,000 Prize Pool",
        rules: "1. Standard Warzone rules apply\n2. Teams of 3 players\n3. Kill race format\n4. 3-hour time limit",
        highlights: [
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "Shadow Company", score: "85 kills", prize: "₹35,000" },
            { position: 2, name: "Task Force 141", score: "78 kills", prize: "₹25,000" },
            { position: 3, name: "Ghost Team", score: "72 kills", prize: "₹15,000" },
            { position: 4, name: "Spec Ops", score: "65 kills", prize: "-" },
            { position: 5, name: "Delta Squad", score: "60 kills", prize: "-" }
        ]
    },
    {
        id: 3,
        name: "GTA V Racing League",
        description: "High-speed racing competition in the streets of Los Santos.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "05 July 2025",
        day: "05",
        month: "July",
        year: "2025",
        location: "Our Gaming Center",
        participants: "30 Participants",
        prize: "50,000 Prize Pool",
        rules: "1. Custom racing rules apply\n2. No weapons allowed\n3. 10 races total\n4. Points based on finishing position",
        highlights: [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "SpeedDemon", score: "95 pts", prize: "₹25,000" },
            { position: 2, name: "RoadRash", score: "88 pts", prize: "₹15,000" },
            { position: 3, name: "TurboBoost", score: "82 pts", prize: "₹10,000" },
            { position: 4, name: "DriftKing", score: "78 pts", prize: "-" },
            { position: 5, name: "Burnout", score: "75 pts", prize: "-" }
        ]
    },
    {
        id: 4,
        name: "Tekken 3 Championship",
        description: "Classic fighting game tournament with intense 1v1 battles.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "past",
        date: "20 May 2025",
        day: "20",
        month: "May",
        year: "2025",
        location: "Our Gaming Center",
        participants: "25 Participants",
        prize: "30,000 Prize Pool",
        rules: "1. Single elimination bracket\n2. Best of 3 matches\n3. Finals best of 5\n4. Standard tournament rules apply",
        highlights: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "KingOfFighters", score: "3-1", prize: "₹15,000" },
            { position: 2, name: "IronFist", score: "1-3", prize: "₹10,000" },
            { position: 3, name: "JinMaster", score: "2-1", prize: "₹5,000" },
            { position: 4, name: "PaulPhoenix", score: "1-2", prize: "-" },
            { position: 5, name: "HwoarangPro", score: "0-2", prize: "-" }
        ]
    },
    {
        id: 5,
        name: "Valorant Masters",
        description: "Professional Valorant tournament featuring top teams from the region.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "ongoing",
        date: "10 June 2025",
        day: "10",
        month: "June",
        year: "2025",
        location: "Online",
        participants: "16 Teams",
        prize: "2,00,000 Prize Pool",
        rules: "1. Standard Valorant competitive rules\n2. Double elimination bracket\n3. Best of 3 matches\n4. Finals best of 5",
        highlights: [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "Team Phoenix", score: "3-1", prize: "₹1,00,000" },
            { position: 2, name: "Radiant Esports", score: "1-3", prize: "₹60,000" },
            { position: 3, name: "Viper's Den", score: "2-0", prize: "₹40,000" },
            { position: 4, name: "Omen Warriors", score: "0-2", prize: "-" },
            { position: 5, name: "Jett Squad", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 6,
        name: "Fortnite World Cup",
        description: "Global Fortnite competition with qualifiers leading to the grand finals.",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "30 July 2025",
        day: "30",
        month: "July",
        year: "2025",
        location: "Online",
        participants: "100 Players",
        prize: "1,50,000 Prize Pool",
        rules: "1. Solo competition\n2. 5 matches total\n3. Points based on placement and eliminations\n4. No teaming allowed",
        highlights: [
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "BuilderPro", score: "125 pts", prize: "₹75,000" },
            { position: 2, name: "NinjaSlayer", score: "118 pts", prize: "₹50,000" },
            { position: 3, name: "VictoryRoyale", score: "112 pts", prize: "₹25,000" },
            { position: 4, name: "BushCamper", score: "105 pts", prize: "-" },
            { position: 5, name: "NoScopeKing", score: "98 pts", prize: "-" }
        ]
    },
    
    // 10 more upcoming events
    {
        id: 7,
        name: "PUBG Mobile Pro League",
        description: "Professional PUBG Mobile league with top teams competing for glory.",
        image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "12 July 2025",
        day: "12",
        month: "July",
        year: "2025",
        location: "Online",
        participants: "20 Teams",
        prize: "2,50,000 Prize Pool",
        rules: "1. Teams of 4 players\n2. 6 matches per day\n3. Points based on placement and kills\n4. 3-day tournament",
        highlights: [
            "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "ChickenDinners", score: "210 pts", prize: "₹1,00,000" },
            { position: 2, name: "BlueZoneBandits", score: "195 pts", prize: "₹75,000" },
            { position: 3, name: "PanFighters", score: "185 pts", prize: "₹50,000" },
            { position: 4, name: "LootGoblins", score: "175 pts", prize: "₹25,000" },
            { position: 5, name: "AirdropChasers", score: "170 pts", prize: "-" }
        ]
    },
    {
        id: 8,
        name: "CS:GO Open Tournament",
        description: "Open CS:GO tournament for amateur and semi-pro teams.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "18 July 2025",
        day: "18",
        month: "July",
        year: "2025",
        location: "Online",
        participants: "32 Teams",
        prize: "1,20,000 Prize Pool",
        rules: "1. Teams of 5 players\n2. Single elimination bracket\n3. Best of 1 until semifinals\n4. Standard competitive rules",
        highlights: [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "CounterTerror", score: "16-12", prize: "₹60,000" },
            { position: 2, name: "TerrorWin", score: "12-16", prize: "₹40,000" },
            { position: 3, name: "EcoRound", score: "16-10", prize: "₹20,000" },
            { position: 4, name: "RushB", score: "10-16", prize: "-" },
            { position: 5, name: "AWPKing", score: "14-16", prize: "-" }
        ]
    },
    {
        id: 9,
        name: "FIFA 25 Championship",
        description: "1v1 FIFA 25 tournament for football gaming enthusiasts.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "25 July 2025",
        day: "25",
        month: "July",
        year: "2025",
        location: "Our Gaming Center",
        participants: "64 Players",
        prize: "50,000 Prize Pool",
        rules: "1. Single elimination bracket\n2. 6-minute halves\n3. Random team selection\n4. Finals best of 3",
        highlights: [
            "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "MessiFan", score: "3-1", prize: "₹25,000" },
            { position: 2, name: "RonaldoGOAT", score: "1-3", prize: "₹15,000" },
            { position: 3, name: "NeymarJr", score: "2-0", prize: "₹10,000" },
            { position: 4, name: "MbappeSpeed", score: "0-2", prize: "-" },
            { position: 5, name: "Haaland9", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 10,
        name: "Mortal Kombat 1 Tournament",
        description: "Brutal 1v1 fights in the latest Mortal Kombat game.",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "08 August 2025",
        day: "08",
        month: "August",
        year: "2025",
        location: "Our Gaming Center",
        participants: "32 Players",
        prize: "40,000 Prize Pool",
        rules: "1. Single elimination bracket\n2. Best of 3 matches\n3. Random character selection\n4. Finals best of 5",
        highlights: [
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "ScorpionKing", score: "3-1", prize: "₹20,000" },
            { position: 2, name: "SubZero", score: "1-3", prize: "₹12,000" },
            { position: 3, name: "LiuKang", score: "2-0", prize: "₹8,000" },
            { position: 4, name: "Raiden", score: "0-2", prize: "-" },
            { position: 5, name: "JohnnyCage", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 11,
        name: "Apex Legends Showdown",
        description: "Squad-based Apex Legends tournament with intense battle royale action.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "15 August 2025",
        day: "15",
        month: "August",
        year: "2025",
        location: "Online",
        participants: "50 Teams",
        prize: "1,80,000 Prize Pool",
        rules: "1. Teams of 3 players\n2. 6 matches total\n3. Points based on placement and kills\n4. No duplicate legends",
        highlights: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "Champions", score: "150 pts", prize: "₹90,000" },
            { position: 2, name: "Predators", score: "140 pts", prize: "₹60,000" },
            { position: 3, name: "Masters", score: "135 pts", prize: "₹30,000" },
            { position: 4, name: "Diamonds", score: "125 pts", prize: "-" },
            { position: 5, name: "Platinum", score: "120 pts", prize: "-" }
        ]
    },
    {
        id: 12,
        name: "Rocket League Championship",
        description: "High-flying car soccer tournament with teams competing for aerial supremacy.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "upcoming",
        date: "22 August 2025",
        day: "22",
        month: "August",
        year: "2025",
        location: "Online",
        participants: "32 Teams",
        prize: "90,000 Prize Pool",
        rules: "1. Teams of 3 players\n2. Best of 5 matches\n3. Standard competitive rules\n4. Random map selection",
        highlights: [
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "AerialAces", score: "4-2", prize: "₹45,000" },
            { position: 2, name: "Boosted", score: "2-4", prize: "₹30,000" },
            { position: 3, name: "FlipResets", score: "3-1", prize: "₹15,000" },
            { position: 4, name: "DemoKings", score: "1-3", prize: "-" },
            { position: 5, name: "OwnGoalers", score: "0-3", prize: "-" }
        ]
    },
    {
        id: 13,
        name: "Dota 2 Open Qualifiers",
        description: "Open qualifiers for the regional Dota 2 championship series.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "upcoming",
        date: "29 August 2025",
        day: "29",
        month: "August",
        year: "2025",
        location: "Online",
        participants: "16 Teams",
        prize: "Qualification Spot",
        rules: "1. Teams of 5 players\n2. Single elimination bracket\n3. Best of 3 matches\n4. Standard competitive rules",
        highlights: [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "Radiant", score: "2-1", prize: "Qualified" },
            { position: 2, name: "Dire", score: "1-2", prize: "-" },
            { position: 3, name: "Ancient", score: "2-0", prize: "-" },
            { position: 4, name: "Roshan", score: "0-2", prize: "-" },
            { position: 5, name: "Creeps", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 14,
        name: "Street Fighter 6 Showdown",
        description: "1v1 fighting tournament featuring the latest Street Fighter game.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "05 September 2025",
        day: "05",
        month: "September",
        year: "2025",
        location: "Our Gaming Center",
        participants: "32 Players",
        prize: "60,000 Prize Pool",
        rules: "1. Single elimination bracket\n2. Best of 3 matches\n3. Character lock after first match\n4. Finals best of 5",
        highlights: [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "RyuMaster", score: "3-2", prize: "₹30,000" },
            { position: 2, name: "KenFlame", score: "2-3", prize: "₹20,000" },
            { position: 3, name: "ChunLi", score: "2-1", prize: "₹10,000" },
            { position: 4, name: "Dhalsim", score: "1-2", prize: "-" },
            { position: 5, name: "Guile", score: "0-2", prize: "-" }
        ]
    },
    {
        id: 15,
        name: "Overwatch 2 Challenge",
        description: "Team-based Overwatch 2 tournament with competitive rules.",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "12 September 2025",
        day: "12",
        month: "September",
        year: "2025",
        location: "Online",
        participants: "24 Teams",
        prize: "1,40,000 Prize Pool",
        rules: "1. Teams of 6 players\n2. Best of 3 matches\n3. Standard competitive rules\n4. Map veto system",
        highlights: [
            "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "Payload", score: "3-1", prize: "₹70,000" },
            { position: 2, name: "ControlPoint", score: "1-3", prize: "₹50,000" },
            { position: 3, name: "KingOfTheHill", score: "2-0", prize: "₹20,000" },
            { position: 4, name: "Hybrid", score: "0-2", prize: "-" },
            { position: 5, name: "Escort", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 16,
        name: "Minecraft Build Battle",
        description: "Creative building competition in Minecraft with themed challenges.",
        image: "https://images.unsplash.com/photo-1627855437693-dcc7b0c4ba7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "upcoming",
        date: "19 September 2025",
        day: "19",
        month: "September",
        year: "2025",
        location: "Online",
        participants: "20 Teams",
        prize: "30,000 Prize Pool",
        rules: "1. Teams of 2-4 players\n2. 3 building challenges\n3. Judged on creativity and execution\n4. Time-limited builds",
        highlights: [
            "https://images.unsplash.com/photo-1627855437693-dcc7b0c4ba7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "BlockBuilders", score: "95 pts", prize: "₹15,000" },
            { position: 2, name: "PixelArtists", score: "90 pts", prize: "₹10,000" },
            { position: 3, name: "RedstoneGenius", score: "85 pts", prize: "₹5,000" },
            { position: 4, name: "DiamondPicks", score: "80 pts", prize: "-" },
            { position: 5, name: "CreeperHunters", score: "75 pts", prize: "-" }
        ]
    },
    
    // 5 more past events
    {
        id: 17,
        name: "Free Fire Championship",
        description: "Regional Free Fire tournament with intense battle royale action.",
        image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "past",
        date: "10 May 2025",
        day: "10",
        month: "May",
        year: "2025",
        location: "Online",
        participants: "50 Teams",
        prize: "80,000 Prize Pool",
        rules: "1. Teams of 4 players\n2. 5 matches total\n3. Points based on placement and kills\n4. Standard tournament rules",
        highlights: [
            "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "VictorySquad", score: "110 pts", prize: "₹40,000" },
            { position: 2, name: "BooyahTeam", score: "105 pts", prize: "₹25,000" },
            { position: 3, name: "HeadshotPro", score: "100 pts", prize: "₹15,000" },
            { position: 4, name: "GarenaElite", score: "95 pts", prize: "-" },
            { position: 5, name: "BattleRoyale", score: "90 pts", prize: "-" }
        ]
    },
    {
        id: 18,
        name: "Tekken 7 Tournament",
        description: "Classic fighting game tournament with intense 1v1 battles.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "past",
        date: "25 April 2025",
        day: "25",
        month: "April",
        year: "2025",
        location: "Our Gaming Center",
        participants: "16 Players",
        prize: "25,000 Prize Pool",
        rules: "1. Single elimination bracket\n2. Best of 3 matches\n3. Random character selection\n4. Finals best of 5",
        highlights: [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "Kazuya", score: "3-2", prize: "₹12,500" },
            { position: 2, name: "Heihachi", score: "2-3", prize: "₹7,500" },
            { position: 3, name: "Paul", score: "2-1", prize: "₹5,000" },
            { position: 4, name: "Law", score: "1-2", prize: "-" },
            { position: 5, name: "King", score: "0-2", prize: "-" }
        ]
    },
    {
        id: 19,
        name: "Clash Royale Showdown",
        description: "Mobile esports tournament featuring Clash Royale battles.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "past",
        date: "15 April 2025",
        day: "15",
        month: "April",
        year: "2025",
        location: "Online",
        participants: "32 Players",
        prize: "20,000 Prize Pool",
        rules: "1. 1v1 battles\n2. Best of 3 matches\n3. Deck lock after first match\n4. Standard tournament rules",
        highlights: [
            "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "PekkaPlay", score: "3-1", prize: "₹10,000" },
            { position: 2, name: "HogRider", score: "1-3", prize: "₹6,000" },
            { position: 3, name: "MinerControl", score: "2-0", prize: "₹4,000" },
            { position: 4, name: "XBowSpam", score: "0-2", prize: "-" },
            { position: 5, name: "GolemBeatdown", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 20,
        name: "League of Legends Clash",
        description: "Team-based League of Legends tournament with competitive rules.",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "past",
        date: "05 April 2025",
        day: "05",
        month: "April",
        year: "2025",
        location: "Online",
        participants: "8 Teams",
        prize: "50,000 Prize Pool",
        rules: "1. Teams of 5 players\n2. Single elimination bracket\n3. Best of 3 matches\n4. Standard competitive rules",
        highlights: [
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "DragonSlayers", score: "2-1", prize: "₹25,000" },
            { position: 2, name: "BaronStealers", score: "1-2", prize: "₹15,000" },
            { position: 3, name: "NexusDestroyers", score: "2-0", prize: "₹10,000" },
            { position: 4, name: "Inhibitors", score: "0-2", prize: "-" },
            { position: 5, name: "MinionWave", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 21,
        name: "FIFA 24 Tournament",
        description: "1v1 FIFA 24 tournament for football gaming enthusiasts.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        category: "past",
        date: "28 March 2025",
        day: "28",
        month: "March",
        year: "2025",
        location: "Our Gaming Center",
        participants: "32 Players",
        prize: "30,000 Prize Pool",
        rules: "1. Single elimination bracket\n2. 6-minute halves\n3. Random team selection\n4. Finals best of 3",
        highlights: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "UltimateTeam", score: "3-1", prize: "₹15,000" },
            { position: 2, name: "ProClubs", score: "1-3", prize: "₹10,000" },
            { position: 3, name: "CareerMode", score: "2-0", prize: "₹5,000" },
            { position: 4, name: "VoltaFootball", score: "0-2", prize: "-" },
            { position: 5, name: "SkillGames", score: "1-2", prize: "-" }
        ]
    },
    
    // 2 more ongoing events
    {
        id: 22,
        name: "Rainbow Six Siege League",
        description: "Tactical shooter tournament featuring intense team-based gameplay.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "ongoing",
        date: "08 June 2025",
        day: "08",
        month: "June",
        year: "2025",
        location: "Online",
        participants: "12 Teams",
        prize: "1,50,000 Prize Pool",
        rules: "1. Teams of 5 players\n2. Best of 3 matches\n3. Standard competitive rules\n4. Map veto system",
        highlights: [
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: true,
        results: [
            { position: 1, name: "TeamSix", score: "2-1", prize: "₹75,000" },
            { position: 2, name: "RainbowOps", score: "1-2", prize: "₹50,000" },
            { position: 3, name: "SiegeMasters", score: "2-0", prize: "₹25,000" },
            { position: 4, name: "TacticalTeam", score: "0-2", prize: "-" },
            { position: 5, name: "Defenders", score: "1-2", prize: "-" }
        ]
    },
    {
        id: 23,
        name: "Super Smash Bros Ultimate",
        description: "Crossover fighting game tournament featuring Nintendo characters.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        category: "ongoing",
        date: "12 June 2025",
        day: "12",
        month: "June",
        year: "2025",
        location: "Our Gaming Center",
        participants: "48 Players",
        prize: "60,000 Prize Pool",
        rules: "1. 1v1 matches\n2. Double elimination bracket\n3. Best of 3 matches\n4. Finals best of 5",
        highlights: [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ],
        isTeamEvent: false,
        results: [
            { position: 1, name: "MarioMain", score: "3-2", prize: "₹30,000" },
            { position: 2, name: "LinkPlayer", score: "2-3", prize: "₹20,000" },
            { position: 3, name: "PikachuPro", score: "2-1", prize: "₹10,000" },
            { position: 4, name: "KirbyKing", score: "1-2", prize: "-" },
            { position: 5, name: "DonkeyKong", score: "0-2", prize: "-" }
        ]
    }
    // ... (include all other event objects from the original code)
];

// DOM elements
const eventsTimeline = document.getElementById('events-timeline');
const highlightGallery = document.getElementById('highlight-gallery');
const eventsSearchInput = document.getElementById('events-search');
const searchBtn = document.getElementById('search-btn');
const clearSearchBtn = document.getElementById('clear-search');
const searchSuggestions = document.getElementById('search-suggestions');
const filterBtns = document.querySelectorAll('.filter-btn');
const loader = document.getElementById('loader');
const stickySearchBar = document.getElementById('sticky-search-bar');
const stickySearchInput = document.getElementById('sticky-search');
const stickySearchBtn = document.getElementById('sticky-search-btn');
const stickyClearSearchBtn = document.getElementById('sticky-clear-search');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close');
const eventModal = document.getElementById('event-modal');
const eventModalClose = document.querySelector('.event-modal-close');
const initialLoader = document.getElementById('initial-loader');

// Function to show loading animation
function showLoader() {
    loader.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to hide loading animation
function hideLoader() {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to show button loader
function showButtonLoader(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        const textSpan = button.querySelector('#register-text');
        const loaderSpan = button.querySelector('#register-loader');
        
        if (textSpan && loaderSpan) {
            textSpan.style.display = 'none';
            loaderSpan.style.display = 'inline-block';
            button.disabled = true;
        }
    }
}

// Function to hide button loader
function hideButtonLoader(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        const textSpan = button.querySelector('#register-text');
        const loaderSpan = button.querySelector('#register-loader');
        
        if (textSpan && loaderSpan) {
            textSpan.style.display = 'inline';
            loaderSpan.style.display = 'none';
            button.disabled = false;
        }
    }
}

// Function to generate event cards
function generateEventCards(eventsToDisplay = allEvents) {
    eventsTimeline.innerHTML = '';
    
    if (eventsToDisplay.length === 0) {
        const noResults = document.getElementById('no-results');
        noResults.style.display = 'block';
        
        // Scroll to the no results message
        setTimeout(() => {
            noResults.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
        
        return;
    } else {
        document.getElementById('no-results').style.display = 'none';
    }
    
    eventsToDisplay.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = `timeline-item ${event.category}`;
        eventCard.dataset.id = event.id;
        
        eventCard.innerHTML = `
            <div class="timeline-date">
                <div class="timeline-date-content">
                    <span class="day">${event.day}</span>
                    <span class="month">${event.month}</span>
                    <span class="year">${event.year}</span>
                </div>
            </div>
            <div class="timeline-content">
                <div class="timeline-img" style="background-image: url('${event.image}')"></div>
                <div class="timeline-info">
                    <h3>${event.name}</h3>
                    <p class="event-desc">${event.description}</p>
                    <div class="event-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                        <span><i class="fas fa-users"></i> ${event.participants}</span>
                        <span><i class="fas fa-rupee-sign"></i> ${event.prize}</span>
                    </div>
                    <div class="event-actions">
                        ${event.category === 'past' ? 
                            '<button class="btn outline-btn view-results-btn"><i class="fas fa-trophy"></i> View Results</button><button class="btn outline-btn view-gallery-btn"><i class="fas fa-images"></i> Gallery</button>' : 
                            '<button class="btn register-btn"><i class="fas fa-user-plus"></i> Register Now</button><button class="btn outline-btn view-details-btn"><i class="fas fa-info-circle"></i> Details</button>'}
                    </div>
                    ${event.category === 'upcoming' ? '<div class="event-countdown"><i class="fas fa-clock"></i> Starts in: <span class="countdown-timer"></span></div>' : ''}
                </div>
            </div>
        `;
        
        eventsTimeline.appendChild(eventCard);
    });

    // Initialize countdown timers for upcoming events
    initializeCountdowns();
    
    // Add event listeners to all buttons
    addEventButtonListeners();
    
    // Animate the newly added items
    animateOnScroll();
}

// Function to add event listeners to all buttons
function addEventButtonListeners() {
    // Register buttons
    document.querySelectorAll('.register-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.closest('.timeline-item').dataset.id);
            openEventModal(eventId, 'register');
        });
    });
    
    // Details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.closest('.timeline-item').dataset.id);
            openEventModal(eventId, 'details');
        });
    });
    
    // View results buttons (past events)
    document.querySelectorAll('.view-results-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.closest('.timeline-item').dataset.id);
            openEventModal(eventId, 'results');
        });
    });
    
    // Gallery buttons (past events)
    document.querySelectorAll('.view-gallery-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const eventId = parseInt(this.closest('.timeline-item').dataset.id);
            openEventModal(eventId, 'gallery');
        });
    });
}

// Function to open event modal
function openEventModal(eventId, mode) {
    const event = allEvents.find(e => e.id === eventId);
    if (!event) return;
    
    // Show loading state for results or gallery
    if (mode === 'results' || mode === 'gallery') {
        showLoader();
    }
    
    // Set modal content based on the event
    document.getElementById('modal-event-title').textContent = event.name;
    
    // Create meta information
    const metaHtml = `
        <span><i class="fas fa-calendar"></i> ${event.date}</span>
        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
        <span><i class="fas fa-rupee-sign"></i> ${event.prize}</span>
    `;
    document.getElementById('modal-event-meta').innerHTML = metaHtml;
    
    // Set other details
    document.getElementById('modal-event-date').textContent = event.date;
    document.getElementById('modal-event-location').textContent = event.location;
    document.getElementById('modal-event-prize').textContent = event.prize;
    document.getElementById('modal-event-participants').textContent = event.participants;
    document.getElementById('modal-event-description').textContent = event.description;
    
    // Format rules with line breaks
    const rulesWithBreaks = event.rules.replace(/\n/g, '<br>');
    document.getElementById('modal-event-rules').innerHTML = rulesWithBreaks;
    
    // Show/hide appropriate sections based on mode
    const registrationForm = document.getElementById('registration-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const eventResults = document.getElementById('event-results');
    const eventGallery = document.getElementById('event-gallery');
    const resultsLoader = document.getElementById('results-loader');
    const resultsContent = document.getElementById('results-content');
    const galleryLoader = document.getElementById('gallery-loader');
    const galleryContent = document.getElementById('gallery-content');
    
    // Hide all sections first
    registrationForm.style.display = 'none';
    confirmationMessage.style.display = 'none';
    eventResults.style.display = 'none';
    eventGallery.style.display = 'none';
    
    if (mode === 'register') {
        registrationForm.style.display = 'block';
        confirmationMessage.style.display = 'none';
        
        // Set up team members section if team event
        const teamMembersSection = document.getElementById('team-members-section');
        if (event.isTeamEvent) {
            teamMembersSection.style.display = 'block';
            // Reset to one team member
            teamMembersSection.innerHTML = `
                <h4>Team Members (if team event)</h4>
                <div class="team-member">
                    <input type="text" placeholder="Member 1 Name" class="team-member-name">
                    <input type="text" placeholder="Member 1 In-Game ID" class="team-member-id">
                </div>
            `;
        } else {
            teamMembersSection.style.display = 'none';
        }
    } else if (mode === 'details') {
        registrationForm.style.display = 'none';
        confirmationMessage.style.display = 'none';
    } else if (mode === 'results') {
        eventResults.style.display = 'block';
        resultsLoader.style.display = 'flex';
        resultsContent.style.display = 'none';
        
        // Simulate loading results with a delay
        setTimeout(() => {
            loadEventResults(event);
            resultsLoader.style.display = 'none';
            resultsContent.style.display = 'block';
            hideLoader();
        }, 1000);
    } else if (mode === 'gallery') {
        eventGallery.style.display = 'block';
        galleryLoader.style.display = 'flex';
        galleryContent.style.display = 'none';
        
        // Simulate loading gallery with a delay
        setTimeout(() => {
            loadEventGallery(event);
            galleryLoader.style.display = 'none';
            galleryContent.style.display = 'block';
            hideLoader();
        }, 1000);
    }
    
    // Show the modal
    eventModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to load event results
function loadEventResults(event) {
    const resultsTableBody = document.getElementById('results-table-body');
    resultsTableBody.innerHTML = '';
    
    if (event.results && event.results.length > 0) {
        event.results.forEach(result => {
            const row = document.createElement('tr');
            row.className = `position-${result.position}`;
            row.innerHTML = `
                <td>${result.position}</td>
                <td>${result.name}</td>
                <td>${result.score}</td>
                <td>${result.prize}</td>
            `;
            resultsTableBody.appendChild(row);
        });
    } else {
        resultsTableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center;">No results available yet</td>
            </tr>
        `;
    }
}

// Function to load event gallery
function loadEventGallery(event) {
    const galleryItems = document.getElementById('gallery-items');
    galleryItems.innerHTML = '';
    
    if (event.highlights && event.highlights.length > 0) {
        event.highlights.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image}" alt="${event.name} highlight ${index + 1}">
            `;
            galleryItems.appendChild(galleryItem);
        });
    } else {
        galleryItems.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 20px;">
                No gallery images available yet
            </div>
        `;
    }
}

// Function to generate event highlights
function generateEventHighlights() {
    highlightGallery.innerHTML = '';
    
    // Get all highlights from all events
    const allHighlights = [];
    allEvents.forEach(event => {
        event.highlights.forEach((highlight, index) => {
            allHighlights.push({
                image: highlight,
                eventName: event.name,
                index: index
            });
        });
    });
    
    // Display random 6 highlights
    const shuffledHighlights = allHighlights.sort(() => 0.5 - Math.random());
    const selectedHighlights = shuffledHighlights.slice(0, 6);
    
    selectedHighlights.forEach(highlight => {
        const highlightCard = document.createElement('div');
        highlightCard.className = 'highlight-card';
        
        highlightCard.innerHTML = `
            <img src="${highlight.image}" alt="${highlight.eventName} highlight">
            <div class="highlight-overlay">
                <h3>${highlight.eventName}</h3>
                <button class="btn view-btn view-highlight-btn">View Photos</button>
            </div>
        `;
        
        highlightGallery.appendChild(highlightCard);
    });
    
    // Add event listeners to highlight buttons
    document.querySelectorAll('.view-highlight-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const eventName = this.closest('.highlight-overlay').querySelector('h3').textContent;
            const event = allEvents.find(e => e.name === eventName);
            if (event) {
                openEventModal(event.id, 'gallery');
            }
        });
    });
}

// Function to initialize countdown timers
function initializeCountdowns() {
    document.querySelectorAll('.timeline-item.upcoming').forEach(event => {
        const dateStr = `${event.querySelector('.month').textContent} ${event.querySelector('.day').textContent}, ${event.querySelector('.year').textContent}`;
        const eventDate = new Date(dateStr);
        const now = new Date();
        
        if (eventDate > now) {
            const countdownEl = event.querySelector('.countdown-timer');
            
            function updateCountdown() {
                const now = new Date();
                const diff = eventDate - now;
                
                if (diff <= 0) {
                    countdownEl.textContent = 'Event started!';
                    return;
                }
                
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                
                countdownEl.textContent = `${days}d ${hours}h ${minutes}m`;
            }
            
            updateCountdown();
            setInterval(updateCountdown, 60000);
        }
    });
}

// Function to filter events by category
function filterByCategory(category) {
    showLoader();
    
    setTimeout(() => {
        if (category === 'all') {
            generateEventCards(allEvents);
        } else {
            const filteredEvents = allEvents.filter(event => event.category === category);
            generateEventCards(filteredEvents);
        }
        hideLoader();
    }, 800);
}

// Function to highlight matching text
function highlightMatch(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Function to show search suggestions
function showSuggestions(matchedEvents, searchTerm) {
    if (matchedEvents.length === 0) {
        searchSuggestions.innerHTML = '<div class="suggestion-item">No events found</div>';
        searchSuggestions.classList.add('visible');
        return;
    }
    
    searchSuggestions.innerHTML = '';
    
    matchedEvents.forEach(event => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        
        const highlightedName = highlightMatch(event.name, searchTerm);
        suggestionItem.innerHTML = `
            <i class="fas fa-calendar"></i>
            <div>
                <strong>${highlightedName}</strong>
                <div class="suggestion-details">
                    <small>${event.date} • ${event.location}</small>
                    <p>${event.description}</p>
                </div>
            </div>
        `;
        
        suggestionItem.addEventListener('click', () => {
            eventsSearchInput.value = event.name;
            stickySearchInput.value = event.name;
            searchEvents();
            searchSuggestions.classList.remove('visible');
        });
        
        searchSuggestions.appendChild(suggestionItem);
    });
    
    searchSuggestions.classList.add('visible');
}

// Function to search events
function searchEvents() {
    const searchTerm = eventsSearchInput.value.toLowerCase().trim();
    const stickySearchTerm = stickySearchInput.value.toLowerCase().trim();
    const activeTerm = searchTerm || stickySearchTerm;
    
    // Remove previous results count if exists
    const existingCount = document.querySelector('.search-results-count');
    if (existingCount) {
        existingCount.remove();
    }
    
    if (activeTerm === '') {
        generateEventCards(allEvents);
        return;
    }
    
    showLoader();
    
    setTimeout(() => {
        const matchingEvents = allEvents.filter(event => 
            event.name.toLowerCase().includes(activeTerm) || 
            event.description.toLowerCase().includes(activeTerm) ||
            event.location.toLowerCase().includes(activeTerm)
        );
        
        // Display results
        generateEventCards(matchingEvents);
        
        // Add match count indicator if there are results
        if (matchingEvents.length > 0) {
            const resultsCount = document.createElement('div');
            resultsCount.className = 'search-results-count';
            resultsCount.textContent = `${matchingEvents.length} event(s) found`;
            eventsTimeline.parentNode.insertBefore(resultsCount, eventsTimeline);
            
            // Scroll to results
            setTimeout(() => {
                eventsTimeline.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
        
        // Sync search terms
        if (searchTerm && !stickySearchTerm) {
            stickySearchInput.value = searchTerm;
        } else if (stickySearchTerm && !searchTerm) {
            eventsSearchInput.value = stickySearchTerm;
        }
        
        hideLoader();
    }, 800);
}

// Function to reset search and filters
function resetSearch() {
    showLoader();
    
    // Reset search inputs
    eventsSearchInput.value = '';
    stickySearchInput.value = '';
    eventsSearchInput.focus();
    clearSearchBtn.style.display = 'none';
    stickyClearSearchBtn.style.display = 'none';
    searchSuggestions.classList.remove('visible');
    
    // Reset filters
    filterBtns.forEach(btn => {
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show all events after a slight delay
    setTimeout(() => {
        generateEventCards(allEvents);
        hideLoader();
        
        // Scroll to the events section
        document.querySelector('.events-timeline').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 500);
}

// Function to handle sticky search bar
function handleStickySearch() {
    const heroSection = document.querySelector('.page-hero');
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > heroHeight) {
        stickySearchBar.classList.add('active');
    } else {
        stickySearchBar.classList.remove('active');
    }
}

// Function to animate timeline items on scroll
function animateOnScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.classList.add('visible');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Show initial loader
    setTimeout(() => {
        // Generate content
        generateEventCards();
        generateEventHighlights();
        
        // Hide initial loader
        initialLoader.style.display = 'none';
    }, 1500);
    
    // Initialize sticky search
    window.addEventListener('scroll', handleStickySearch);
    
    // Add event listener for reset button
    document.getElementById('reset-search-btn').addEventListener('click', resetSearch);
    
    // Event modal close button
    eventModalClose.addEventListener('click', () => {
        eventModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            eventModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Add team member button
    document.getElementById('add-member-btn').addEventListener('click', function() {
        const teamMembersSection = document.getElementById('team-members-section');
        const memberCount = teamMembersSection.querySelectorAll('.team-member').length + 1;
        
        const newMember = document.createElement('div');
        newMember.className = 'team-member';
        newMember.innerHTML = `
            <input type="text" placeholder="Member ${memberCount} Name" class="team-member-name">
            <input type="text" placeholder="Member ${memberCount} In-Game ID" class="team-member-id">
            <button type="button" class="remove-member-btn"><i class="fas fa-times"></i></button>
        `;
        
        teamMembersSection.appendChild(newMember);
        
        // Add event listener to remove button
        newMember.querySelector('.remove-member-btn').addEventListener('click', function() {
            teamMembersSection.removeChild(newMember);
            // Renumber remaining members
            const members = teamMembersSection.querySelectorAll('.team-member');
            members.forEach((member, index) => {
                const inputs = member.querySelectorAll('input');
                inputs[0].placeholder = `Member ${index + 1} Name`;
                inputs[1].placeholder = `Member ${index + 1} In-Game ID`;
            });
        });
    });
    
    // Registration form submission
    document.getElementById('event-registration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state on submit button
        showButtonLoader('submit-registration');
        
        // Get form data
        const playerName = document.getElementById('player-name').value;
        const playerEmail = document.getElementById('player-email').value;
        const playerPhone = document.getElementById('player-phone').value;
        const playerGameId = document.getElementById('player-game-id').value;
        const playerLevel = document.getElementById('player-level').value;
        const additionalNotes = document.getElementById('additional-notes').value;
        
        // Get team members if team event
        const teamMembers = [];
        const teamMemberElements = document.querySelectorAll('.team-member');
        teamMemberElements.forEach(member => {
            const name = member.querySelector('.team-member-name').value;
            const gameId = member.querySelector('.team-member-id').value;
            if (name && gameId) {
                teamMembers.push({ name, gameId });
            }
        });
        
        // Simulate form submission with a delay
        setTimeout(() => {
            // In a real app, you would send this data to your server
            console.log('Registration submitted:', {
                playerName,
                playerEmail,
                playerPhone,
                playerGameId,
                playerLevel,
                teamMembers,
                additionalNotes
            });
            
            // Hide button loader
            hideButtonLoader('submit-registration');
            
            // Show confirmation message
            document.getElementById('registration-form').style.display = 'none';
            const confirmationMessage = document.getElementById('confirmation-message');
            confirmationMessage.style.display = 'block';
            document.getElementById('confirmed-event-name').textContent = 
                document.getElementById('modal-event-title').textContent;
        }, 1500);
    });
    
    // Close confirmation button
    document.getElementById('close-confirmation').addEventListener('click', function() {
        eventModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cancel registration button
    document.getElementById('cancel-registration').addEventListener('click', function() {
        eventModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByCategory(btn.dataset.filter);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', searchEvents);
    stickySearchBtn.addEventListener('click', searchEvents);
    
    eventsSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchEvents();
            searchSuggestions.classList.remove('visible');
        }
    });
    
    stickySearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchEvents();
        }
    });
    
    eventsSearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm.length === 0) {
            searchSuggestions.classList.remove('visible');
            clearSearchBtn.style.display = 'none';
            return;
        }
        
        clearSearchBtn.style.display = 'flex';
        
        const matchedEvents = allEvents.filter(event => 
            event.name.toLowerCase().includes(searchTerm) || 
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
        
        showSuggestions(matchedEvents, searchTerm);
    });
    
    stickySearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm.length === 0) {
            stickyClearSearchBtn.style.display = 'none';
            return;
        }
        
        stickyClearSearchBtn.style.display = 'flex';
    });
    
    clearSearchBtn.addEventListener('click', () => {
        eventsSearchInput.value = '';
        stickySearchInput.value = '';
        eventsSearchInput.focus();
        clearSearchBtn.style.display = 'none';
        stickyClearSearchBtn.style.display = 'none';
        searchSuggestions.classList.remove('visible');
        generateEventCards(allEvents);
    });
    
    stickyClearSearchBtn.addEventListener('click', () => {
        eventsSearchInput.value = '';
        stickySearchInput.value = '';
        stickySearchInput.focus();
        clearSearchBtn.style.display = 'none';
        stickyClearSearchBtn.style.display = 'none';
        generateEventCards(allEvents);
    });
    
    document.addEventListener('click', (e) => {
        if (!eventsSearchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.classList.remove('visible');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Modal functionality
    contactBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});