const script = [{
    id: "CHOICES/main", options: [{ label: "Offers", trigger: "BOT/offers" },]
},
{
    id: "BOT/offers",
    message: "We have several amazing offers currently available for our customers. Would you like to know more?",
    trigger: "BOT/offers_detail"
},
{
    id: "BOT/offers_detail",
    options: [
        { label: "Yes, please!", trigger: "BOT/offers_list" },
        { label: "No, thank you", trigger: "CHOICES/main" }
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
    trigger: "CHOICES/main"
},
{
    id: "BOT/offers_2",
    message: "Great! You've availed offer number 2. Please share the referral code with your friend to get 20% off on your next booking.",
    trigger: "CHOICES/main"
},
{
    id: "BOT/offers_3",
    message: "Great! You've availed offer number 3. Complimentary pick-up and drop has been added to your package.",
    trigger: "CHOICES/main"
},

]
