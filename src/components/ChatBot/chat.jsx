const script = [
    {
        id: "BOT/intro",
        message: "Hello there! Welcome to TripNThrill. How can I assist you with your travel plans?",
        trigger: "CHOICES/intro"
    },
    {
        id: "CHOICES/intro",
        options: [
            { label: "About", trigger: "BOT/about" },
            { label: "Tour Packages", trigger: "BOT/packages" },
            { label: "App Details", trigger: "BOT/app" }
        ]
    },
    {
        id: "BOT/about",
        message: "TripNThrill is a tour and travel website that offers carefully crafted tours and packages to provide the perfect balance of relaxation and excitement. We offer luxurious accommodations, unparalleled sightseeing opportunities, and authentic local experiences that will stay with you long after your trip is over.",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/packages",
        message: "We offer a variety of tours and packages. Would you like to see our top destinations, customize your own tour, or speak with a travel specialist?",
        trigger: "CHOICES/packages"
    },
    {
        id: "CHOICES/packages",
        options: [
            { label: "Top Destinations", trigger: "BOT/top_destinations" },
            { label: "Customize Tour", trigger: "BOT/customize_tour" },
            { label: "Travel Specialist", trigger: "BOT/travel_specialist" }
        ]
    },
    {
        id: "BOT/top_destinations",
        message: "Our top destinations include \n Hampi \n Coorg \n Chikmagalur \n Jog Falls \n Mysore Palace \n Gokarna \n Bandipur National Park \n Kabini River \n Bangalore \n Which destination interests you the most?",
        trigger: "CHOICES/destinations"
    },
    {
        id: "CHOICES/destinations",
        options: [
            { label: "Paris", trigger: "BOT/paris_packages" },
            { label: "Rome", trigger: "BOT/rome_packages" },
            { label: "Barcelona", trigger: "BOT/barcelona_packages" }
        ]
    },
    {
        id: "BOT/paris_packages",
        message: "Great choice! We have several Paris tour packages available, including a romantic getaway package, a historical tour package, and a food and wine package. Which package interests you?",
        trigger: "CHOICES/paris_packages"
    },
    {
        id: "CHOICES/paris_packages",
        options: [
            { label: "Romantic Getaway", trigger: "BOT/romantic_getaway_package" },
            { label: "Historical Tour", trigger: "BOT/historical_tour_package" },
            { label: "Food and Wine", trigger: "BOT/food_wine_package" }
        ]
    }]
