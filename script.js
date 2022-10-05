'use strict';
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreHtml = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const againBtn = document.querySelector('.again');

let secretNum = Math.trunc(Math.random() * 20) + 1;
//number.textContent = secretNum;
// tomas una variable con el numero que quieras poner como limite y despues
// la bajas en tu if, se trata de que sea el mismo numero que en html y despues actualizarlo mientras cambias el contenido de tu pagina
let score = 20;
let highScore2 = 0;

checkBtn.addEventListener('click', function () {
  let guessInp = Number(document.querySelector('.guess').value);

  //Cuando la entrada no es valida
  if (!guessInp) {
    if (score > 1) {
      message.textContent = '⛔ No Number!';
      score--;
      scoreHtml.textContent = score;
    } else {
      message.textContent = '😒GAME OVER!';
      scoreHtml.textContent = 0;
    }

    //Cuando se gana el juego
  } else if (guessInp === secretNum) {
    message.textContent = '🥳 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNum;
    if (score > highScore2) {
      highScore2 = score;
      highScore.textContent = highScore2;
    }
    //cuando el numero elegido es mas alto q el numero secreto
  } else if (guessInp > secretNum) {
    if (score > 1) {
      message.textContent = '📈 To High!';
      score--;
      scoreHtml.textContent = score;
    } else {
      message.textContent = '😒GAME OVER!';
      scoreHtml.textContent = 0;
    }

    //cuando el numero elegido es mas bajo q el numero secreto
  } else if (guessInp < secretNum) {
    if (score > 1) {
      message.textContent = '📉 To Low!';
      score--;
      scoreHtml.textContent = score;

      //cuando se termina el juego
    } else {
      message.textContent = '😒GAME OVER!';
      scoreHtml.textContent = 0;
    }
  }
});

//Coding Challenge #1
/* Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color () and number width (15rem) */

againBtn.addEventListener('click', () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  scoreHtml.textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  document.querySelector('.guess').value = '';
});
