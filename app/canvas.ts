let controlBox : HTMLDivElement = document.querySelector('#controls');

//not sure what the hell all this is. but I assume its important
app : HTMLDivElement = document.querySelector('#app');
export let canvas = document.createElement('canvas');
export let ctx = canvas.getContext('2d');
export let width = 600;
export let height = 600;
canvas.width = width;
canvas.height = height;
app.style.width = `${width}px`;
app.style.height = `${height}px`;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

app.appendChild(canvas);

//this code makes lines with your mouse
canvas.addEventListener("mousemove", function (event) {
  if (event.buttons === 1) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
}
)

//this makes a new path everytime you click
canvas.addEventListener(
  "click",
  function () {
    ctx.beginPath();
  }
)
//this code made a color wheel and  line change color
//let colorInput = document.querySelector("#color-example"); 
let colorInput = document.createElement('input');
colorInput.type = 'color';
controlBox.appendChild(colorInput);
//new color code
colorInput.addEventListener("change", function (event) {
 let color = event.target.value;
  ctx.strokeStyle=color
  });
//text code is not really working how I want it to work
let textInput = document.createElement('input');
textInput.type = 'text';
controlBox.appendChild(textInput);

/*
  textInput.addEventListener("change", function (event) {
  text = event.target.value;
  output.innerHTML = `Typed text: ${text}`;
});*/