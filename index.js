// get Canvas Context from div
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

// Grab shake button
const shakeButton = document.querySelector('.shake');

// setup canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;