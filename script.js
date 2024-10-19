const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if (showingTerm === true) {
        document.getElementById('card-content').innerHTML = `<p> ${flashcards[currentIndex].term}</p>`;
    }
    else {
        document.getElementById('card-content').innerHTML = `<p> ${flashcards[currentIndex].definition}</p>`;
    }
}


function next() {
    currentIndex = (currentIndex + 1)%flashcards.length;
    displayCard()
}

function prev() {
    if (currentIndex === 0) {
        currentIndex = flashcards.length -1
    }
    else {
        currentIndex = currentIndex - 1
    }
    displayCard()
}

function flip() {
    showingTerm = !showingTerm;
    displayCard()
}




// The rest of the code you will write is apart of event listeners
let nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', next );

let prevButton = document.getElementById('prev-btn');
prevButton.addEventListener('click', prev);

let flashcardButton = document.getElementById('flashcard');
flashcardButton.addEventListener('click', flip);

document.getElementById('add-card-btn').addEventListener('click', function() {
    let myTerm = document.getElementById('new-term').value;
    let myDefinition = document.getElementById('new-definition').value;
    flashcards.push({
        term: myTerm,
        definition: myDefinition
    })
    document.getElementById("new-term").value = "";
    document.getElementById("new-definition").value = "";
})


// This line will display the card when the page is refreshed
window.onload = displayCard;
