const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    let rowSquare = document.createElement('div');
    rowSquare.setAttribute('id',`rowSquare${i}`);
    rowSquare.classList.add('row');
    rowSquare.textContent = '';
    container.appendChild(rowSquare);
}

let limit;
let squareID;
let s;


for (i = 0; i < 16; ++i) {
    let rowSquareNumber = document.querySelector(`#rowSquare${i}`);

    if (i === 0) {
        limit = 16;
        squareID = 0;
    } else if (i > 0) {
        limit = 16*i;
        console.log(limit);
        limit += 16;           
    } else if (limit === 256) {
    }

    while (squareID < limit) {
        let square = document.createElement('div');
        square.setAttribute('id',`square${squareID}`);
        square.classList.add('square');
        square.textContent = '';
        rowSquareNumber.appendChild(square);
        
        squareID++;      

        console.log(square.id);
        console.log(rowSquareNumber);
    }
}

