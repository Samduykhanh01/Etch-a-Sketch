let numSquare = 16
const gridContainer = document.querySelector(".grid-container")
const grid = document.querySelector(".grid")
const numSquareButton = document.querySelector("button.numSquareButton")
const resetButton = document.querySelector("button.resetButton")

console.log("This is grid: " + grid)

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Document load event activated!")
  drawGrid();
});


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
  removeGridChildren()
  // gridContainer.appendChild(grid)
  for (let i = 0; i < numSquare; i++) {
    const row = document.createElement("div")
    row.className = "row"

    for (let j = 0; j < numSquare; j++) {
      const square = document.createElement("div")
      square.className = "square";

      square.addEventListener("mousedown", (event) => {
        console.log("Square mouse down")
        square.style.backgroundColor = "red"
      });

      document.addEventListener("mousedown", (eventDocument) => {
        console.log("Document mouse down")
        square.addEventListener("mouseover", (eventSquare) => {
          square.style.backgroundColor = "red"
        })
      });

      document.addEventListener("mouseup", (event) => {
        console.log("Document mouse up")
      })

      row.appendChild(square)
    }

    grid.appendChild(row)
  }
  // fill()
}

function removeGridChildren() {
  grid.querySelectorAll('*').forEach(n => n.remove());
}

// numSquareButton.addEventListener("click", (event) => {
//   numSquare = prompt("How many squares per side?")
//   console.log("N = " + numSquare);
// });

// resetButton.addEventListener("click", (event) => {
//   numSquare = 16
//   console.log("N has been reset to " + numSquare);
// });
// fill()

// function fill() {
//   const squares = document.querySelectorAll(".square")
//   console.log("Total number of squares = " + squares.length)
//   squares.forEach((square) => {
//     square.addEventListener("click", (event) => {
//       console.log("Square is clicked!")
//     })
//   })
// }



