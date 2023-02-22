export const script = [

    // Start ChatBot Flow for - Tours and packages 

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
            { label: "App Details", trigger: "BOT/app" },
            { label: "Offers", trigger: "BOT/offers" },
            { label: "Refunds", trigger: "BOT/refunds" },
            { label: "Pick-up and Drop Enquiry", trigger: "USER/pickup" },
            { label: "Insurance", trigger: "BOT/insurance" },
            { label: "Private Driver/Guide Enquiry", trigger: "USER/driver-guide" },
            { label: "Payment Options", trigger: "BOT/payment" },
            { label: "Enquiry about rentals", trigger: "BOT/rentals" },
            { label: "Coins & Referral", trigger: "BOT/coins-referral" },
            { label: "Feedback", trigger: "BOT/feedback" },
            { label: "Report a problem", trigger: "BOT/report" },
            { label: "Custom Query", trigger: "BOT/custom_query" }
        ]
    },
    {
        id: "BOT/about",
        message: "TripNThrill is a tour and travel website that offers carefully crafted tours and packages to provide the perfect balance of relaxation and excitement.",
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
        message: "Our top destinations include - Hampi, \n Coorg, \n Chikmagalur, \n Jog Falls, \n Mysore Palace, \n Gokarna, \n Bandipur National Park, \n Kabini River, \n Bangalore",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/travel_specialist",
        message: "Go to : support@tripnthrill.com",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/app",
        message: "Our app is available for download on both iOS and Android devices. It allows you to easily book and manage your trips, view your itinerary, and access local recommendations and discounts.",
        trigger: "CHOICES/again"
    },

    //  End ChatBot Flow for - Tours and packages 

    // Start ChatBot Flow for - Enquiry of refunds

    {
        id: "BOT/refunds",
        message: "We understand that plans can change, and we are happy to offer refunds for cancellations made at least 14 days before the start of the tour. Please contact us for more information or to initiate a refund request.",
        trigger: "BOT/refunds-enquiry"
    },
    {
        id: "BOT/refunds-enquiry",
        message: "Do you have any specific question regarding refund ? ",
        trigger: "USER/refunds-enquiry"
    },
    {
        id: "USER/refunds-enquiry",
        user: true,
        trigger: "BOT/refunds-answer"
    },
    {
        id: "BOT/refunds-answer",
        message: "I apologize, but I am unable to process refund requests. Please contact our customer service team for assistance. They will be happy to help you with any issues or questions you may have.",
        trigger: "CHOICES/again"
    },

    // End ChatBot Flow for - Enquiry of refunds

    // start ChatBot Flow for - Pick-up and Drop Enquiry

    {
        id: "USER/pickup",
        message: "Please provide us your pickup location",
        trigger: "USER/pickup-location"
    },
    {
        id: "USER/pickup-location",
        user: true,
        trigger: "BOT/pickup-confirm"
    },
    {
        id: "BOT/pickup-confirm",
        message: "Your pickup location is confirmed. Would you like to add drop location?",
        trigger: "CHOICES/drop"
    },
    {
        id: "CHOICES/drop",
        options: [
            { label: "Yes", trigger: "USER/drop" },
            { label: "No", trigger: "BOT/drop-end" }
        ]
    },
    {
        id: "USER/drop",
        message: "Please provide us your drop location",
        trigger: "USER/drop-location"
    },
    {
        id: "USER/drop-location",
        user: true,
        trigger: "BOT/drop-confirm"
    },
    {
        id: "BOT/drop-confirm",
        message: "Your drop location is confirmed. Thank you for contacting us. Our team will get back to you soon.",
        end: true
    },
    {
        id: "BOT/drop-end",
        message: "Thank you for contacting us. Our team will get back to you soon.",
        end: true
    },

    // End ChatBot Flow for - Pick-up and Drop Enquiry

    // start ChatBot Flow for - Pick-up and Drop Enquiry

    {
        id: "USER/driver-guide",
        message: "Please let us know the type of service you need, private driver or guide?",
        trigger: "CHOICES/driver-guide"
    },
    {
        id: "CHOICES/driver-guide",
        options: [
            { label: "Private Driver", trigger: "USER/driver" },
            { label: "Guide", trigger: "USER/guide" }
        ]
    },
    {
        id: "USER/driver",
        message: "Please provide us your pickup location and date and time of pickup?",
        trigger: "USER/driver-detail"
    },
    {
        id: "USER/driver-detail",
        user: true,
        trigger: "BOT/driver-confirm"
    },
    {
        id: "BOT/driver-confirm",
        message: "Your private driver request is confirmed. Our team will get back to you soon.",
        end: true
    },
    {
        id: "USER/guide",
        message: "Please provide us your location, date and time of service?",
        trigger: "USER/guide-detail"
    },
    {
        id: "USER/guide-detail",
        user: true,
        trigger: "BOT/guide-confirm"
    },
    {
        id: "BOT/guide-confirm",
        message: "Your private guide request is confirmed. Our team will get back to you soon.",
        end: true
    },

    // End ChatBot Flow for - Pick-up and Drop Enquiry

    // start ChatBot Flow for - Pick-up and Drop Enquiry

    {
        id: "BOT/payment",
        message: "We accept a variety of payment options including credit/debit cards, PayPal, and bank transfers. Can I help you with anything else?",
        trigger: "CHOICES/again"
    },

    // End ChatBot Flow for - Pick-up and Drop Enquiry

    // start ChatBot Flow for - FAQ on insurance

    {
        id: "BOT/insurance",
        message: "We highly recommend purchasing travel insurance for your trip. It covers you in case of trip cancellation, medical emergencies, lost or stolen baggage, and more. Do you have any specific questions about insurance?",
        trigger: "BOT/insurance_FAQ"
    },
    {
        id: "BOT/insurance_FAQ",
        options: [
            { label: "What types of coverage does the insurance include?", trigger: "BOT/insurance_types" },
            { label: "How can I purchase insurance?", trigger: "BOT/insurance_purchase" },
            { label: "No, I'm good", trigger: "CHOICES/again" }
        ]
    },
    {
        id: "BOT/insurance_types",
        message: "Our travel insurance includes coverage for trip cancellation, medical emergencies, lost or stolen baggage, and more. Please refer to the insurance policy for the full list of coverage.",
        trigger: "BOT/insurance_FAQ"
    },
    {
        id: "BOT/insurance_purchase",
        message: "You can purchase insurance through our App or by contacting our customer service team. Please let us know if you need any assistance.",
        trigger: "BOT/insurance_FAQ"
    },

    // End ChatBot Flow for - FAQ on insurance

    // Start ChatBot Flow for - Offers

    {
        id: "BOT/offers",
        message: "We have several amazing offers currently available for our customers. Would you like to know more?",
        trigger: "BOT/offers_detail"
    },
    {
        id: "BOT/offers_detail",
        options: [
            { label: "Yes, please!", trigger: "BOT/offers_list" },
            { label: "No, thank you", trigger: "CHOICES/again" }
        ]
    },
    {
        id: "BOT/offers_list",
        message: "1. Book any tour package before end of month and get 10% off.\n 2. Refer a friend and get 20% off on your next booking\n 3. Book a package and get complimentary pick-up and drop",
        trigger: "BOT/offers_book"
    },
    {
        id: "BOT/offers_book",
        message: "Which offer would you like to avail?",
        trigger: "BOT/offers_avail"
    },
    {
        id: "BOT/offers_avail",
        options: [
            { label: "1", trigger: "BOT/offers_1" },
            { label: "2", trigger: "BOT/offers_2" },
            { label: "3", trigger: "BOT/offers_3" },
        ]
    },
    {
        id: "BOT/offers_1",
        message: "Great! You've availed offer number 1. Please proceed with your booking to get 10% off.",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/offers_2",
        message: "Great! You've availed offer number 2. Please share the referral code with your friend to get 20% off on your next booking.",
        trigger: "CHOICES/again"
    },
    {
        id: "BOT/offers_3",
        message: "Great! You've availed offer number 3. Complimentary pick-up and drop has been added to your package.",
        trigger: "CHOICES/again"
    },


    // End ChatBot Flow for - Offers


    // Start ChatBot Flow for - Report a problem/inconvenience/bug

    {
        id: "BOT/report",
        message: "We're sorry to hear that. Could you please describe the issue you are facing?",
        trigger: "USER/report-desc"
    },
    {
        id: "USER/report-desc",
        user: true,
        trigger: "BOT/report-ack"
    },
    {
        id: "BOT/report-ack",
        message: "Thank you for reporting the issue. Our team will look into it and try to resolve it as soon as possible.",
        trigger: "CHOICES/again"
    },


    // End ChatBot Flow for - Report a problem/inconvenience/bug


    // Start ChatBot Flow for - Feedback/Suggestions

    {
        id: "BOT/feedback",
        message: "We would love to hear from you! How was your experience with us? Do you have any feedback or suggestions for us?",
        trigger: "USER/feedback-desc"
    },
    {
        id: "USER/feedback-desc",
        user: true,
        trigger: "BOT/feedback-ack"
    },
    {
        id: "BOT/feedback-ack",
        message: "Thank you for your feedback. Your thoughts and suggestions are valuable to us and help us improve our services.",
        trigger: "CHOICES/again"
    },


    // End ChatBot Flow for - Feedback/Suggestions


    // Start ChatBot Flow for - Coins and Referral

    {
        id: "BOT/coins-referral",
        message: "We offer a referral program and coins system to reward our customers. Would you like to know more?",
        trigger: "CHOICES/coins-referral-details"
    },
    {
        id: "CHOICES/coins-referral-details",
        options: [
            { label: "Tell me more about coins", trigger: "BOT/coins-info" },
            { label: "Tell me more about referral", trigger: "BOT/referral-info" }
        ]
    },
    {
        id: "BOT/coins-info",
        message: "You can earn coins by booking tours and referring friends to TripNThrill. These coins can be redeemed for discounts on future bookings.",
        trigger: "CHOICES/referral-or-back"
    },
    {
        id: "BOT/referral-info",
        message: "Our referral program allows you to earn rewards by referring your friends and family to TripNThrill. For every successful referral, both you and your friend will receive a discount on your next booking.",
        trigger: "CHOICES/referral-or-back"
    },
    {
        id: "CHOICES/referral-or-back",
        options: [
            { label: "Refer a friend now", trigger: "BOT/refer-now" },
            { label: "Go back to main menu", trigger: "CHOICES/again" }
        ]
    },
    {
        id: "BOT/refer-now",
        message: "You can refer a friend from the 'Rewards' section in your TripNThrill account. Get started today!",
        trigger: "CHOICES/again"
    },

    // End ChatBot Flow for - Coins and Referral

    // Start ChatBot Flow for - Enquiry about rentals

    {
        id: "BOT/rentals",
        message: "We offer a variety of rental options to make your trip more convenient and enjoyable. Our rentals include cars, bicycles, and more.",
        trigger: "CHOICES/again"
    },

    // End ChatBot Flow for - Enquiry about rentals

    // Start ChatBot Flow for - Custom Query

    {
        id: "BOT/custom_query",
        message: "Is there anything else you would like to know about TripNThrill? Please send us your query.",
        trigger: "CHOICES/custom_query"
    },
    {
        id: "CHOICES/custom_query",
        options: [
            { label: "Yes", trigger: "USER/custom_query_yes" },
            { label: "No", trigger: "CHOICES/again" }
        ]
    },
    {
        id: "USER/custom_query_yes",
        user: true,
        trigger: "BOT/custom_query_answer"
    },
    {
        id: "BOT/custom_query_answer",
        message: "I have got your query.I will get back to you soon!",
        trigger: "CHOICES/again"
    },

    // End ChatBot Flow for - Custom Query

    {
        id: "CHOICES/again",
        options: [{ label: "Main Menu", trigger: "CHOICES/intro" }]
    },
];
