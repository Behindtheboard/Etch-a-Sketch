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


for (i = 0; i < 16; i++) {
    let rowSquareNumber = document.querySelector(`#rowSquare${i}`);

 

    switch (i) {
        case 0:
            limit = 16;
            squareID = 0;
            break;
        case 1:
            limit = 32;
            squareID = 16;
            break;
        case 2:
            limit = 48;
            squareID = 32;
            break;
        case 3:
            limit = 64;
            squareID = 48;
            break;
        case 4:
            limit = 80;
            squareID = 64;
            break;
        case 5:
            limit = 96;
            squareID = 80;
            break;
        case 6:
            limit = 112;
            squareID = 96;
            break;        
        case 7:
            limit = 128;
            squareID = 112;
            break;
        case 8:
            limit = 144;
            squareID = 128;
            break;
        case 9:
            limit = 160;
            squareID = 144;
            break;
        case 10:
            limit = 176;
            squareID = 160;
            break;
        case 11:
            limit = 192;
            squareID = 176;
            break;
        case 12:
            limit = 208;
            squareID = 192;
            break;
        case 13:
            limit = 224;
            squareID = 208;
            break;
        case 14:
            limit = 240;
            squareID = 224;
            break;
        case 15:
            limit = 256;
            squareID = 240;
            break;
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

