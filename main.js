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

function createGrid(numberOfBlocks) {
    let rows = document.querySelectorAll('.row-container');
    rows.forEach(row => {
        row.remove();
    });
    document.documentElement.style.setProperty('--num-blocks', numberOfBlocks);
    for (let i = 0; i < numberOfBlocks; i++) {
        createRow(numberOfBlocks);
    }
}

createGrid(16);

const btn = document.querySelector('.resize-btn');
btn.addEventListener('click', () => {
    let newGridSize = prompt("How many boxes tall/wide? (Max 100)");
    createGrid(newGridSize);
})