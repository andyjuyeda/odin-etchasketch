function createRow(numberOfColumns) {
  const container = document.querySelector(".grid-container");
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row-container");
  for (let i = 0; i < numberOfColumns; i++) {
    let block = document.createElement("div");
    block.classList.add("block");
    let red = getRandomIntInclusive(0, 255);
    let green = getRandomIntInclusive(0, 255);
    let blue = getRandomIntInclusive(0, 255);
    block.style.backgroundColor =
      "rgba(" + red + ", " + green + ", " + blue + ", 0)"; // initial opacity is 0
    block.dataset.opacity = 0; // store opacity as a data attribute
    block.addEventListener("mouseover", () => {
      let currentOpacity = Number(block.dataset.opacity);
      let newOpacity = Math.min(1, currentOpacity + 0.1); // increase opacity by 0.1, but don't go above 1
      block.style.backgroundColor =
        "rgba(" + red + ", " + green + ", " + blue + ", " + newOpacity + ")";
      block.dataset.opacity = newOpacity; // update stored opacity
    });
    rowDiv.appendChild(block);
  }
  container.appendChild(rowDiv);
}

function createGrid(numberOfBlocks) {
  let rows = document.querySelectorAll(".row-container");
  rows.forEach((row) => {
    row.remove();
  });
  document.documentElement.style.setProperty("--num-blocks", numberOfBlocks);
  for (let i = 0; i < numberOfBlocks; i++) {
    createRow(numberOfBlocks);
  }
}

createGrid(16);

const btn = document.querySelector(".resize-btn");
btn.addEventListener("click", () => {
  let newGridSize = prompt("How many boxes tall/wide? (Max 100)");
  newGridSize = parseInt(newGridSize); // convert the input to a number
  if (isNaN(newGridSize) || newGridSize <= 0) {
    alert("Please enter a valid number greater than 0");
  } else {
    newGridSize = Math.min(100, newGridSize); // if the input is greater than 100, set it to 100
    createGrid(newGridSize);
  }
});


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
