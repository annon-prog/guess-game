let min = document.getElementById("min");
let max = document.getElementById("max");
let guessField = document.getElementById("guessField");
let text = document.getElementById("text");
let guess = document.getElementById("guess");
let submit = document.getElementById("submit");
let guessSubmit = document.getElementById("guessSubmit");

let guessOutput;
// let lives = 5;

let randomInRange = (minimum, maximum) => {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    guessOutput = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

let askRange = () => {
    let minVal = Number(min.value);
    let maxVal = Number(max.value);

    text.innerHTML += `
      <div>
            <p>You're thinking of a number between ${minVal} and ${maxVal}...</p>
        </div>
    `;

    guess.innerHTML += `
     <div>
            <label for="guessField">Enter a guess: </label>
            <input type="text" id="guessField" class="guessField">
            <button id="guessSubmit" type="submit">Guess</button>
        </div>

        <div>
        <p></p>
        </div>
    `;
        
}

let askGuess = number => {
    switch (true) {
        case guessOutput > number:
            // console.log("Too low");
            return false;
            break;
        case guessOutput < number:
            // console.log("Too high");
            return false;
            break;
        case guessOutput === number:
            // console.log("Correct");
            return true;
            break;    
    }
}


//TODO: Find a way to make the lives decrease and the values to become visible as they
//decrease.

//TODO: Find a way to display whether the values are too high, too low or correct.
//TODO: Find a way of making the game continuous until the lives end.

//OPTIONAL TODO: find a way to delete all other messages when showing if someone has won or lost

let checkGuess = () => {
    randomInRange(minVal, maxVal);
    let guessInput = Number(guessField.value);

    if (askGuess(guessInput) !== true) {
        checkGuess();
    } else {
        
    }
}


submit.addEventListener("click", askRange);
guessSubmit.addEventListener("click", checkGuess);