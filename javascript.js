let numSquare = 16
const grid = document.querySelector(".grid")
const numSquareButton = document.querySelector("button.numSquareButton")
const resetButton = document.querySelector("button.resetButton")

console.log("This is grid: " + grid)


const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (button.className) {
      case "numSquareButton":
        do {
          numSquare = prompt("How many squares per side?")
        } while (numSquare < 2)
        console.log("N = " + numSquare);
        break;

      case "resetButton":
        numSquare = 16
        console.log("N has been reset to " + numSquare);
        break;
    }

    drawGrid();
  });
});

function drawGrid() {
  for (let i = 0; i < numSquare; i++) {
    for (let j = 0; j < numSquare; j++) {

      const square = document.createElement("div")
      square.className = "square";
    }
  }
}

// numSquareButton.addEventListener("click", (event) => {
//   numSquare = prompt("How many squares per side?")
//   console.log("N = " + numSquare);
// });

// resetButton.addEventListener("click", (event) => {
//   numSquare = 16
//   console.log("N has been reset to " + numSquare);
// });



