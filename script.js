const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    let rowSquare = document.createElement('div');
    rowSquare.setAttribute('id',`rowSquare${i}`);
    rowSquare.textContent = '';
    rowSquare.style.flexDirection = 'row';
    container.appendChild(rowSquare);
    console.log(rowSquare)
}

for (i = 0; i < 16; i++) {
    let rowSquareNumber = document.querySelector(`#rowSquare${i}`);
    console.log(rowSquareNumber)
    
    for (j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.textContent = '';
        rowSquareNumber.appendChild(square);
        console.log(rowSquareNumber);
    }
}