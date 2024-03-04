const container = document.querySelector('#container');

let userSquareCount = 16;

const userSquareNum = document.querySelector('button');
userSquareNum.addEventListener('click', () => {
    userSquareCount = prompt('any number up to 100');
})

for (i = 0; i < userSquareCount; i++) {
    let rowSquare = document.createElement('div');
    rowSquare.setAttribute('id',`rowSquare${i}`);
    rowSquare.classList.add('row');
    rowSquare.textContent = '';
    container.appendChild(rowSquare);
}

let limit;
let squareID;

for (i = 0; i < userSquareCount; ++i) {
    let rowSquareNumber = document.querySelector(`#rowSquare${i}`);

    if (i === 0) {
        limit = 16;
        squareID = 0;
    } else if (i > 0) {
        limit = 16*i;
        limit += 16;           
    } else if (limit === (userSquareCount * userSquareCount)) {
    }

    while (squareID < limit) {
        let square = document.createElement('div');
        square.setAttribute('id',`square${squareID}`);
        square.classList.add('square');
        square.textContent = '';
        rowSquareNumber.appendChild(square);    
        
        squareID++;      
    }
}

for (j = 0; j < (userSquareCount * userSquareCount); j++) {
    let squareNumber = document.querySelector(`#square${j}`);
    squareNumber.addEventListener('mouseover', (e) => {
        e.target.style.background = 'blue';
    });
}

