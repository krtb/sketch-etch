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
ctx.lineWidth = 50;

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
    console.log(key);

    // increment hue color by 1 on stroke
    hue += 10;
    ctx.strokeStyle = `hsl(${Math.random() * 360},100%, 50%)`;

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

// clear screen on Shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0,0,width,height);
    // use 3rd argument for addEventListener, options
    // once === unbinds event listener once complete
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake')
    }, {once: true})
}
 shakeButton.addEventListener('click', clearCanvas);