// Game data (should match index.html)
const allGames = [
    // Same as in index.html
    {
        "id": 1,
        "name": "Apex Legends Mobile 2.0",
        "description": "Mobile hero shooter battle royale with optimized touch controls. Features 60-player matches, unique Legends with special abilities, and console-quality graphics. Regular updates bring new content and gameplay modes. Offers both casual and competitive ranked play with smooth performance on mobile devices.",
        "image": "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "60-player battle royale",
            "Unique character abilities",
            "Optimized touch controls",
            "Regular content updates",
            "Cross-platform progression"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.1 or iOS 11",
                "CPU: Snapdragon 625 equivalent",
                "RAM: 3GB",
                "Storage: 4GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 845 equivalent",
                "RAM: 6GB",
                "Storage: 6GB"
            ]
        },
        "quickInfo": {
            "developer": "Electronic Arts",
            "publisher": "EA",
            "genre": "Battle Royale",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 2,
        "name": "Genshin Impact: Aurora Expansion",
        "description": "Open-world action RPG with gacha mechanics in its latest expansion. Explore the vast world of Teyvat with elemental combat, puzzle-solving, and co-op multiplayer. Features stunning anime-style visuals and regular content updates with new characters and regions.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open-world exploration",
            "Elemental combat system",
            "Gacha character collection",
            "Co-op multiplayer",
            "Regular content updates"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.1 or iOS 10",
                "CPU: Snapdragon 845 equivalent",
                "RAM: 4GB",
                "Storage: 10GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 865 equivalent",
                "RAM: 6GB",
                "Storage: 15GB"
            ]
        },
        "quickInfo": {
            "developer": "miHoYo",
            "publisher": "miHoYo",
            "genre": "Action RPG",
            "modes": "Single-player, Multiplayer",
            "platforms": "Android, iOS, PC, PS4/5",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 3,
        "name": "Marvel Snap: Infinite Wars",
        "description": "Fast-paced digital card game featuring Marvel characters. Quick 3-minute matches with strategic deck building and location-based gameplay. Collect cards, upgrade variants, and climb the ranked ladder in this competitive CCG.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Quick 3-minute matches",
            "Marvel character cards",
            "Strategic deck building",
            "Ranked competitive play",
            "Regular content updates"
        ],
        "requirements": {
            "min": [
                "OS: Android 7.0 or iOS 11",
                "CPU: Snapdragon 625 equivalent",
                "RAM: 2GB",
                "Storage: 2GB"
            ],
            "rec": [
                "OS: Android 9 or iOS 12",
                "CPU: Snapdragon 835 equivalent",
                "RAM: 4GB",
                "Storage: 3GB"
            ]
        },
        "quickInfo": {
            "developer": "Second Dinner",
            "publisher": "Nuverse",
            "genre": "Digital Card Game",
            "modes": "Multiplayer",
            "platforms": "Android, iOS, PC",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 4,
        "name": "Call of Duty Mobile: Shadow Ops",
        "description": "Premium FPS experience on mobile with customizable controls and multiple game modes. Features classic multiplayer maps, 100-player battle royale, and signature Call of Duty gunplay. Regular seasons bring new content, weapons, and operators. Console-quality graphics optimized for mobile devices with controller support.",
        "image": "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "100-player battle royale",
            "Classic multiplayer modes",
            "Customizable controls",
            "Controller support",
            "Regular seasonal content"
        ],
        "requirements": {
            "min": [
                "OS: Android 7.0 or iOS 10",
                "CPU: Snapdragon 625 equivalent",
                "RAM: 3GB",
                "Storage: 5GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 855 equivalent",
                "RAM: 6GB",
                "Storage: 8GB"
            ]
        },
        "quickInfo": {
            "developer": "TiMi Studio Group",
            "publisher": "Activision",
            "genre": "First-person Shooter",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 5,
        "name": "Stardew Valley Mobile 2.0",
        "description": "Charming farming simulator RPG with expanded multiplayer features. Build your dream farm, raise animals, mine for resources, and build relationships with townsfolk. New update adds co-op farming, additional crops, and seasonal events. Perfect for casual play with deep progression systems.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.8,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Expanded multiplayer farming",
            "New crops and animals",
            "Seasonal events",
            "Mining and combat",
            "Relationship system"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.0 or iOS 11",
                "CPU: Snapdragon 450 equivalent",
                "RAM: 2GB",
                "Storage: 1GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 665 equivalent",
                "RAM: 4GB",
                "Storage: 2GB"
            ]
        },
        "quickInfo": {
            "developer": "ConcernedApe",
            "publisher": "Chucklefish",
            "genre": "Farming Simulator",
            "modes": "Single-player, Multiplayer",
            "platforms": "Android, iOS",
            "price": "$7.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 6,
        "name": "Clash of Clans: Kingdoms",
        "description": "Strategic village builder with clan warfare mechanics. Build defenses, train troops, and attack other players in this mobile strategy classic. New Kingdom update adds castle sieges, royal troops, and territory control. Join a clan, participate in Clan Wars, and climb the global leaderboards.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.4,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Base building strategy",
            "Clan wars and events",
            "Kingdom territory control",
            "Regular balance updates",
            "Global leaderboards"
        ],
        "requirements": {
            "min": [
                "OS: Android 5.0 or iOS 10",
                "CPU: Snapdragon 430 equivalent",
                "RAM: 2GB",
                "Storage: 500MB"
            ],
            "rec": [
                "OS: Android 9 or iOS 12",
                "CPU: Snapdragon 660 equivalent",
                "RAM: 3GB",
                "Storage: 1GB"
            ]
        },
        "quickInfo": {
            "developer": "Supercell",
            "publisher": "Supercell",
            "genre": "Strategy",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 7,
        "name": "Honkai Star Rail: Chronos Update",
        "description": "Turn-based space fantasy RPG with stunning anime visuals. Explore diverse worlds, build teams of unique characters, and engage in strategic combat. The Chronos update introduces time-manipulation mechanics, new planets, and story chapters. Gacha system with guaranteed pity for rare characters.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.7,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Turn-based combat",
            "Space exploration",
            "Character collection",
            "Time-manipulation mechanics",
            "Cinematic story"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.0 or iOS 11",
                "CPU: Snapdragon 835 equivalent",
                "RAM: 4GB",
                "Storage: 8GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 865 equivalent",
                "RAM: 6GB",
                "Storage: 12GB"
            ]
        },
        "quickInfo": {
            "developer": "miHoYo",
            "publisher": "miHoYo",
            "genre": "Turn-based RPG",
            "modes": "Single-player",
            "platforms": "Android, iOS, PC",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 8,
        "name": "Among Us: Galaxy Edition",
        "description": "Multiplayer social deduction game set in space with new galactic maps and roles. Crewmates complete tasks while impostors sabotage and eliminate players. The Galaxy Edition adds cosmic-themed skins, holographic disguises, and zero-gravity areas. Cross-platform play enables 4-15 player matches with voice chat support. Regular updates introduce new sabotage methods and task types.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.3,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "4-15 player online matches",
            "New cosmic maps",
            "Impostor roles",
            "Cross-platform play",
            "Custom game settings"
        ],
        "requirements": {
            "min": [
                "OS: Android 6.0 or iOS 10",
                "CPU: Snapdragon 425 equivalent",
                "RAM: 1GB",
                "Storage: 250MB"
            ],
            "rec": [
                "OS: Android 9 or iOS 12",
                "CPU: Snapdragon 625 equivalent",
                "RAM: 2GB",
                "Storage: 500MB"
            ]
        },
        "quickInfo": {
            "developer": "InnerSloth",
            "publisher": "InnerSloth",
            "genre": "Social Deduction",
            "modes": "Multiplayer",
            "platforms": "Android, iOS, PC, Console",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 9,
        "name": "Diablo Immortal: Dark Nexus",
        "description": "MMO action RPG set between Diablo II and III, featuring six classes and hellish dungeons. The Dark Nexus update adds necromantic runes, corrupted zones, and clan vs. clan PvP. Auto-navigation assists mobile play while preserving hardcore loot mechanics. Daily bounties and legendary gear farming provide endless progression.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.2,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Six character classes",
            "Corrupted zone events",
            "Clan PvP battles",
            "Legendary loot system",
            "Controller support"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.0 or iOS 11",
                "CPU: Snapdragon 660 equivalent",
                "RAM: 3GB",
                "Storage: 8GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 855 equivalent",
                "RAM: 6GB",
                "Storage: 12GB"
            ]
        },
        "quickInfo": {
            "developer": "Blizzard Entertainment",
            "publisher": "Blizzard Entertainment",
            "genre": "MMO Action RPG",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 10,
        "name": "Monument Valley 3",
        "description": "Surreal puzzle adventure featuring impossible architecture and optical illusions. Guide silent princess Ida through mesmerizing isometric landscapes manipulating perspective. New mechanics include color-shifting platforms and recursive time loops. Soothing soundtrack and minimalist art style create a meditative experience. Expanded narrative explores themes of forgiveness and connection.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Impossible geometry puzzles",
            "Perspective-shifting gameplay",
            "Minimalist art style",
            "Emotional narrative",
            "Soothing soundtrack"
        ],
        "requirements": {
            "min": [
                "OS: Android 7.0 or iOS 11",
                "CPU: Snapdragon 430 equivalent",
                "RAM: 2GB",
                "Storage: 1GB"
            ],
            "rec": [
                "OS: Android 9 or iOS 13",
                "CPU: Snapdragon 665 equivalent",
                "RAM: 3GB",
                "Storage: 1.5GB"
            ]
        },
        "quickInfo": {
            "developer": "ustwo games",
            "publisher": "ustwo games",
            "genre": "Puzzle",
            "modes": "Single-player",
            "platforms": "Android, iOS",
            "price": "$4.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 11,
        "name": "Honkai Star Rail",
        "description": "Turn-based space fantasy RPG with anime-style visuals and gacha mechanics. Build teams of characters with unique combat roles and elemental affinities. Explore the Astral Express starship and alien worlds with puzzle-solving elements. Strategic combat combines traditional turn systems with position-based ultimates. Regular updates add new story chapters and limited-time events.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.8,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Turn-based combat",
            "Character collection",
            "Space exploration",
            "Cinematic story",
            "Gacha system"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.0 or iOS 11",
                "CPU: Snapdragon 835 equivalent",
                "RAM: 4GB",
                "Storage: 8GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 865 equivalent",
                "RAM: 6GB",
                "Storage: 12GB"
            ]
        },
        "quickInfo": {
            "developer": "miHoYo",
            "publisher": "miHoYo",
            "genre": "Turn-based RPG",
            "modes": "Single-player",
            "platforms": "Android, iOS, PC",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 12,
        "name": "Wuthering Waves",
        "description": "Open-world action RPG with dynamic combat and parkour-style traversal. Use echo system to absorb enemy abilities and customize your playstyle. Real-time weather affects combat with lightning strikes and sandstorms. Gorgeous anime-inspired visuals with day/night cycles and destructible environments. Story-driven quests with optional co-op dungeon challenges.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.6,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open-world exploration",
            "Echo ability system",
            "Dynamic weather combat",
            "Parkour movement",
            "Co-op dungeons"
        ],
        "requirements": {
            "min": [
                "OS: Android 9 or iOS 12",
                "CPU: Snapdragon 855 equivalent",
                "RAM: 6GB",
                "Storage: 10GB"
            ],
            "rec": [
                "OS: Android 11 or iOS 14",
                "CPU: Snapdragon 8 Gen 1 equivalent",
                "RAM: 8GB",
                "Storage: 15GB"
            ]
        },
        "quickInfo": {
            "developer": "Kuro Games",
            "publisher": "Kuro Games",
            "genre": "Action RPG",
            "modes": "Single-player, Co-op",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 13,
        "name": "Honor of Kings",
        "description": "China's most popular MOBA with over 100 million daily players. Fast-paced 5v5 matches with 100+ heroes across six roles. Simplified controls optimized for mobile with 15-minute average match length. Ranked seasons, esports tournaments, and constant meta updates. Regional servers ensure low-latency competitive play.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "5v5 MOBA battles",
            "100+ playable heroes",
            "15-minute matches",
            "Ranked seasons",
            "Esports integration"
        ],
        "requirements": {
            "min": [
                "OS: Android 5.0 or iOS 9",
                "CPU: Snapdragon 625 equivalent",
                "RAM: 3GB",
                "Storage: 3GB"
            ],
            "rec": [
                "OS: Android 9 or iOS 12",
                "CPU: Snapdragon 845 equivalent",
                "RAM: 6GB",
                "Storage: 5GB"
            ]
        },
        "quickInfo": {
            "developer": "TiMi Studio Group",
            "publisher": "Tencent Games",
            "genre": "MOBA",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 14,
        "name": "PUBG Mobile",
        "description": "The mobile version of the battle royale phenomenon featuring 100-player matches on classic Erangel and new themed maps. Realistic gunplay with ballistics physics and vehicle combat. Royale Pass seasons offer cosmetic rewards, while Arena mode provides quick TDM matches. Optimized for smooth performance across devices.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "100-player battle royale",
            "Multiple themed maps",
            "Realistic gun physics",
            "Royale Pass seasons",
            "Arena deathmatch mode"
        ],
        "requirements": {
            "min": [
                "OS: Android 5.1 or iOS 9",
                "CPU: Snapdragon 625 equivalent",
                "RAM: 3GB",
                "Storage: 4GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 855 equivalent",
                "RAM: 6GB",
                "Storage: 6GB"
            ]
        },
        "quickInfo": {
            "developer": "LightSpeed & Quantum Studios",
            "publisher": "Tencent Games",
            "genre": "Battle Royale",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 15,
        "name": "Garena Free Fire",
        "description": "Fast-paced battle royale optimized for low-end devices with 50-player matches. Character system grants unique abilities like healing or invisibility. Matches last 10 minutes with shrinking zones and airdrops. Pet companions provide combat bonuses. Regular collaborations with brands like McLaren and Street Fighter.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.4,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "50-player battles",
            "10-minute matches",
            "Character abilities",
            "Pet companions",
            "Brand collaborations"
        ],
        "requirements": {
            "min": [
                "OS: Android 4.4 or iOS 9",
                "CPU: MediaTek MT6737 equivalent",
                "RAM: 2GB",
                "Storage: 2GB"
            ],
            "rec": [
                "OS: Android 8 or iOS 11",
                "CPU: Snapdragon 665 equivalent",
                "RAM: 4GB",
                "Storage: 4GB"
            ]
        },
        "quickInfo": {
            "developer": "111dots Studio",
            "publisher": "Garena",
            "genre": "Battle Royale",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 17,
        "name": "Genshin Impact: Celestial Odyssey",
        "description": "Expansive open-world action RPG with elemental combat and gacha mechanics. Explore seven nations of Teyvat, solve environmental puzzles, and battle using elemental reactions. Celestial Odyssey update adds floating islands, aerial combat, and the celestial faction storyline. Cross-save support between mobile and PC platforms.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.8,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open-world exploration",
            "Elemental reaction combat",
            "Gacha character system",
            "Cross-platform progression",
            "Co-op domains"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.1 or iOS 11",
                "CPU: Snapdragon 845 equivalent",
                "RAM: 4GB",
                "Storage: 15GB"
            ],
            "rec": [
                "OS: Android 10 or iOS 13",
                "CPU: Snapdragon 865 equivalent",
                "RAM: 6GB",
                "Storage: 20GB"
            ]
        },
        "quickInfo": {
            "developer": "miHoYo",
            "publisher": "miHoYo",
            "genre": "Action RPG",
            "modes": "Single-player, Co-op",
            "platforms": "Android, iOS, PC, PS4/5",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 18,
        "name": "Fortnite: Metaverse Edition",
        "description": "Battle royale phenomenon with building mechanics and creative mode expansions. Metaverse Edition introduces VR support, NFT cosmetics, and persistent social spaces. Includes Zero Build mode, UE5-powered graphics, and cross-platform play across all devices.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "Mobile/PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "100-player battle royale",
            "Building mechanics",
            "VR support",
            "Creative 2.0 tools",
            "Cross-platform progression"
        ],
        "requirements": {
            "min": [
                "OS: Android 8.0 or iOS 11",
                "CPU: Snapdragon 835 equivalent",
                "RAM: 4GB",
                "Storage: 8GB"
            ],
            "rec": [
                "OS: Android 11 or iOS 14",
                "CPU: Snapdragon 865 equivalent",
                "RAM: 6GB",
                "Storage: 12GB"
            ]
        },
        "quickInfo": {
            "developer": "Epic Games",
            "publisher": "Epic Games",
            "genre": "Battle Royale",
            "modes": "Multiplayer",
            "platforms": "Android, iOS, PC, Console",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 16,
        "name": "Call of Duty: Mobile – Future Warfare",
        "description": "Advanced FPS with customizable controls featuring futuristic warfare tech. Includes classic multiplayer modes, 100-player battle royale with hover bikes and drones, and signature Call of Duty gunplay with energy weapons. Regular seasons introduce new operators and maps.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Mobile",
        "releaseDate": "May 17, 2022",
        "features": [
            "Future tech combat",
            "150-player BR",
            "Classic MP modes",
            "Customizable HUD",
            "Controller support"
        ],
        "requirements": {
            "min": [
                "OS: Android 7.0",
                "CPU: Snapdragon 625",
                "RAM: 3GB",
                "Storage: 5GB"
            ],
            "rec": [
                "OS: Android 10",
                "CPU: Snapdragon 855",
                "RAM: 6GB",
                "Storage: 8GB"
            ]
        },
        "quickInfo": {
            "developer": "TiMi Studio",
            "publisher": "Activision",
            "genre": "FPS",
            "modes": "Multiplayer",
            "platforms": "Android, iOS",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 19,
        "name": "Roblox",
        "description": "Immersive platform hosting millions of user-generated 3D worlds across all genres. Provides creation tools for building games, virtual items, and experiences. Cross-platform play connects mobile, PC, and console users in constantly evolving social spaces.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.3,
        "category": "PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "User-generated content",
            "Game creation tools",
            "Virtual economy",
            "Cross-platform",
            "Social experiences"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: Core i3-2120",
                "RAM: 4GB",
                "Storage: 1GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: Core i5-3470",
                "RAM: 8GB",
                "Storage: 2GB"
            ]
        },
        "quickInfo": {
            "developer": "Roblox Corp",
            "publisher": "Roblox Corp",
            "genre": "Game Creation",
            "modes": "Multiplayer",
            "platforms": "PC, Mobile, Xbox",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 20,
        "name": "Minecraft",
        "description": "Limitless sandbox adventure with procedurally generated worlds. Build, explore, and survive across multiple modes including Creative, Survival, and Adventure. Cross-play enables collaboration across all platforms with regular content updates and mod support.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.9,
        "category": "PC/Mobile/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Infinite worlds",
            "Multiplayer servers",
            "Redstone engineering",
            "Cross-platform",
            "Mod support"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: Core i3-3210",
                "RAM: 4GB",
                "Storage: 1GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: Core i5-4690",
                "RAM: 8GB",
                "Storage: 4GB"
            ]
        },
        "quickInfo": {
            "developer": "Mojang",
            "publisher": "Xbox Game Studios",
            "genre": "Sandbox",
            "modes": "Single/Multiplayer",
            "platforms": "All Platforms",
            "price": "$26.95"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 23,
        "name": "Counter-Strike 2 & GO",
        "description": "Definitive tactical shooter featuring precise gunplay and 5v5 competitive matches. CS2 introduces smoke physics, sub-tick updates, and Source 2 engine upgrades while preserving CS:GO's core mechanics. Includes Danger Zone battle royale and community server support.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.8,
        "category": "PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "5v5 competitive",
            "Source 2 engine",
            "128-tick servers",
            "Weapon economy",
            "Community maps"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: Core i5-750",
                "RAM: 8GB",
                "GPU: GTX 970",
                "Storage: 85GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: Core i7-9700K",
                "RAM: 16GB",
                "GPU: RTX 2070",
                "Storage: 85GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Valve",
            "publisher": "Valve",
            "genre": "Tactical FPS",
            "modes": "Multiplayer",
            "platforms": "PC",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 24,
        "name": "Call of Duty: Modern Warfare II/III/Warzone 2.0",
        "description": "Cinematic FPS with campaign, multiplayer, and battle royale modes. Features realistic gun mechanics, tactical movement, and cross-progression across MWII/MWIII/Warzone. DMZ extraction mode offers PvEvP gameplay. Regular seasons introduce new operators, weapons, and maps.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "150-player BR",
            "DMZ extraction",
            "Weapon tuning",
            "Cross-progression",
            "Tactical movement"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: Core i5-2500K",
                "RAM: 8GB",
                "GPU: GTX 960",
                "Storage: 125GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: Core i7-8700K",
                "RAM: 16GB",
                "GPU: RTX 3060",
                "Storage: 125GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Infinity Ward",
            "publisher": "Activision",
            "genre": "FPS",
            "modes": "Multiplayer",
            "platforms": "PC, PS4/5, Xbox",
            "price": "$69.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 25,
        "name": "League of Legends",
        "description": "Definitive MOBA with over 160 champions across five roles. Strategic 5v5 matches on Summoner's Rift with deep meta and ranked ladder. Regular patches balance gameplay while introducing new champions. Esports ecosystem includes Worlds Championship with million-dollar prizes.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "160+ champions",
            "Ranked seasons",
            "Esports integration",
            "Regular balance",
            "Skin customization"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: Core i3-530",
                "RAM: 4GB",
                "GPU: Intel HD 3000",
                "Storage: 16GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: Core i5-3300",
                "RAM: 8GB",
                "GPU: GTX 560",
                "Storage: 16GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Riot Games",
            "publisher": "Riot Games",
            "genre": "MOBA",
            "modes": "Multiplayer",
            "platforms": "PC",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 26,
        "name": "Valorant",
        "description": "Tactical 5v5 character-based shooter with precise gunplay. Features agents with unique abilities like teleportation or healing. Ranked mode offers competitive play with anti-cheat protection. Regular episodes introduce new agents, maps, and weapon skins.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "5v5 tactical",
            "Agent abilities",
            "128-tick servers",
            "Vanguard anti-cheat",
            "Weapon skins"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: Core i3-4150",
                "RAM: 4GB",
                "GPU: Intel HD 3000",
                "Storage: 10GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: Core i5-9400F",
                "RAM: 8GB",
                "GPU: GTX 1050 Ti",
                "Storage: 10GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Riot Games",
            "publisher": "Riot Games",
            "genre": "Tactical FPS",
            "modes": "Multiplayer",
            "platforms": "PC",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 27,
        "name": "Grand Theft Auto V",
        "description": "Open-world crime epic featuring three protagonists in Los Santos. Includes story campaign, GTA Online multiplayer with heists, businesses, and constant updates. Enhanced Edition adds ray tracing, 4K resolution, and faster loading for new-gen consoles.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open-world",
            "Three protagonists",
            "GTA Online",
            "Heists",
            "Enhanced visuals"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: Core i5-3470",
                "RAM: 8GB",
                "GPU: GTX 970",
                "Storage: 110GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: Core i7-9700K",
                "RAM: 16GB",
                "GPU: RTX 2070",
                "Storage: 110GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Rockstar North",
            "publisher": "Rockstar Games",
            "genre": "Action-Adventure",
            "modes": "Single/Multiplayer",
            "platforms": "PC, PS4/5, Xbox",
            "price": "$29.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 28,
        "name": "Rocket League",
        "description": "High-octane hybrid of soccer and vehicular mayhem. Play 1v1 to 4v4 matches with rocket-powered cars performing aerial maneuvers. Cross-platform progression, competitive ranks, and regular themed seasons with cosmetic items. Free-to-play with optional DLC packs.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.6,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Soccer with cars",
            "Aerial physics",
            "Cross-platform",
            "Competitive ranks",
            "Customization"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: Dual-core 2.5GHz",
                "RAM: 4GB",
                "GPU: GTX 660",
                "Storage: 20GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: Quad-core 3.0GHz",
                "RAM: 8GB",
                "GPU: GTX 1060",
                "Storage: 20GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Psyonix",
            "publisher": "Epic Games",
            "genre": "Sports",
            "modes": "Multiplayer",
            "platforms": "PC, PS4/5, Xbox, Switch",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 29,
        "name": "Overwatch 1 & 2",
        "description": "Team-based hero shooter with diverse characters across three roles. 5v5 objective-based matches requiring teamwork and ability combos. Seasonal updates introduce new heroes, maps, and PvE story missions. Competitive play with ranking system and esports league.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Hero-based combat",
            "5v5 matches",
            "Role system",
            "PvE missions",
            "Esports league"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: Core i3-6100",
                "RAM: 6GB",
                "GPU: GTX 960",
                "Storage: 50GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: Core i7-8700",
                "RAM: 8GB",
                "GPU: RTX 2060",
                "Storage: 50GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Blizzard",
            "publisher": "Blizzard",
            "genre": "Hero Shooter",
            "modes": "Multiplayer",
            "platforms": "PC, PS4/5, Xbox, Switch",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 30,
        "name": "Diablo IV",
        "description": "Dark fantasy ARPG with open-world elements and deep loot systems. Features five classes with skill trees, PvP zones, and shared world events. Nightmare Dungeons offer endgame challenges. Seasonal model introduces new mechanics and rewards every quarter.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open-world",
            "Five classes",
            "Shared world",
            "Nightmare Dungeons",
            "Seasonal content"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: Core i5-2500K",
                "RAM: 8GB",
                "GPU: GTX 960",
                "Storage: 90GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: Core i7-8700K",
                "RAM: 16GB",
                "GPU: RTX 3060",
                "Storage: 90GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Blizzard",
            "publisher": "Blizzard",
            "genre": "ARPG",
            "modes": "Single/Multiplayer",
            "platforms": "PC, PS4/5, Xbox",
            "price": "$69.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 31,
        "name": "World of Warcraft",
        "description": "The definitive MMORPG set in the Warcraft universe with nine expansions. Explore Azeroth with 13 playable races and 12 classes. Features dungeons, raids, PvP battlegrounds, and a rich lore spanning decades. Dragonflight expansion adds dragonriding and new zones.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.8,
        "category": "PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Massive open world",
            "12 character classes",
            "Dungeons & raids",
            "Player vs player",
            "Regular expansions"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7 64-bit",
                "CPU: Intel Core i5-3450",
                "RAM: 4GB",
                "GPU: Intel UHD 630",
                "Storage: 100GB"
            ],
            "rec": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i7-6700K",
                "RAM: 8GB",
                "GPU: NVIDIA GTX 1080",
                "Storage: 100GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Blizzard Entertainment",
            "publisher": "Blizzard Entertainment",
            "genre": "MMORPG",
            "modes": "Multiplayer",
            "platforms": "PC, macOS",
            "price": "Subscription"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 32,
        "name": "Apex Legends",
        "description": "Hero-based battle royale with 60-player matches and unique character abilities. Features fluid movement, ping communication system, and evolving map changes. Cross-progression across platforms with seasonal updates introducing new Legends and weapons.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "60-player BR",
            "Character abilities",
            "Titanfall universe",
            "Cross-progression",
            "Evolving maps"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7 64-bit",
                "CPU: Intel Core i3-6300",
                "RAM: 6GB",
                "GPU: NVIDIA GT 640",
                "Storage: 75GB"
            ],
            "rec": [
                "OS: Windows 10 64-bit",
                "CPU: Intel i5-3570K",
                "RAM: 8GB",
                "GPU: NVIDIA GTX 970",
                "Storage: 75GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Respawn Entertainment",
            "publisher": "Electronic Arts",
            "genre": "Battle Royale",
            "modes": "Multiplayer",
            "platforms": "PC, PS4/5, Xbox, Switch",
            "price": "Free-to-play"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 33,
        "name": "Tom Clancy's Rainbow Six: Siege",
        "description": "Tactical 5v5 shooter focused on environmental destruction and operator abilities. Features 60+ operators with unique gadgets, destructible walls, and competitive ranked play. Regular updates introduce new operators, maps, and gameplay balancing. ESL-supported esports scene with seasonal tournaments.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Destructible environments",
            "60+ unique operators",
            "5v5 tactical gameplay",
            "Ranked competitive mode",
            "Regular content updates"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7/8/10 64-bit",
                "CPU: Intel Core i3-560",
                "RAM: 6GB",
                "GPU: NVIDIA GTX 460",
                "Storage: 61GB"
            ],
            "rec": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i5-2500K",
                "RAM: 8GB",
                "GPU: NVIDIA GTX 970",
                "Storage: 61GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Ubisoft Montreal",
            "publisher": "Ubisoft",
            "genre": "Tactical Shooter",
            "modes": "Multiplayer",
            "platforms": "PC, PS4/5, Xbox One/Series X|S",
            "price": "$19.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 34,
        "name": "EA Sports FC 24",
        "description": "Football simulation featuring HyperMotionV technology for realistic player movements. Includes 19,000+ players across 700+ teams with authentic stadiums. Career mode lets you manage clubs or player careers. Volta Football returns with street soccer and customization options.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.4,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "HyperMotionV technology",
            "700+ licensed teams",
            "Career modes",
            "Volta street football",
            "Cross-platform play"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i5-6600K",
                "RAM: 8GB",
                "GPU: NVIDIA GTX 1050 Ti",
                "Storage: 100GB"
            ],
            "rec": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i7-6700",
                "RAM: 12GB",
                "GPU: NVIDIA GTX 1660",
                "Storage: 100GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "EA Vancouver",
            "publisher": "Electronic Arts",
            "genre": "Sports",
            "modes": "Single-player, Multiplayer",
            "platforms": "PC, PS4/5, Xbox One/Series X|S",
            "price": "$69.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 35,
        "name": "Cyberpunk 2077",
        "description": "Open-world RPG set in Night City with deep character customization and branching narratives. Phantom Liberty expansion adds spy thriller storyline and vehicle combat. Features multiple lifepaths, hacking mechanics, and real-time weapon customization. Overhauled with Update 2.0 for improved gameplay.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.3,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open-world Night City",
            "Three lifepaths",
            "Real-time hacking",
            "Vehicle combat",
            "Phantom Liberty expansion"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i7-6700",
                "RAM: 12GB",
                "GPU: NVIDIA GTX 1060",
                "Storage: 70GB"
            ],
            "rec": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i7-12700",
                "RAM: 16GB",
                "GPU: NVIDIA RTX 3060",
                "Storage: 70GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "CD Projekt Red",
            "publisher": "CD Projekt",
            "genre": "Action RPG",
            "modes": "Single-player",
            "platforms": "PC, PS5, Xbox Series X|S",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 36,
        "name": "Black Myth: Wukong",
        "description": "Action RPG based on Journey to the West with soulslike combat. Play as the Destined One using transformation abilities, magical staves, and spellcasting. Features breathtaking environments inspired by Chinese mythology and challenging boss battles. Real-time weather affects combat strategies.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.7,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Chinese mythology setting",
            "Transformation combat",
            "Soulslike difficulty",
            "Dynamic weather system",
            "Epic boss battles"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i5-8400",
                "RAM: 16GB",
                "GPU: NVIDIA GTX 1060",
                "Storage: 80GB"
            ],
            "rec": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i7-10700K",
                "RAM: 32GB",
                "GPU: NVIDIA RTX 3070",
                "Storage: 80GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Game Science",
            "publisher": "Game Science",
            "genre": "Action RPG",
            "modes": "Single-player",
            "platforms": "PC, PS5, Xbox Series X|S",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 37,
        "name": "Escape From Tarkov",
        "description": "Hardcore tactical FPS with RPG elements and survival mechanics. Loot-based extraction shooter featuring realistic ballistics and medical systems. Play as PMC or Scav in raids where death means losing all equipped gear. Persistent economy and hideout progression across wipes.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Loot extraction gameplay",
            "Realistic ballistics",
            "Medical system",
            "Hideout progression",
            "Persistent economy"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7/8/10 64-bit",
                "CPU: Intel Core i3-530",
                "RAM: 8GB",
                "GPU: NVIDIA GTX 950",
                "Storage: 25GB"
            ],
            "rec": [
                "OS: Windows 10 64-bit",
                "CPU: Intel Core i7-9700K",
                "RAM: 16GB",
                "GPU: NVIDIA GTX 1080",
                "Storage: 25GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Battlestate Games",
            "publisher": "Battlestate Games",
            "genre": "Tactical FPS",
            "modes": "Multiplayer",
            "platforms": "PC",
            "price": "$44.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 38,
        "name": "Super Mario Bros. 3 (1988)",
        "description": "NES platforming masterpiece introducing the world map, suits like Frog and Tanooki, and airships. Features eight themed worlds with innovative power-ups and secret exits. Speedrun favorite with precise platforming mechanics that defined 2D Mario games.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "8 themed worlds",
            "Transformation suits",
            "World map navigation",
            "Two-player alternating",
            "Secret warp zones"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Nintendo Switch Online"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "genre": "Platformer",
            "modes": "Single-player, 2-player alternating",
            "platforms": "NES, Switch Online",
            "price": "$4.99 (Switch Online)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 39,
        "name": "The Legend of Zelda (1986)",
        "description": "Groundbreaking NES action-adventure introducing Hyrule, dungeons, and the Triforce. Non-linear exploration with hidden caves and bombable walls. Gold cartridge version includes battery save, revolutionizing console game progression.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.8,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open exploration",
            "9 dungeons",
            "Hidden secrets",
            "Action puzzles",
            "Battery save (Gold cart)"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Nintendo Switch Online"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "NES, Switch Online",
            "price": "$4.99 (Switch Online)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 40,
        "name": "Super Mario Bros. (1985)",
        "description": "NES classic that revived the video game industry, introducing Mario, Luigi, and the Mushroom Kingdom. Precise platforming across eight worlds with warp zones and hidden 1-Up mushrooms. Two-player alternating co-op with distinct physics for Mario and Luigi.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.8,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "8 worlds",
            "Warp pipes",
            "Two-player alternating",
            "Precise platforming",
            "Iconic power-ups"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Nintendo Switch Online"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "genre": "Platformer",
            "modes": "Single-player, 2-player alternating",
            "platforms": "NES, Switch Online",
            "price": "$4.99 (Switch Online)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 41,
        "name": "Mega Man 2 (1989)",
        "description": "Definitive NES action-platformer featuring eight Robot Masters with weapon weaknesses. Introduced energy tanks, password saves, and iconic soundtrack. Precise jumping and shooting across themed stages like Metal Man's sawblades and Bubble Man's aquatic level.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.8,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "8 Robot Masters",
            "Weapon stealing",
            "Energy tanks",
            "Password saves",
            "Precise platforming"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Legacy Collections"
            ]
        },
        "quickInfo": {
            "developer": "Capcom",
            "publisher": "Capcom",
            "genre": "Action-Platformer",
            "modes": "Single-player",
            "platforms": "NES, Legacy Collections",
            "price": "$7.99 (Collections)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 42,
        "name": "Contra (1989)",
        "description": "Run-and-gun NES classic famous for its difficulty and co-op gameplay. Features the Konami Code for 30 lives, jungle/base levels, and screen-filling bosses. Two-player simultaneous action with spread guns, lasers, and homing missiles.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Two-player co-op",
            "Konami Code",
            "Weapon upgrades",
            "Screen-filling bosses",
            "Fast-paced action"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Contra Collections"
            ]
        },
        "quickInfo": {
            "developer": "Konami",
            "publisher": "Konami",
            "genre": "Run-and-Gun",
            "modes": "Single-player, Co-op",
            "platforms": "NES, Collections",
            "price": "$9.99 (Collections)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 43,
        "name": "Punch-Out!! (1987)",
        "description": "NES boxing game featuring Little Mac and colorful opponents. Timing-based gameplay with tells for dodging and countering. Includes Mike Tyson version (later Mr. Dream) with brutal final fight. Weight management system between fights affects performance.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Timing-based boxing",
            "Opponent tells",
            "Mike Tyson version",
            "Weight management",
            "NES Advantage compatible"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Nintendo Switch Online"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "genre": "Sports",
            "modes": "Single-player",
            "platforms": "NES, Switch Online",
            "price": "$4.99 (Switch Online)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 44,
        "name": "Castlevania (1986)",
        "description": "Gothic NES action-platformer introducing the Belmont clan and Dracula. Features the Vampire Killer whip, sub-weapons like holy water, and iconic Medusa heads. Precise platforming across six stages culminating in Dracula's castle.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.6,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Vampire Killer whip",
            "Sub-weapons",
            "Six stages",
            "Medusa heads",
            "Dracula battle"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Anniversary Collections"
            ]
        },
        "quickInfo": {
            "developer": "Konami",
            "publisher": "Konami",
            "genre": "Action-Platformer",
            "modes": "Single-player",
            "platforms": "NES, Collections",
            "price": "$7.99 (Collections)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 45,
        "name": "Teenage Mutant Ninja Turtles II: The Arcade Game",
        "description": "NES port of the classic arcade beat 'em up featuring all four turtles in simultaneous four-player action. Battle through six stages against Shredder's Foot Clan with pizza health pickups. Faithful adaptation with additional console-exclusive levels and bosses.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Four-player co-op",
            "Arcade authentic",
            "Console-exclusive content",
            "Character special moves",
            "Pizza health system"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controllers: 1-4"
            ],
            "rec": [
                "Platform: Cowabunga Collection"
            ]
        },
        "quickInfo": {
            "developer": "Konami",
            "publisher": "Konami",
            "genre": "Beat 'em Up",
            "modes": "Single-player, Multiplayer",
            "platforms": "NES, Collections",
            "price": "$39.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 46,
        "name": "Metroid (1986)",
        "description": "Seminal NES action-adventure that pioneered nonlinear exploration. Play as bounty hunter Samus Aran exploring planet Zebes, collecting power-ups to access new areas. Introduced the iconic Morph Ball and Screw Attack abilities. Features password save system and multiple endings based on completion time.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Nonlinear exploration",
            "Power-up progression",
            "Password save system",
            "Multiple endings",
            "Female protagonist reveal"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Nintendo Switch Online"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo R&D1",
            "publisher": "Nintendo",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "NES, Switch Online",
            "price": "$4.99 (Switch Online)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 47,
        "name": "Duck Hunt (1988)",
        "description": "NES light gun shooter featuring the iconic laughing dog. Use the NES Zapper to shoot ducks across multiple difficulty levels. Includes clay pigeon shooting mode. Requires CRT televisions for light gun functionality.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.3,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Light gun gameplay",
            "Two game modes",
            "Progressive difficulty",
            "Two-player alternating",
            "Iconic laughing dog"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "NES Zapper",
                "CRT Television"
            ],
            "rec": [
                "Platform: Switch Online (Touch Controls)"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo R&D1",
            "publisher": "Nintendo",
            "genre": "Light Gun Shooter",
            "modes": "Single-player, 2-player alternating",
            "platforms": "NES, Switch Online",
            "price": "$4.99 (Switch Online)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 48,
        "name": "Castlevania III: Dracula's Curse (1989)",
        "description": "NES action-platformer featuring branching paths and multiple playable characters. Play as Trevor Belmont with allies Grant (thief), Sypha (mage), and Alucard (vampire). Alternate routes and endings based on character choices. Considered one of the most challenging NES games.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Multiple characters",
            "Branching paths",
            "Alternate endings",
            "Classic whip combat",
            "Haunting soundtrack"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Castlevania Anniversary Collection"
            ]
        },
        "quickInfo": {
            "developer": "Konami",
            "publisher": "Konami",
            "genre": "Action-Platformer",
            "modes": "Single-player",
            "platforms": "NES, Collections",
            "price": "$19.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 49,
        "name": "DuckTales (1989)",
        "description": "NES platformer based on the Disney cartoon featuring Scrooge McDuck's pogo cane jump. Travel to five global locations to collect treasures. Memorable Moon theme and precise platforming. Remastered in 2013 with HD graphics and voice acting.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Pogo cane mechanics",
            "Nonlinear level order",
            "Five global locations",
            "Treasure collecting",
            "Iconic Moon theme"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: DuckTales Remastered"
            ]
        },
        "quickInfo": {
            "developer": "Capcom",
            "publisher": "Capcom",
            "genre": "Platformer",
            "modes": "Single-player",
            "platforms": "NES, Remastered Versions",
            "price": "$14.99 (Remastered)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 50,
        "name": "Mega Man 3 (1994)",
        "description": "NES sequel introducing the slide move and Proto Man. Features eight Robot Masters with weapons that affect later bosses. Includes Doc Robot stages remixing previous games' bosses. Considered one of the strongest entries in the classic series.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "New slide mechanic",
            "Proto Man character",
            "Doc Robot stages",
            "Weapon energy system",
            "Password save"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Mega Man Legacy Collection"
            ]
        },
        "quickInfo": {
            "developer": "Capcom",
            "publisher": "Capcom",
            "genre": "Action-Platformer",
            "modes": "Single-player",
            "platforms": "NES, Collections",
            "price": "$14.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 51,
        "name": "Double Dragon (1988)",
        "description": "NES port of the arcade beat 'em up featuring Billy and Jimmy Lee. Two-player co-op through urban environments to rescue Marian. Simplified from arcade but adds new moves and stages. Spawned numerous sequels and the fighting game spinoff.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.4,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Two-player co-op",
            "Urban environments",
            "Martial arts combat",
            "Weapon pickups",
            "Stage progression"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controllers: 1-2"
            ],
            "rec": [
                "Platform: Double Dragon Collections"
            ]
        },
        "quickInfo": {
            "developer": "Technōs Japan",
            "publisher": "Tradewest",
            "genre": "Beat 'em Up",
            "modes": "Single-player, Co-op",
            "platforms": "NES, Collections",
            "price": "$19.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 52,
        "name": "Batman (1989)",
        "description": "NES action-platformer based on Tim Burton's Batman movie. Features wall-jumping mechanics and gadgets like batarangs. Fight Joker's henchmen across Gotham leading to cathedral finale. Distinctive Sunsoft soundtrack and challenging platforming.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.5,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Wall-jump mechanics",
            "Batman gadgets",
            "Movie-inspired visuals",
            "Sunsoft soundtrack",
            "Boss fights"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Sunsoft Collections"
            ]
        },
        "quickInfo": {
            "developer": "Sunsoft",
            "publisher": "Sunsoft",
            "genre": "Action-Platformer",
            "modes": "Single-player",
            "platforms": "NES, Collections",
            "price": "$19.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 53,
        "name": "Double Dragon II: The Revenge (1989)",
        "description": "NES sequel improving upon the original with enhanced graphics and combat. Features two-player simultaneous play (unlike original NES port). New moves including cyclone kick and hair grab. Story follows the brothers avenging Marian's death.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Two-player simultaneous",
            "New combat moves",
            "Enhanced graphics",
            "Vengeance storyline",
            "Varied environments"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controllers: 1-2"
            ],
            "rec": [
                "Platform: Double Dragon Collections"
            ]
        },
        "quickInfo": {
            "developer": "Technōs Japan",
            "publisher": "Tradewest",
            "genre": "Beat 'em Up",
            "modes": "Single-player, Co-op",
            "platforms": "NES, Collections",
            "price": "$19.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 54,
        "name": "Super C (1990)",
        "description": "NES sequel to Contra featuring similar run-and-gun action with new weapons and stages. Two-player co-op through alien-infested military bases. Known as Probotector in European regions with robot protagonists. Maintains high difficulty with limited continues.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.5,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Two-player co-op",
            "New weapon types",
            "Military base settings",
            "Alien enemies",
            "High difficulty"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controllers: 1-2"
            ],
            "rec": [
                "Platform: Contra Collections"
            ]
        },
        "quickInfo": {
            "developer": "Konami",
            "publisher": "Konami",
            "genre": "Run-and-Gun",
            "modes": "Single-player, Co-op",
            "platforms": "NES, Collections",
            "price": "$19.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 55,
        "name": "Chip 'n Dale Rescue Rangers (1990)",
        "description": "NES platformer based on the Disney cartoon featuring cooperative gameplay. Play as Chip or Dale with unique abilities - Chip moves faster, Dale can float with helicopter hat. Throw boxes and apples at enemies. Two-player simultaneous co-op through inventive levels.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.4,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Two-player co-op",
            "Character-specific abilities",
            "Projectile throwing",
            "Cartoon-accurate visuals",
            "Puzzle elements"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controllers: 1-2"
            ],
            "rec": [
                "Platform: Disney Afternoon Collection"
            ]
        },
        "quickInfo": {
            "developer": "Capcom",
            "publisher": "Capcom",
            "genre": "Platformer",
            "modes": "Single-player, Co-op",
            "platforms": "NES, Collections",
            "price": "$19.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 56,
        "name": "Mega Man (1995)",
        "description": "Original NES action-platformer introducing the Blue Bomber. Features six Robot Masters with weapons that affect other bosses. Precise jumping and shooting through themed stages. Known for high difficulty and innovative stage select system.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.4,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Stage select system",
            "Weapon stealing",
            "Six Robot Masters",
            "Precise platforming",
            "Password save"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Mega Man Legacy Collection"
            ]
        },
        "quickInfo": {
            "developer": "Capcom",
            "publisher": "Capcom",
            "genre": "Action-Platformer",
            "modes": "Single-player",
            "platforms": "NES, Collections",
            "price": "$14.99 (Collection)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 57,
        "name": "Excitebike (1985)",
        "description": "NES motocross racing game featuring track design mode. Race against CPU opponents while managing bike overheating. Create custom tracks with ramps and obstacles. One of the first NES games to offer a level editor.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.3,
        "category": "Retro",
        "releaseDate": "May 17, 2022",
        "features": [
            "Track design mode",
            "Overheat management",
            "Obstacle courses",
            "Two-player alternating",
            "Early level editor"
        ],
        "requirements": {
            "min": [
                "Platform: NES",
                "Controller Required"
            ],
            "rec": [
                "Platform: Nintendo Switch Online"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo R&D1",
            "publisher": "Nintendo",
            "genre": "Racing",
            "modes": "Single-player, 2-player alternating",
            "platforms": "NES, Switch Online",
            "price": "$4.99 (Switch Online)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 58,
        "name": "The Legend of Zelda: Ocarina of Time",
        "description": "N64 masterpiece remastered in 4K, introducing 3D Zelda gameplay with time travel mechanics. Play as Young and Adult Link across Hyrule to stop Ganondorf. Features dungeon puzzles, horseback combat, and the iconic ocarina musical instrument.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 5.0,
        "category": "Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Time travel mechanics",
            "3D dungeon puzzles",
            "Horseback combat",
            "Ocarina songs",
            "Master Sword quest"
        ],
        "requirements": {
            "min": [
                "Platform: Nintendo Switch",
                "Storage: 6GB"
            ],
            "rec": [
                "Platform: Nintendo Switch OLED"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo EAD",
            "publisher": "Nintendo",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "Nintendo Switch",
            "price": "$49.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 59,
        "name": "Grand Theft Auto V",
        "description": "Open-world crime epic featuring three protagonists in Los Santos. Includes enhanced graphics, first-person mode, and expanded GTA Online with heists, businesses, and hundreds of vehicles. Cross-generational gameplay with persistent character progression.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Three protagonist system",
            "First-person mode",
            "Expanded GTA Online",
            "Enhanced graphics",
            "Cross-progression"
        ],
        "requirements": {
            "min": [
                "Platform: PS4/Xbox One",
                "Storage: 110GB"
            ],
            "rec": [
                "Platform: PS5/Xbox Series X",
                "Storage: 110GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Rockstar North",
            "publisher": "Rockstar Games",
            "genre": "Action-Adventure",
            "modes": "Single-player, Multiplayer",
            "platforms": "PS4/5, Xbox, PC",
            "price": "$39.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 60,
        "name": "The Last of Us",
        "description": "Remastered post-apocalyptic narrative masterpiece featuring enhanced 4K visuals and improved gameplay. Follow Joel and Ellie across America with visceral combat and emotional storytelling. Includes Left Behind DLC and new photo mode features.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.9,
        "category": "Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Enhanced 4K visuals",
            "Left Behind DLC included",
            "Photo mode",
            "Haptic feedback support",
            "3D audio"
        ],
        "requirements": {
            "min": [
                "Platform: PS5",
                "Storage: 70GB"
            ],
            "rec": [
                "Storage: 70GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Naughty Dog",
            "publisher": "Sony Interactive Entertainment",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "PS5",
            "price": "$49.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 61,
        "name": "Red Dead Redemption 2",
        "description": "Epic Western adventure following Arthur Morgan in the dying Wild West. Features an open world with realistic ecosystems, moral choices, and deep companion interactions. Includes story campaign and Red Dead Online multiplayer with frontier professions.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Vast open world",
            "Realistic ecosystems",
            "Moral honor system",
            "Deep NPC interactions",
            "Online frontier roles"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: Intel i5-2500K",
                "RAM: 8GB",
                "GPU: GTX 770",
                "Storage: 150GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: i7-4770K",
                "RAM: 12GB",
                "GPU: RTX 2060",
                "Storage: 150GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Rockstar Studios",
            "publisher": "Rockstar Games",
            "genre": "Action-Adventure",
            "modes": "Single-player, Online",
            "platforms": "PS4, Xbox One, PC",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 62,
        "name": "Elden Ring",
        "description": "Open-world action RPG from FromSoftware featuring challenging combat and exploration. Created with George R.R. Martin, offering deep lore and non-linear progression. Includes mounted combat, spirit summons, and dynamic weather affecting gameplay.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Souls-like combat",
            "Open world exploration",
            "Mount (Torrent)",
            "Spirit summons",
            "Dynamic weather"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: Intel i5-8400",
                "RAM: 12GB",
                "GPU: GTX 1060",
                "Storage: 60GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: i7-8700K",
                "RAM: 16GB",
                "GPU: RTX 2070",
                "Storage: 60GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "FromSoftware",
            "publisher": "Bandai Namco",
            "genre": "Action RPG",
            "modes": "Single-player, Online",
            "platforms": "PS4/5, Xbox, PC",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 63,
        "name": "Astro Bot",
        "description": "VR platformer showcasing PlayStation VR capabilities with innovative controls. Features over 20 levels with creative uses of VR space, dual-wielding gadgets, and iconic PlayStation cameos. Family-friendly with precise motion controls.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.8,
        "category": "Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "VR platforming",
            "Dual-wielding gadgets",
            "PlayStation cameos",
            "Motion controls",
            "Family friendly"
        ],
        "requirements": {
            "min": [
                "Platform: PS4",
                "PSVR Required",
                "Move Controllers Recommended"
            ]
        },
        "quickInfo": {
            "developer": "Team Asobi",
            "publisher": "Sony",
            "genre": "VR Platformer",
            "modes": "Single-player",
            "platforms": "PS4/PSVR",
            "price": "$39.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 64,
        "name": "BioShock",
        "description": "First-person shooter with philosophical themes set in the underwater city of Rapture. Features plasmid superpowers, moral choices affecting the story, and iconic art deco environments. Remastered version includes enhanced visuals and director's commentary.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Underwater setting",
            "Plasmid powers",
            "Moral choices",
            "Art deco style",
            "Remastered visuals"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: Intel E6750",
                "RAM: 4GB",
                "GPU: GTX 560",
                "Storage: 25GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: i5-2300",
                "RAM: 8GB",
                "GPU: GTX 970",
                "Storage: 25GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Irrational Games",
            "publisher": "2K Games",
            "genre": "FPS",
            "modes": "Single-player",
            "platforms": "PC, PS4, Xbox One",
            "price": "$19.99 (Remastered)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 65,
        "name": "Bloodborne",
        "description": "Gothic action RPG with challenging combat and Lovecraftian horror elements. Features trick weapons that transform mid-combo, regain system for aggressive play, and interconnected world design. PS5 update adds 60fps performance mode.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Trick weapons",
            "Regain combat system",
            "Gothic horror",
            "Chalice dungeons",
            "60fps on PS5"
        ],
        "requirements": {
            "min": [
                "Platform: PS4",
                "Storage: 35GB"
            ],
            "rec": [
                "Platform: PS5",
                "Storage: 35GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "FromSoftware",
            "publisher": "Sony",
            "genre": "Action RPG",
            "modes": "Single-player",
            "platforms": "PS4/PS5",
            "price": "$19.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 66,
        "name": "Forza Horizon 5",
        "description": "Open-world racing game set in Mexico with dynamic seasons. Features over 500 cars, event creation tools, and the largest Horizon map yet. Includes both simulation handling and accessibility options for casual players.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.8,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Mexican open world",
            "500+ vehicles",
            "Dynamic seasons",
            "EventLab creator",
            "Cross-platform play"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: i3-4170",
                "RAM: 8GB",
                "GPU: GTX 970",
                "Storage: 110GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: i7-10700K",
                "RAM: 16GB",
                "GPU: RTX 3080",
                "Storage: 110GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Playground Games",
            "publisher": "Xbox Game Studios",
            "genre": "Racing",
            "modes": "Single-player, Multiplayer",
            "platforms": "PC, Xbox, Cloud",
            "price": "$59.99 (Game Pass)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 67,
        "name": "Ghost of Tsushima",
        "description": "Samurai adventure set during the Mongol invasion of Japan. Features stance-based combat, photo mode with traditional Japanese art styles, and open-world exploration across Tsushima Island. Director's Cut adds Iki Island expansion.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.8,
        "category": "Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Samurai combat",
            "Stance system",
            "Iki Island expansion",
            "Kurosawa mode",
            "Photo mode"
        ],
        "requirements": {
            "min": [
                "Platform: PS4",
                "Storage: 50GB"
            ],
            "rec": [
                "Platform: PS5",
                "Storage: 50GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Sucker Punch",
            "publisher": "Sony",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "PS4/PS5",
            "price": "$69.99 (Director's Cut)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 68,
        "name": "The Witcher 3: Wild Hunt",
        "description": "Open-world RPG following Geralt's search for Ciri across war-torn kingdoms. Features meaningful choices with lasting consequences, monster contracts, and the acclaimed Hearts of Stone/Blood & Wine expansions. Next-gen update adds ray tracing and quality-of-life improvements.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.9,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open world",
            "Meaningful choices",
            "Monster hunting",
            "Gwent card game",
            "Next-gen update"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: i5-2500K",
                "RAM: 6GB",
                "GPU: GTX 660",
                "Storage: 50GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: i7-4770K",
                "RAM: 8GB",
                "GPU: RTX 2060",
                "Storage: 50GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "CD Projekt Red",
            "publisher": "CD Projekt",
            "genre": "Action RPG",
            "modes": "Single-player",
            "platforms": "PC, PS4/5, Xbox, Switch",
            "price": "$39.99 (Complete Edition)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 69,
        "name": "Cyberpunk 2077",
        "description": "Open-world RPG set in Night City with deep character customization. Features lifepath choices, hacking mechanics, and multiple endings. Post-launch updates have added metro system, vehicle combat, and Phantom Liberty expansion with Idris Elba.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.3,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Night City setting",
            "Lifepath choices",
            "Hacking (Quickhacks)",
            "Phantom Liberty DLC",
            "Vehicle combat"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: i7-6700",
                "RAM: 12GB",
                "GPU: GTX 1060",
                "Storage: 70GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: i7-12700",
                "RAM: 16GB",
                "GPU: RTX 3070",
                "Storage: 70GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "CD Projekt Red",
            "publisher": "CD Projekt",
            "genre": "Action RPG",
            "modes": "Single-player",
            "platforms": "PC, PS5, Xbox Series",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 70,
        "name": "Baldur's Gate 3",
        "description": "CRPG based on Dungeons & Dragons 5th edition ruleset. Features turn-based combat, deep character creation with races/classes, and branching narratives with companion relationships. Includes multiplayer co-op and DM mode for custom campaigns.",
        "image": "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.9,
        "category": "PC/Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "D&D 5e rules",
            "Turn-based combat",
            "Origin characters",
            "Multiplayer co-op",
            "DM mode"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: i5-4690",
                "RAM: 8GB",
                "GPU: GTX 970",
                "Storage: 150GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: i7-8700K",
                "RAM: 16GB",
                "GPU: RTX 3060",
                "Storage: 150GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Larian Studios",
            "publisher": "Larian Studios",
            "genre": "CRPG",
            "modes": "Single-player, Co-op",
            "platforms": "PC, PS5, Xbox Series",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 71,
        "name": "Control",
        "description": "Supernatural third-person shooter with mind-bending environments and telekinetic combat. Set in the Oldest House, a shifting brutalist skyscraper. Features ray tracing, photo mode, and the acclaimed Alan Wake crossover expansion.",
        "image": "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.7,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Telekinetic powers",
            "Shape-shifting environments",
            "Alan Wake crossover",
            "Ray tracing",
            "Photo mode"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: i5-4690",
                "RAM: 8GB",
                "GPU: GTX 780",
                "Storage: 42GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: i5-7600K",
                "RAM: 16GB",
                "GPU: RTX 2060",
                "Storage: 42GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Remedy",
            "publisher": "505 Games",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "PC, PS4/5, Xbox",
            "price": "$39.99 (Ultimate Edition)"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 72,
        "name": "Batman: Arkham Knight",
        "description": "Final chapter in the Arkham trilogy featuring Batmobile tank combat and Gotham City open world. Includes Fear Multi-Takedowns, dual play with allies, and the full Knightfall Protocol ending. PC version now fixed with all DLC included.",
        "image": "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.7,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Batmobile combat",
            "Gotham open world",
            "Fear Takedowns",
            "Dual play characters",
            "All DLC included"
        ],
        "requirements": {
            "min": [
                "OS: Windows 7",
                "CPU: i5-750",
                "RAM: 6GB",
                "GPU: GTX 660",
                "Storage: 45GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: i7-3770",
                "RAM: 8GB",
                "GPU: GTX 970",
                "Storage: 45GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Rocksteady",
            "publisher": "WB Games",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "PC, PS4, Xbox One",
            "price": "$19.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 73,
        "name": "Hitman 3",
        "description": "Stealth assassination game concluding the World of Darkness trilogy. Features elaborate sandbox levels across Dubai, Dartmoor, and Berlin. Includes VR support (PSVR/PC) and roguelike Freelancer mode added post-launch.",
        "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Sandbox assassinations",
            "Disguise system",
            "Freelancer mode",
            "VR support",
            "Elusive targets"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: i5-2500K",
                "RAM: 8GB",
                "GPU: GTX 1050",
                "Storage: 60GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: i7-4790",
                "RAM: 16GB",
                "GPU: RTX 2060",
                "Storage: 60GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "IO Interactive",
            "publisher": "IO Interactive",
            "genre": "Stealth",
            "modes": "Single-player",
            "platforms": "PC, PS4/5, Xbox, Switch",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 74,
        "name": "The Legend of Zelda: Breath of the Wild",
        "description": "Open-air reimagining of Zelda with physics-based systems and emergent gameplay. Features climbing, gliding, and chemistry systems interacting with weather. Includes all DLC with Master Cycle Zero and Trial of the Sword challenges.",
        "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 5.0,
        "category": "Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Open-air Hyrule",
            "Physics systems",
            "Weapon durability",
            "All DLC included",
            "Shrines & Divine Beasts"
        ],
        "requirements": {
            "min": [
                "Platform: Switch",
                "Storage: 14GB"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo EPD",
            "publisher": "Nintendo",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "Switch",
            "price": "$59.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    },
    {
        "id": 75,
        "name": "The Legend of Zelda: Tears of the Kingdom",
        "description": "Sequel to Breath of the Wild with expanded vertical exploration and building mechanics. Features Ultrahand for vehicle creation, Recall for time reversal, and sky islands above Hyrule. Includes deeper dungeons and weapon fusion system.",
        "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 5.0,
        "category": "Console",
        "releaseDate": "May 17, 2022",
        "features": [
            "Sky islands & depths",
            "Ultrahand building",
            "Recall ability",
            "Weapon fusion",
            "Improved dungeons"
        ],
        "requirements": {
            "min": [
                "Platform: Switch",
                "Storage: 16GB"
            ]
        },
        "quickInfo": {
            "developer": "Nintendo EPD",
            "publisher": "Nintendo",
            "genre": "Action-Adventure",
            "modes": "Single-player",
            "platforms": "Switch",
            "price": "$69.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 76,
        "name": "Helldivers 2",
        "description": "Cooperative top-down shooter with friendly fire and chaotic gameplay. Features stratagem call-ins, planetary campaigns, and procedural missions. Sequel adds third-person perspective while retaining the original's challenging team dynamics.",
        "image": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        "rating": 4.5,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "4-player co-op",
            "Friendly fire",
            "Stratagem system",
            "Third-person view",
            "Galactic campaign"
        ],
        "requirements": {
            "min": [
                "OS: Windows 10",
                "CPU: i7-4790K",
                "RAM: 8GB",
                "GPU: GTX 1050 Ti",
                "Storage: 50GB"
            ],
            "rec": [
                "OS: Windows 11",
                "CPU: i7-9700K",
                "RAM: 16GB",
                "GPU: RTX 2060",
                "Storage: 50GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Arrowhead",
            "publisher": "Sony",
            "genre": "Shooter",
            "modes": "Co-op",
            "platforms": "PC, PS5",
            "price": "$39.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        "id": 77,
        "name": "Neva",
        "description": "Emotional action-adventure from the creators of Gris, following a woman and her wolf companion. Features painterly visuals, environmental storytelling, and platforming with light combat. Explores themes of loss and connection through minimalist narrative.",
        "image": "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 4.6,
        "category": "Console/PC",
        "releaseDate": "May 17, 2022",
        "features": [
            "Hand-painted visuals",
            "Wolf companion",
            "Environmental storytelling",
            "Emotional narrative",
            "Light combat"
        ],
        "requirements": {
            "min": [
                "OS: Windows 8",
                "CPU: i3-2100",
                "RAM: 4GB",
                "GPU: GTX 650",
                "Storage: 6GB"
            ],
            "rec": [
                "OS: Windows 10",
                "CPU: i5-2400",
                "RAM: 8GB",
                "GPU: GTX 960",
                "Storage: 6GB SSD"
            ]
        },
        "quickInfo": {
            "developer": "Nomada Studio",
            "publisher": "Devolver Digital",
            "genre": "Adventure",
            "modes": "Single-player",
            "platforms": "PC, PS5, Xbox Series",
            "price": "$24.99"
        },
        "screenshots": [
            "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        ]
    }
    // ... include all  games with complete details
];

// Load game data based on URL parameter
function loadGameData() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'));
    
    const game = allGames.find(g => g.id === gameId);
    
    if (!game) {
        document.body.innerHTML = `
            <header>
                <div class="container">
                    <a href="index.html" class="logo">
                        <i class="fas fa-gamepad"></i> Game Adda
                    </a>
                </div>
            </header>
            <div class="container" style="padding: 100px 20px; text-align: center;">
                <h1>Game not found</h1>
                <p>The requested game could not be found.</p>
                <a href="index.html" class="btn">Return to Home</a>
            </div>
        `;
        return;
    }
    
    // Populate basic game info
    document.title = `${game.name} | Game Adda`;
    document.getElementById('game-title').textContent = game.name;
    document.getElementById('game-category').textContent = game.category;
    document.getElementById('game-category').className = `game-category ${game.category.toLowerCase()}`;
    document.getElementById('game-description').textContent = game.description;
    document.getElementById('game-cover').src = game.image;
    document.getElementById('game-cover').alt = game.name;
    document.getElementById('game-release').innerHTML = `<i class="far fa-calendar-alt"></i> Released: ${game.releaseDate}`;
    
    // Generate star rating
    const fullStars = Math.floor(game.rating);
    const hasHalfStar = game.rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(game.rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    document.getElementById('game-rating').innerHTML = `${starsHTML} <span>${game.rating}</span>`;
    
    // Populate features
    const featuresList = document.getElementById('game-features');
    featuresList.innerHTML = game.features.map(feature => 
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');
    
    // Populate requirements
    const requirementsList = document.getElementById('requirements');
    requirementsList.innerHTML = `
        <h4>Minimum:</h4>
        <ul>
            ${game.requirements.min.map(req => `<li>${req}</li>`).join('')}
        </ul>
        <h4>Recommended:</h4>
        <ul>
            ${game.requirements.rec.map(req => `<li>${req}</li>`).join('')}
        </ul>
    `;
    
    // Populate quick info
    const quickInfo = document.getElementById('quick-info');
    quickInfo.innerHTML = `
        <p><strong>Developer:</strong> ${game.quickInfo.developer}</p>
        <p><strong>Publisher:</strong> ${game.quickInfo.publisher}</p>
        <p><strong>Genre:</strong> ${game.quickInfo.genre}</p>
        <p><strong>Modes:</strong> ${game.quickInfo.modes}</p>
        <p><strong>Platforms:</strong> ${game.quickInfo.platforms}</p>
        <p><strong>Price:</strong> ${game.quickInfo.price}</p>
    `;
    
    // Populate screenshots
    const screenshotsContainer = document.getElementById('screenshots');
    screenshotsContainer.innerHTML = game.screenshots.map((screenshot, index) => `
        <div class="screenshot-item">
            <img src="${screenshot}" alt="${game.name} Screenshot ${index + 1}">
        </div>
    `).join('');
    
    // Set up screenshot modal
    document.querySelectorAll('.screenshot-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'screenshot-modal';
            modal.style.display = 'flex';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${game.screenshots[index]}" alt="${game.name} Screenshot ${index + 1}">
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
    
    // Populate similar games (for demo, just showing random games)
    const similarGamesContainer = document.getElementById('similar-games');
    const similarGames = allGames
        .filter(g => g.id !== game.id && g.category === game.category)
        .slice(0, 4);
    
    similarGamesContainer.innerHTML = similarGames.map(similarGame => `
        <div class="similar-card">
            <a href="game-details.html?id=${similarGame.id}">
                <img src="${similarGame.image}" alt="${similarGame.name}">
                <div class="similar-info">
                    <h4>${similarGame.name}</h4>
                    <span class="game-category ${similarGame.category.toLowerCase()}">${similarGame.category}</span>
                </div>
            </a>
        </div>
    `).join('');
}

// Initialize the page
window.addEventListener('DOMContentLoaded', loadGameData);