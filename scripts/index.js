const buttons = document.querySelectorAll("input");
const bingoCanvas = document.querySelector(".bingo-canvas");
const allDivs = bingoCanvas.querySelectorAll("div");

let arrayBtnResponse = {
  josh: "y",
  dustin: "n",
  other: "n"
};

const joshPhrases = {
  phrases: [
    "BIG BOSS",
    "Isn't that cool?",
    "5 minute break",
    "Breathin' room",
    "It's in the training kit",
    "border: 1px solid red;",
    "Isn't that awesome guys?",
    "Aha!",
    "Extra cheese",
    "Slap that there",
    "Guys, this is SO POWERFUL.",
    "Secret sauce",
    "(Josh is wearing a Lambda hat)",
    "(Any given spelling error)", // do you think that this might be too mean?
    "Isn't that crazy?",
    "Mind-blowing (or any variation thereof)",
    "Designers spent 20 hours...",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder",
    "Placeholder"
  ]
};

const dustinPhrases = {}; // To be updated when Dustin is teaching us

function newBingoCanvas() {
  // 25 for 25 divs (5 * 5) for bingo spaces
  for (i = 0; i < 25; i++) {
    let newSpace = document.createElement("div");
    newSpace.classList.add("bingo-space");
    newSpace.classList.add("space" + (i + 1));
    bingoCanvas.appendChild(newSpace);
    let insideText = document.createElement("div");
    insideText.classList.add("bingo-text");
    newSpace.appendChild(insideText);
    let text = document.getElementsByClassName("space" + (i + 1));
    if (i + 1 === 13) {
      console.log("Dude."); // Stopping point for the evening
    }
  }
}

function joshBingo() {
  arrayBtnResponse.josh = "y";
  arrayBtnResponse.dustin = "n";
  arrayBtnResponse.other = "n";
  newBingoCanvas();
}

function dustinBingo() {
  arrayBtnResponse.josh = "n";
  arrayBtnResponse.dustin = "y";
  arrayBtnResponse.other = "n";
  alert("That feature will be added once Dustin starts teaching.");
}

function otherBingo() {
  arrayBtnResponse.josh = "n";
  arrayBtnResponse.dustin = "n";
  arrayBtnResponse.other = "y";
  alert("That feature will be added once we get more instructors.");
}

function addEvent() {
  buttons.forEach(input => {
    input.addEventListener("click", () => {
      if (input.value === "Josh") {
        joshBingo();
      }
      if (input.value === "Dustin") {
        dustinBingo();
      }
      if (input.value === "Other") {
        otherBingo();
      }
    });
  });
}

addEvent();
joshBingo();
