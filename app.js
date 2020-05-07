let colors = generateRandomColors(6);

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let header = document.querySelector('h1');


colorDisplay.textContent = pickedColor;

for (let index = 0; index < squares.length; index++) {
  // Add initial colors to quares
  squares[index].style.backgroundColor = colors[index];

  // Add Event listeners to squares
  squares[index].addEventListener('click', function () {
    // Grab color of picked square
    let clickedColor = this.style.backgroundColor;

    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'You got it Right!';
      changeColors(clickedColor);
      header.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again!';
    }
  });
}

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
