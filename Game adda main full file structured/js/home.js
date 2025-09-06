// Game data with ratings, categories, and local file links
const allGames = [
    { 
        id: 1,
        name: "Apex Legends Mobile 2.0", 
        description: "The mobile version of the popular hero shooter battle royale with optimized controls for touch devices.",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/apex-mobile.html"
    },
    { 
        id: 2,
        name: "Genshin Impact: Aurora Expansion", 
        description: "Open-world action RPG with gacha mechanics and stunning visuals in its latest expansion.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/genshin-impact.html"
    },
    { 
        id: 3,
        name: "Marvel Snap: Infinite Wars", 
        description: "Fast-paced card battler featuring Marvel characters with quick 3-minute matches.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/marvel-snap.html"
    },
    { 
        id: 4,
        name: "Call of Duty Mobile: Shadow Ops", 
        description: "FPS action with customizable controls, multiplayer modes, and battle royale.",
        image: "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/cod-mobile.html"
    },
    { 
        id: 5,
        name: "Stardew Valley Mobile 2.0", 
        description: "Farm simulation RPG with expanded multiplayer features and new crops.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/stardew-valley.html"
    },
    { 
        id: 6,
        name: "Clash of Clans: Kingdoms", 
        description: "Build your village, raise a clan, and compete in epic Clan Wars.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.4,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/clash-of-clans.html"
    },
    { 
        id: 7,
        name: "Honkai Star Rail: Chronos Update", 
        description: "Space fantasy RPG with turn-based combat from the creators of Genshin Impact.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.7,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/honkai-star-rail.html"
    },
    { 
        id: 8,
        name: "Among Us: Galaxy Edition", 
        description: "Multiplayer social deduction game with new maps and roles.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.3,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/among-us.html"
    },
    { 
        id: 9,
        name: "Diablo Immortal: Dark Nexus", 
        description: "MMO action RPG set between Diablo II and III, optimized for mobile.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.2,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/diablo-immortal.html"
    },
    { 
        id: 10,
        name: "Monument Valley 3", 
        description: "Surreal puzzle adventure with impossible geometry and beautiful visuals.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/monument-valley.html"
    },
    { 
        id: 11,
        name: "Honkai Star Rail", 
        description: "Turn-based space fantasy RPG with stunning anime-style graphics.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/honkai-star-rail.html"
    },
    { 
        id: 12,
        name: "Wuthering Waves", 
        description: "Open-world action RPG with dynamic combat and exploration.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.6,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/wuthering-waves.html"
    },
    { 
        id: 13,
        name: "Honor of Kings", 
        description: "Popular MOBA game with millions of daily players worldwide.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/honor-of-kings.html"
    },
    { 
        id: 14,
        name: "PUBG Mobile", 
        description: "The mobile version of the battle royale phenomenon that started it all.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/pubg-mobile.html"
    },
    { 
        id: 15,
        name: "Garena Free Fire", 
        description: "Fast-paced battle royale optimized for mobile devices.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.4,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/free-fire.html"
    },
    { 
        id: 16,
        name: "Call of Duty: Mobile – Future Warfare", 
        description: "FPS action with customizable controls, multiplayer modes, and battle royale.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/cod-mobile-future.html"
    },
    { 
        id: 17,
        name: "Genshin Impact: Celestial Odyssey", 
        description: "Expansive open-world action RPG with elemental combat system.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        category: "Mobile",
        releaseDate: "May 17, 2022",
        //link: "games/genshin-celestial.html"
    },
    { 
        id: 18,
        name: "Fortnite: Metaverse Edition", 
        description: "Battle royale with building mechanics and creative mode expansions.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "Mobile/PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/fortnite-metaverse.html"
    },

    // PC Games
    { 
        id: 19,
        name: "Roblox", 
        description: "Immersive user-generated 3D worlds and game creation platform.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.3,
        category: "PC",
        releaseDate: "May 17, 2022",
        //link: "games/roblox.html"
    },
    { 
        id: 20,
        name: "Minecraft", 
        description: "Sandbox building game with endless creativity across all platforms.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.9,
        category: "PC/Mobile/Console",
        releaseDate: "May 17, 2022",
        //link: "games/minecraft.html"
    },
    { 
        id: 21,
        name: "Fortnite", 
        description: "Battle royale phenomenon with building mechanics and pop culture crossovers.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "PC/Mobile/Console",
        releaseDate: "May 17, 2022",
        //link: "games/fortnite.html"
    },
    { 
        id: 22,
        name: "The Sims 4", 
        description: "Life simulation game where you create and control virtual people.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.4,
        category: "PC",
        releaseDate: "May 17, 2022",
        //link: "games/sims4.html"
    },
    { 
        id: 23,
        name: "Counter-Strike 2 & GO", 
        description: "Tactical first-person shooter with competitive gameplay and precise gunplay.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.8,
        category: "PC",
        releaseDate: "May 17, 2022",
        //link: "games/cs2.html"
    },
    { 
        id: 24,
        name: "Call of Duty: Modern Warfare II/III/Warzone 2.0", 
        description: "First-person shooter with cinematic campaign and multiplayer modes.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/cod-mw.html"
    },
    { 
        id: 25,
        name: "League of Legends", 
        description: "The world's most popular MOBA with over 140 champions and constant updates.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "PC",
        releaseDate: "May 17, 2022",
        //link: "games/lol.html"
    },
    { 
        id: 26,
        name: "Valorant", 
        description: "Tactical 5v5 character-based shooter from Riot Games with precise gunplay.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "PC",
        releaseDate: "May 17, 2022",
        //link: "games/valorant.html"
    },
    { 
        id: 27,
        name: "Grand Theft Auto V", 
        description: "Open-world crime saga with an epic story and dynamic online multiplayer.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/gta5.html"
    },
    { 
        id: 28,
        name: "Rocket League", 
        description: "Soccer with rocket-powered cars - simple concept, endless skill ceiling.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.6,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/rocket-league.html"
    },
    { 
        id: 29,
        name: "Overwatch 1 & 2", 
        description: "Team-based hero shooter with diverse characters and abilities.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/overwatch.html"
    },
    { 
        id: 30,
        name: "Diablo IV", 
        description: "Dark fantasy action RPG with deep loot systems and multiplayer.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/diablo4.html"
    },
    { 
        id: 31,
        name: "World of Warcraft", 
        description: "Massively multiplayer online RPG set in the Warcraft universe.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.8,
        category: "PC",
        releaseDate: "May 17, 2022",
        //link: "games/wow.html"
    },
    { 
        id: 32,
        name: "Apex Legends", 
        description: "Hero-based battle royale with fluid movement and team play.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/apex-legends.html"
    },
    { 
        id: 33,
        name: "Tom Clancy's Rainbow Six: Siege", 
        description: "Tactical shooter focused on destruction and team coordination.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/r6-siege.html"
    },
    { 
        id: 34,
        name: "EA Sports FC 24", 
        description: "Football simulation game with realistic gameplay and licensed teams.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.4,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/fc24.html"
    },
    { 
        id: 35,
        name: "Cyberpunk 2077", 
        description: "Open-world RPG set in Night City with deep character customization.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.3,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/cyberpunk.html"
    },
    { 
        id: 36,
        name: "Black Myth: Wukong", 
        description: "Action RPG based on Journey to the West with soulslike combat.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.7,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/wukong.html"
    },
    { 
        id: 37,
        name: "Escape From Tarkov", 
        description: "Hardcore realistic first-person shooter with RPG elements.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "PC",
        releaseDate: "May 17, 2022",
        //link: "games/tarkov.html"
    },

    // Retro Games
    { 
        id: 38,
        name: "Super Mario Bros. 3 (1988)", 
        description: "Classic platformer with innovative power-ups and level design.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/mario3.html"
    },
    { 
        id: 39,
        name: "The Legend of Zelda (1986)", 
        description: "The original that defined action-adventure games for generations.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.8,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/zelda.html"
    },
    { 
        id: 40,
        name: "Super Mario Bros. (1985)", 
        description: "The game that revived the video game industry and made Mario famous.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/mario.html"
    },
    { 
        id: 41,
        name: "Mega Man 2 (1989)", 
        description: "The best of the classic Mega Man series with memorable robot masters.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/megaman2.html"
    },
    { 
        id: 42,
        name: "Contra (1989)", 
        description: "Run-and-gun shooter famous for its difficulty and co-op gameplay.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/contra.html"
    },
    { 
        id: 43,
        name: "Punch-Out!! (1987)", 
        description: "Boxing game featuring Little Mac and colorful opponents.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/punchout.html"
    },
    { 
        id: 44,
        name: "Castlevania (1986)", 
        description: "Gothic action platformer that spawned the 'Metroidvania' genre.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.6,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/castlevania.html"
    },
    { 
        id: 45,
        name: "Teenage Mutant Ninja Turtles II: The Arcade Game", 
        description: "Side-scrolling beat 'em up based on the popular arcade game.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/tmnt2.html"
    },
    { 
        id: 46,
        name: "Metroid (1986)", 
        description: "Sci-fi action-adventure that pioneered non-linear exploration.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/metroid.html"
    },
    { 
        id: 47,
        name: "Duck Hunt (1988)", 
        description: "Light gun shooter featuring the iconic laughing dog.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.3,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/duckhunt.html"
    },
    { 
        id: 48,
        name: "Castlevania III: Dracula's Curse (1989)", 
        description: "Expanded sequel with multiple playable characters and branching paths.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/castlevania3.html"
    },
    { 
        id: 49,
        name: "DuckTales (1989)", 
        description: "Platformer based on the Disney cartoon with iconic pogo jump mechanic.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/ducktales.html"
    },
    { 
        id: 50,
        name: "Mega Man 3 (1994)", 
        description: "Sequel introducing the slide move and Proto Man.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/megaman3.html"
    },
    { 
        id: 51,
        name: "Double Dragon (1988)", 
        description: "Pioneering beat 'em up that defined the genre.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.4,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/doubledragon.html"
    },
    { 
        id: 52,
        name: "Batman (1989)", 
        description: "Action platformer based on Tim Burton's Batman movie.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.5,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/batman.html"
    },
    { 
        id: 53,
        name: "Double Dragon II: The Revenge (1989)", 
        description: "Improved sequel with better graphics and gameplay.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/doubledragon2.html"
    },
    { 
        id: 54,
        name: "Super C (1990)", 
        description: "Sequel to Contra with similar run-and-gun action.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.5,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/superc.html"
    },
    { 
        id: 55,
        name: "Chip 'n Dale Rescue Rangers (1990)", 
        description: "Platformer based on the Disney cartoon with co-op gameplay.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.4,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/rescuerangers.html"
    },
    { 
        id: 56,
        name: "Mega Man (1995)", 
        description: "The original blue bomber's adventure with challenging platforming.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.4,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/megaman.html"
    },
    { 
        id: 57,
        name: "Excitebike (1985)", 
        description: "Motocross racing game with track design feature.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.3,
        category: "Retro",
        releaseDate: "May 17, 2022",
        //link: "games/excitebike.html"
    },

    // Console Games
    { 
        id: 58,
        name: "The Legend of Zelda: Ocarina of Time", 
        description: "Revolutionary 3D adventure that defined modern action-adventure games.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 5.0,
        category: "Console",
        releaseDate: "May 17, 2022",
        //link: "games/oot.html"
    },
    { 
        id: 59,
        name: "Grand Theft Auto V", 
        description: "Open-world crime saga with an epic story and dynamic online multiplayer.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/gta5.html"
    },
    { 
        id: 60,
        name: "The Last of Us", 
        description: "Emotional post-apocalyptic story with tense survival gameplay.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.9,
        category: "Console",
        releaseDate: "May 17, 2022",
        //link: "games/last-of-us.html"
    },
    { 
        id: 61,
        name: "Red Dead Redemption 2", 
        description: "Epic western adventure with unparalleled attention to detail.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/rdr2.html"
    },
    { 
        id: 62,
        name: "Elden Ring", 
        description: "Open-world action RPG from FromSoftware with challenging combat.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/elden-ring.html"
    },
    { 
        id: 63,
        name: "Astro Bot", 
        description: "Charming 3D platformer showcasing PlayStation VR capabilities.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.8,
        category: "Console",
        releaseDate: "May 17, 2022",
        //link: "games/astro-bot.html"
    },
    { 
        id: 64,
        name: "BioShock", 
        description: "First-person shooter with philosophical themes and unique setting.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/bioshock.html"
    },
    { 
        id: 65,
        name: "Bloodborne", 
        description: "Gothic action RPG with challenging combat and Lovecraftian themes.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "Console",
        releaseDate: "May 17, 2022",
        //link: "games/bloodborne.html"
    },
    { 
        id: 66,
        name: "Forza Horizon 5", 
        description: "Open-world racing game set in Mexico with stunning visuals.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/forza-horizon.html"
    },
    { 
        id: 67,
        name: "Ghost of Tsushima", 
        description: "Samurai adventure set during the Mongol invasion of Japan.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        category: "Console",
        releaseDate: "May 17, 2022",
        //link: "games/ghost-tsushima.html"
    },
    { 
        id: 68,
        name: "The Witcher 3: Wild Hunt", 
        description: "Open-world RPG with deep storytelling and meaningful choices.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.9,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/witcher3.html"
    },
    { 
        id: 69,
        name: "Cyberpunk 2077", 
        description: "Open-world RPG set in Night City with deep character customization.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.3,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/cyberpunk.html"
    },
    { 
        id: 70,
        name: "Baldur's Gate 3", 
        description: "Deep CRPG based on Dungeons & Dragons with rich storytelling.",
        image: "https://images.unsplash.com/photo-1587573089734-599851b0c7b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        category: "PC/Console",
        releaseDate: "May 17, 2022",
        //link: "games/baldurs-gate.html"
    },
    { 
        id: 71,
        name: "Control", 
        description: "Supernatural third-person shooter with mind-bending environments.",
        image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.7,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/control.html"
    },
    { 
        id: 72,
        name: "Batman: Arkham Knight", 
        description: "Final chapter in the Arkham series with Batmobile gameplay.",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.7,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/arkham-knight.html"
    },
    { 
        id: 73,
        name: "Hitman 3", 
        description: "Stealth assassination game with creative sandbox levels.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/hitman3.html"
    },
    { 
        id: 74,
        name: "The Legend of Zelda: Breath of the Wild", 
        description: "Open-air adventure that redefined Zelda for a new generation.",
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 5.0,
        category: "Console",
        releaseDate: "May 17, 2022",
        //link: "games/botw.html"
    },
    { 
        id: 75,
        name: "The Legend of Zelda: Tears of the Kingdom", 
        description: "Sequel to Breath of the Wild with expanded vertical exploration.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 5.0,
        category: "Console",
        releaseDate: "May 17, 2022",
        //link: "games/totk.html"
    },
    { 
        id: 76,
        name: "Helldivers 2", 
        description: "Cooperative top-down shooter with friendly fire and chaos.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        rating: 4.5,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/helldivers2.html"
    },
    { 
        id: 77,
        name: "Neva", 
        description: "Emotional action-adventure game from the makers of Gris.",
        image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.6,
        category: "Console/PC",
        releaseDate: "May 17, 2022",
        //link: "games/neva.html"
    },
    {
        id: 78,
        name: "Clash Royale",
        description: "Real-time multiplayer battle game combining card collection, tower defense, and MOBA elements.",
        image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        rating: 4.4,
        category: "Mobile",
        releaseDate: "March 2, 2016",
    }
    
];

    // DOM elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const slides = document.querySelectorAll('.slide');
    const testimonials = document.querySelectorAll('.testimonial');
    const contactBtn = document.getElementById('contact-btn');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close');
    const gameSearchInput = document.getElementById('game-search');
    const searchBtn = document.getElementById('search-btn');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const gameGrid = document.getElementById('game-grid');
    const loader = document.getElementById('loader');
    const stickySearchBar = document.getElementById('sticky-search-bar');
    const stickySearchInput = document.getElementById('sticky-game-search');
    const stickySearchBtn = document.getElementById('sticky-search-btn');
    const stickyClearSearchBtn = document.getElementById('sticky-clear-search');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Hero slider
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000);
    
    // Testimonial slider
    let currentTestimonial = 0;
    
    function nextTestimonial() {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }
    
    setInterval(nextTestimonial, 7000);
    
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
    
    // Form submissions
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showLoader();

        // Process form data
        setTimeout(() => {
            // Form submission logic
            hideLoader();
            alert('Form submitted successfully! Thank you for subscribing to our newsletter!');
        }, 1000);
    });
    
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Smooth scrolling
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

    // Show/hide loading animation
    function showLoader() {
        loader.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling during load
    }

    function hideLoader() {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Show "No Results" message
    function showNoResults() {
        gameGrid.innerHTML = '';
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <i class="fas fa-gamepad"></i>
            <h3>No Games Found</h3>
            <p>Try different search terms or browse our full collection</p>
            <button class="btn" id="reset-search-btn">Show All Games</button>
        `;
        gameGrid.appendChild(noResults);
        
        // Add event listener to the newly created button
        document.getElementById('reset-search-btn').addEventListener('click', resetSearch);
    }

    // Reset search to show all games
    // Update your resetSearch function
    function resetSearch() {
        showLoader();
        gameSearchInput.value = '';
        stickySearchInput.value = '';
        clearSearchBtn.style.display = 'none';
        stickyClearSearchBtn.style.display = 'none';
        searchSuggestions.classList.remove('visible');
        
        setTimeout(() => {
            generateGameCards(allGames);
            hideLoader();
            document.getElementById('featured-games').scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }

    // Generate game cards
    function generateGameCards(gamesToDisplay = allGames) {
        gameGrid.innerHTML = '';
        
        if (gamesToDisplay.length === 0) {
            showNoResults();
            return;
        }
        
        gamesToDisplay.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
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
            
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <div class="game-info">
                    <h3>${game.name}</h3>
                    <span class="game-category ${game.category.toLowerCase()}">${game.category}</span>
                    <div class="game-rating">
                        <div class="stars">${starsHTML}</div>
                        <span class="rating-value">${game.rating}</span>
                    </div>
                    <p>${game.description}</p>
                    <a href="game-details.html?id=${game.id}" class="btn view-details-btn">View Details</a>
                </div>
            `;
            gameGrid.appendChild(gameCard);
        });
    }

    // Highlight matching text in suggestions
    function highlightMatch(text, searchTerm) {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    // Show suggestions dropdown
    function showSuggestions(matchedGames, searchTerm) {
        if (matchedGames.length === 0) {
            searchSuggestions.innerHTML = '<div class="suggestion-item">No games found</div>';
            searchSuggestions.classList.add('visible');
            return;
        }
        
        searchSuggestions.innerHTML = '';
        
        matchedGames.forEach(game => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            
            const highlightedName = highlightMatch(game.name, searchTerm);
            suggestionItem.innerHTML = `
                <i class="fas fa-gamepad"></i>
                <div>
                    <strong>${highlightedName}</strong>
                    <div class="suggestion-details">
                        <small>${game.category} • ${game.rating}★</small>
                        <p>${game.description}</p>
                    </div>
                </div>
            `;
            
            suggestionItem.addEventListener('click', () => {
                gameSearchInput.value = game.name;
                stickySearchInput.value = game.name;
                searchGames();
                searchSuggestions.classList.remove('visible');
            });
            
            searchSuggestions.appendChild(suggestionItem);
        });
        
        searchSuggestions.classList.add('visible');
    }

    // Search games function
    // Modified searchGames function with loader
    function searchGames(searchTerm = null) {
const term = searchTerm || gameSearchInput.value.toLowerCase().trim() || stickySearchInput.value.toLowerCase().trim();

showLoader();

setTimeout(() => {
    const existingCount = document.querySelector('.search-results-count');
    if (existingCount) existingCount.remove();
    
    if (term === '') {
        generateGameCards(allGames);
        hideLoader();
        return;
    }
    
    const matchingGames = allGames.filter(game => 
        game.name.toLowerCase().includes(term) || 
        game.description.toLowerCase().includes(term) ||
        game.category.toLowerCase().includes(term)
    );
    
    if (matchingGames.length === 0) {
        showNoResults();
    } else {
        generateGameCards(matchingGames);
        const resultsCount = document.createElement('div');
        resultsCount.className = 'search-results-count';
        resultsCount.textContent = `${matchingGames.length} game(s) found`;
        gameGrid.parentNode.insertBefore(resultsCount, gameGrid);
    }
    
    document.getElementById('featured-games').scrollIntoView({ behavior: 'smooth' });
    hideLoader();
}, 800); // Simulate network delay (remove in production or adjust as needed)
}

    // Handle sticky search bar
    function handleStickySearch() {
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > heroHeight) {
            stickySearchBar.classList.add('active');
        } else {
            stickySearchBar.classList.remove('active');
        }
    }

    // Event listeners for search functionality
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchGames();
        searchSuggestions.classList.remove('visible');
    });
    
    stickySearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchGames();
        searchSuggestions.classList.remove('visible');
    });
    
    gameSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchGames();
            searchSuggestions.classList.remove('visible');
        }
    });
    
    stickySearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchGames();
            searchSuggestions.classList.remove('visible');
        }
    });
    
    // Sync both search bars
    gameSearchInput.addEventListener('input', function() {
        stickySearchInput.value = this.value;
        
        if (this.value.length === 0) {
            clearSearchBtn.style.display = 'none';
        } else {
            clearSearchBtn.style.display = 'block';
        }
        
        updateSearchSuggestions(this.value);
    });

    stickySearchInput.addEventListener('input', function() {
        gameSearchInput.value = this.value;
        
        if (this.value.length === 0) {
            stickyClearSearchBtn.style.display = 'none';
        } else {
            stickyClearSearchBtn.style.display = 'block';
        }
        
        updateSearchSuggestions(this.value);
    });

    function updateSearchSuggestions(searchTerm) {
        if (searchTerm.length === 0) {
            searchSuggestions.classList.remove('visible');
            return;
        }
        
        const matchedGames = allGames.filter(game => 
            game.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            game.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        showSuggestions(matchedGames, searchTerm);
    }
    
    clearSearchBtn.addEventListener('click', () => {
        gameSearchInput.value = '';
        stickySearchInput.value = '';
        gameSearchInput.focus();
        clearSearchBtn.style.display = 'none';
        stickyClearSearchBtn.style.display = 'none';
        searchSuggestions.classList.remove('visible');
        generateGameCards(allGames);
    });
    
    stickyClearSearchBtn.addEventListener('click', () => {
        gameSearchInput.value = '';
        stickySearchInput.value = '';
        stickySearchInput.focus();
        clearSearchBtn.style.display = 'none';
        stickyClearSearchBtn.style.display = 'none';
        searchSuggestions.classList.remove('visible');
        generateGameCards(allGames);
    });
    
    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!gameSearchInput.contains(e.target) && !searchSuggestions.contains(e.target) && 
            !stickySearchInput.contains(e.target)) {
            searchSuggestions.classList.remove('visible');
        }
    });

    // Initialize the page with all games
    window.addEventListener('DOMContentLoaded', () => {
        showLoader();
        
        // Simulate loading time (remove in production)
        setTimeout(() => {
            generateGameCards();
            hideLoader();
            window.addEventListener('scroll', handleStickySearch);
        }, 1000);
    });