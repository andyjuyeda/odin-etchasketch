function createRow(numberOfColumns) {
    const container = document.querySelector('.grid-container');
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row-container')
    for (let i = 0; i < numberOfColumns; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        rowDiv.appendChild(block);
    }
    container.appendChild(rowDiv);
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        createRow(gridSize);
    }
}

createGrid(16);