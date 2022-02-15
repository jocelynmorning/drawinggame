import {ctx, canvas} from './canvas';
import {makeButton} from './controls';
/*
let sampleButton = makeButton("Draw Semicircle");

sampleButton.addEventListener(
  "click",
  function () {
    ctx.beginPath();
    ctx.arc(100,100,100,0,Math.PI);
    ctx.stroke();
  }
)*/

let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    )
  }
)