// getting elements from html
document.addEventListener('DOMContentLoaded', () => {
  const choices = ["rock", "paper", "scissors"];
  const comp_marks = document.querySelector('.comp-marks');
  const player_marks = document.querySelector('.person-marks');
  const comp_display = document.querySelector('#computer-display');
  const human_display = document.querySelector('#human-display');
  const announcement = document.querySelector('.text-result');
  let comp_score = 0;
  let human_score = 0;

  // Catching the human and computer choices
  document.querySelectorAll('.button-choose').forEach(button => {
    button.addEventListener('click', () => {
      const humanChoice = button.getAttribute('data-selection');
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      // Displaying the emojis in the emoji placeholders
      human_display.textContent = getChoice(humanChoice);
      comp_display.textContent = getChoice(computerChoice);

      // Determine the result of the game
      const result = getResult(humanChoice, computerChoice);
      updateScores(result);
      displayResult(result, humanChoice, computerChoice);
    });
  });

  // Function to get the emoji for a given choice
  function getChoice(choice) {
    if (choice === "rock") return '✊';
    if (choice === "paper") return '✋';
    if (choice === "scissors") return '✌️';
  }

  // Logic to know who wins
  function getResult(human, computer) {
    if (human === computer) return 'draw';
    if ((human === 'rock' && computer === 'scissors') ||
      (human === 'scissors' && computer === 'paper') ||
      (human === 'paper' && computer === 'rock')) {
      return 'human';
    } else {
      return 'computer';
    }
  }

  // Function to update the scores
  function updateScores(result) {
    if (result === 'human') {
      human_score++;
     player_marks.textContent = human_score;
    } else if (result === 'computer') {
      comp_score++;
      comp_marks.textContent = comp_score;
    }
  }

  // Function to display the result of the game
  function displayResult(result, humanChoice, computerChoice) {
    if (result === 'draw') {
     announcement.textContent = `It's a draw!`;
    } else if (result === 'human') {
     announcement.textContent = `Player wins! `;
    } else {
     announcement.textContent = `Computer wins!`;
    }
  }
});
