// get Canvas Context from div
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

// Grab shake button
const shakeButton = document.querySelector('.shake');
// add a true constant variable, won't be changing
const MOVE_AMOUNT = 10;
// setup canvas for drawing
// use top level variables for math
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
    console.log(key);

    ctx.beginPath();
    // move to where it used to be
    ctx.moveTo(x,y);

    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
    
        default:
            break;
    }

    ctx.lineTo(x,y);
    ctx.stroke();
}

// handler function for the keys
function handleKey(e) {
    const arrowKey = e.key
    if (arrowKey.includes('Arrow')) {
        e.preventDefault()
        draw({ key: arrowKey });
    }
};
// listen for arrow keys, can listen on anything. Site Wide === window
// pass in a reference to handleKey function above, as second callback parameter
window.addEventListener('keydown', handleKey);
