const container = document.querySelector('#container');

i = '0';

function makeRowSquares(number) {
    let rowSquare = document.createElement('div');
    rowSquare.setAttribute('id',`rowSquare${number}`);
    rowSquare.textContent = '';
    rowSquare.style.flexDirection = 'row';
    container.appendChild(rowSquare);
    console.log(rowSquare)
}

function makeColumnSquares() {
    for (i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.textContent = '';
    }
}


const row = [];

for (i = 0; i < 16; i++) {
    makeRowSquares(i);
}