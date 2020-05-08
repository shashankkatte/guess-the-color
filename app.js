let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let messageDisplay = document.querySelector('#message');
let resetButton = document.querySelector('#reset');
let header = document.querySelector('h1');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (let index = 0; index < modeButtons.length; index++) {
    //   Mode buttons event listeners
    modeButtons[index].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      numberOfSquares = this.textContent === 'Easy' ? 3 : 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (let index = 0; index < squares.length; index++) {
    // Add Event listeners to squares
    squares[index].addEventListener('click', function () {
      // Grab color of picked square
      let clickedColor = this.style.backgroundColor;

      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'You Win!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
        header.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again!';
      }
    });
  }
}

function reset() {
  // Generate all new colors
  colors = generateRandomColors(numberOfSquares);
  // Pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  // change colors of squares
  for (let index = 0; index < squares.length; index++) {
    if (colors[index]) {
      squares[index].style.display = 'block';
      squares[index].style.backgroundColor = colors[index];
    } else {
      squares[index].style.display = 'none';
    }
  }
  resetButton.textContent = 'New colors!';
  header.style.background = 'steelblue';
}

resetButton.addEventListener('click', function () {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (let index = 0; index < colors.length; index++) {
    // change each color to match the given color
    squares[index].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // add num random colors to array
  for (let index = 0; index < num; index++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return the array
  return arr;
}

function randomColor() {
  // pick a "red" from 0-255
  let red = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  let green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
