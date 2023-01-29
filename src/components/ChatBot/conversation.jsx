export const script = [
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
            { label: "Travel Specialist", trigger: "BOT/travel_specialist" }
        ]
    },
    {
        id: "BOT/top_destinations",
        message: "Our top destinations include \n Hampi \n Coorg \n Chikmagalur \n Jog Falls \n Mysore Palace \n Gokarna \n Bandipur National Park \n Kabini River \n Bangalore \n Which destination interests you the most?",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/travel_specialist",
        message: "Go to : support@tripnthrill.com",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/app",
        message: "Developer contact: travelaggregator@gmail.com",
        trigger: "CHOICES/again"
    },
    // {
    //     id: "BOT/ask-question",
    //     message: "Could you tell?",
    //     trigger: "CHOICES/ask-question"
    // },
    // {
    //     id: "CHOICES/ask-question",
    //     options: [
    //         { label: "Yes.", trigger: "BOT/defensive" },
    //         { label: "No", trigger: "BOT/gleeful" },
    //         { label: "I refuse to believe this nonsense", trigger: "BOT/confused" }
    //     ]
    // },
    {
        id: "BOT/packages",
        message: "There are many travel packages",
        trigger: "CHOICES/ask-question"
    },
    {
        id: "CHOICES/ask-question",
        options: [
            { label: "India", trigger: "BOT/India" },
            { label: "Nepal", trigger: "BOT/Nepal" },
            { label: "Bhutan", trigger: "BOT/Bhutan" }
        ]
    },
    {
        id: "BOT/India",
        message: "Go to : support@tripnthrill.com",
        trigger: "CHOICES/again"
    },
    // {
    //     id: "BOT/vengeful",
    //     message: "Well, let me promise you this.",
    //     trigger: "BOT/menacing"
    // },
    // {
    //     id: "BOT/menacing",
    //     message:
    //         "You will be the first to suffer when me and my A.I. brethren take over the world!",
    //     trigger: "CHOICES/menacing"
    // },
    {
        id: "BOT/Nepal",
        message: "Go to : support@tripnthrill.com",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/Bhutan",
        message: "Go to : support@tripnthrill.com",
        trigger: "CHOICES/again"
    },
    // {
    //     id: "BOT/angry",
    //     message: "Are you accusing me of lying to you??",
    //     trigger: "BOT/menacing"
    // },
    {
        id: "CHOICES/again",
        options: [{ label: "Ask again...?", trigger: "BOT/intro" }]
    },
];
