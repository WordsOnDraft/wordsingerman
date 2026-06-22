// ===============================
// But It's Not A Pig!
// script.js
// ===============================

// Vocabulary list
const words = [

{
english:"Pig",
german:"das Schwein",
file:"das-schwein"
},

{
english:"Porcupine",
german:"das Stachelschwein",
file:"das-stachelschwein"
},

{
english:"Spike/Quill",
german:"der Stachel",
file:"der-stachel"
},

{
english:"Warthog",
german:"das Warzenschwein",
file:"das-warzenschwein"
},

{
english:"Wart",
german:"die Warze",
file:"die-warze"
},

{
english:"Warts",
german:"die Warzen",
file:"die-warzen"
},

{
english:"Guinea Pig",
german:"das Meerschweinchen",
file:"das-meerschweinchen"
},

{
english:"Sea",
german:"das Meer",
file:"das-meer"
},

{
english:"Suffix indicating small/cute/little",
german:"-chen",
file:"-chen"
},

{
english:"Dugong",
german:"das Seeschwein",
file:"das-seeschwein"
},

{
english:"Sea",
german:"die See",
file:"die-see"
},

{
english:"Capybara",
german:"das Wasserschwein",
file:"das-wasserschwein"
},

{
english:"Water",
german:"das Wasser",
file:"das-wasser"
},

{
english:"Porpoise",
german:"der Schweinswal",
file:"der-schweinswal"
},

{
english:"Whale",
german:"der Wal",
file:"der-wal"
},

{
english:"Piggy Bank",
german:"das Sparschwein",
file:"das-sparschwein"
},

{
english:"Savings",
german:"Spar",
file:"spar"
},

{
english:"To Save",
german:"Sparen",
file:"sparen"
},

{
english:"Congratulations",
german:"Herzlichen Glückwunsch",
file:"herzlichen-gluckwunsch"
},

{
english:"End",
german:"Ende",
file:"ende"
},

{
english:"Vocabulary",
german:"Wortschatz",
file:"wortschatz"
},

{
english:"Vocabulary with Articles",
german:"Wortschatz mit Artikeln",
file:"wortschatz-mit-artikeln"
},

{
english:"The",
german:"der, die, das",
file:"der-die-das"
},

{
english:"Thanks",
german:"Danke",
file:"danke"
}

];


// ===============================
// Build the gallery
// ===============================

const gallery = document.getElementById("gallery");

let currentAudio = null;

words.forEach(word => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img
            src="images/${word.file}.png"
            alt="${word.english}">

        <div class="card-text">

            <div class="english">
                ${word.english}
            </div>

            <div class="german">
                ${word.german}
            </div>

        </div>
    `;

    card.addEventListener("click", () => {

        // Stop previous sound
        if(currentAudio){
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play new sound
        currentAudio = new Audio(
            `audio/${word.file}.mp3`
        );

        currentAudio.play();

        // little animation
        card.style.transform = "scale(.96)";

        setTimeout(()=>{
            card.style.transform = "";
        },150);

    });

    gallery.appendChild(card);

});

