
function randomInteger() {
    return Math.round((Math.random()*25.5)*10);
}

function minusTenth (original, tenth) {
        return original - tenth;
}



function drawGrid(num) {
    const container = document.querySelector('#container');
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
        } else if (limit === (num * num + 1)) {   
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
    for (j = 1; j <= (userSquareCount * userSquareCount); j++) {
        let squareNumber = document.querySelector(`#square${j}`);
        squareNumber.addEventListener('mouseover', (e) => {
            if (color === 'random') {
                e.target.style.background = 'rgb(' + (r = randomInteger()) + ',' + (g = randomInteger()) + ',' + (b = randomInteger()) + ')';
            } else if (color === 'darkeningEffect') {
                let colorTest = r + g + b;
                if (colorTest > 0) {
                    colorTest = 'rgb(' + (r = minusTenth(r, rtenth)) + ',' + (g = minusTenth(g, gtenth)) + ',' + (b = minusTenth(b, btenth)) + ')';
                    e.target.style.background = colorTest;
                    console.log(colorTest);            
                } else {
                    e.target.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';;
                }       
            } else {
                e.target.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';;            
            }    
        });
    }
}


const colorOptions = document.querySelector('#colorOptions');
let color;
let r = 0;
let g = 0;
let b = 0; 
colorOptions.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'red':
            color = 0;
            r = 255;
            g = 0;
            b = 0;
            break;
        case 'green':
            color = 0;
            r = 0;
            g = 255;
            b = 0;
            break;
        case 'blue':
            color = 0;
            r = 0;
            g = 0;
            b = 255;
            break;
        case 'random':
            color = 'random'
            break;
        case 'darkeningEffect':       
            rtenth = r * .1;
            gtenth = g * .1;
            btenth = b * .1;
            color = 'darkeningEffect'
            break;
        case 'Reset':
            container.removeChild(sketchBox);
            r = 0;
            g = 0;
            b = 0;
            color = 0;
            drawGrid(userSquareCount);
            break;
    }

})

let userSquareCount = 16;
drawGrid(userSquareCount);

const userSquareBtn = document.querySelector('button');
userSquareBtn.addEventListener('click', () => {
    userSquareCount = prompt('Any number up to 100');
    while (userSquareCount > 100) {
        userSquareCount = parseInt(prompt('Any number up to 100'));
    }
    container.removeChild(sketchBox);
    drawGrid(userSquareCount);
});


