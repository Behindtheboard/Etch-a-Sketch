const container = document.querySelector('#container');

function squareInput(num) {
    
    const sketchBox = document.createElement('div');
    sketchBox.setAttribute('id','sketchBox');
    container.appendChild(sketchBox);

    for (i = 1; i <= num; i++) {
    let rowSquare = document.createElement('div');
    rowSquare.setAttribute('id',`rowSquare${i}`);
    rowSquare.classList.add('row');
    rowSquare.textContent = '';
    sketchBox.appendChild(rowSquare);
    }

    let limit;
    let squareID;

    for (i = 1; i <= num; i++) {
        let rowSquareNumber = document.querySelector(`#rowSquare${i}`);        
        
        if (i === 1) {
            limit = num;
            squareID = 1;
        } else if (i > 1) {
            limit = num*i;                    
        } else if (limit === (num * num)) {   
        }

        while (squareID <= limit) {
            let square = document.createElement('div');
            square.setAttribute('id',`square${squareID}`);
            square.classList.add('square');
            square.textContent = '';
            rowSquareNumber.appendChild(square);    
            
            squareID++;      
        }
    }

    for (j = 1; j < (num * num); j++) {
        let squareNumber = document.querySelector(`#square${j}`);
        squareNumber.addEventListener('mouseover', (e) => {
            e.target.style.background = 'blue';
        });
    }
}

let userSquareCount;

const userSquareBtn = document.querySelector('button');
userSquareBtn.addEventListener('click', () => {
    userSquareCount = prompt('Any number up to 100');
    while (userSquareCount > 100) {
        userSquareCount = prompt('Any number up to 100');
    }
    container.removeChild(sketchBox);
    squareInput(userSquareCount);
});

if (userSquareCount === undefined) {
    userSquareCount = 16;
    squareInput(userSquareCount);
} 
