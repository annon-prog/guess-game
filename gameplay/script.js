
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let guessField = document.getElementById("guessField");
  let text = document.getElementById("text");
  let guess = document.getElementById("guess");
  let submit = document.getElementById("submit");
  let guessedVal = document.getElementById("guessedVal");
  let livesDisplay = document.getElementById("scoreText");

 
  let guessOutput;
  let lives = 5;
  

  let randomInRange = (minimum, maximum) => {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  };

  let askRange = () => {
    let minVal = Number(min.value);
    let maxVal = Number(max.value);
    guessOutput = randomInRange(minVal, maxVal);

    text.innerHTML += `
      <div>
            <p>You're thinking of a number between ${minVal} and ${maxVal}...</p>
        </div>
    `;

    guess.innerHTML += `
     <div>
            <label for="guessField">Enter a guess: </label>
            <input type="text" id="guessField" class="guessField">
            <button id="guessSubmit">Guess</button>
        </div>
    `;

    let guessField = document.getElementById("guessField");
    let guessSubmit = document.getElementById("guessSubmit");

   
    guessSubmit.addEventListener("click", function () {
      checkGuess(guessField.value);
    });
  };

  let askGuess = (number) => {
    switch (true) {
      case guessOutput > number:
        guessedVal.innerHTML += `
            <div id = "results">
           <p> The value ${number} is too low. Try again.</p>
           </div>
           `;
        lives--;
        break;
      case guessOutput < number:
        guessedVal.innerHTML += `
            <div id = "results">
            <p> The value ${number} is too high. Try again. </p>
            </div>
            `;
        lives--;
        break;
      case guessOutput === number:
        guessedVal.innerHTML += `
            <div id = "results">
            <p> The value ${number} is correct. You Won!!! </p>
            </div>`;
        lives = 0;
        break;
    }
      livesDisplay.textContent = `Remaining lives: ${lives} `

      if (lives <= 0) {
        if (guessOutput !== number) {
           guessedVal.innerHTML += `
            <div id = "results">
            <p> Game over! The correct number was ${guessOutput}.</p>
            </div>
            `;
            
        }
          guessSubmit.disabled = true;
    }
  };


  let checkGuess = (result) => {
    let guessInput = Number(result);
    askGuess(guessInput);
  };

  submit.addEventListener("click", askRange);

