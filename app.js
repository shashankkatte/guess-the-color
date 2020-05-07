let colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];

let squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
let colorDisplay = document.querySelector('#colorDisplay');

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
        alert('Correct!');
    } else {
        alert ('Try again!')
    }
  });
}
