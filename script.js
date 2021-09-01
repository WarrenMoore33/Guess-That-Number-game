'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      // TOO HIGH
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent =
        '📈Too High! Guess Lower👇🏽';
      score--;
      document.querySelector('.score').textContent = score;

      // TOO LOW
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent =
        '📉Too Low! Guess Higher👆🏽';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
