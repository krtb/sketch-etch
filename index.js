// get Canvas Context from div
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

// Grab shake button
const shakeButton = document.querySelector('.shake');

// setup canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();