const quotesArray = [
    {
        quote: "Come and see the violence inherent in the system. Help! Help! I’m being repressed!"
    },
    {
        quote: "Alright, but apart from the sanitation, the medicine, education, wine, public order, irrigation, roads, the fresh-water system, and public health, what have the Romans ever done for us?"
    },
    {
        quote: "I'm not oppressing you, Stan. You haven't got a womb!"
    },
    {
        quote: "Where's the foetus going to gestate?! You going to keep it in a box?!"
    },
    {
        quote: "Larks' tongues. Otters' noses. Ocelot spleens."
    },
    {
        quote: "Well, tough titty for you, Fish Face."
    },
    {
        quote: "Look. I don't think it ought to be blasphemy, just saying 'Jehovah'."
    },
    {
        quote: "Spam! Spam! Spam! Spam! Spam! Spam!"
    },
     {
        quote: "Venezuelan beaver cheese?"
    },
    {
        quote: "You're fooling yourself. We're living in a dictatorship: a self-perpetuating autocracy in which the working classes..."
    },
    {
        quote: "Nobody expects the Spanish inquisition!"
    },
];

const emojisArray = [
    '🤪',
    '🥹',
    '😝',
    '😁',
    '🙃',
];

let quote = document.getElementById("quote");
const btn = document.getElementById("btn-cta");
const emoji = document.getElementById("emoji");

btn.addEventListener("click",() => {
    randomQuote();
    randomEmoji();
});

function randomQuote(){
   
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    quote.innerText = quotesArray[randomIndex].quote;
};

function randomEmoji(){
    let randomEmoji = Math.floor(Math.random() * emojisArray.length);
    emoji.innerText = emojisArray[randomEmoji];
};

