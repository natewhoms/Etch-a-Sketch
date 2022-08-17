

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = '8' + "x" + '8';
var sizeVal = 8;
var color = "black";
var rainbow = "#" + Math.floor(Math.random()*16777215).toString(16);


function sizeValue() {
  switch (slider.value) {
    case '0':
      sizeVal = 2;
      break;
    case '1':
      sizeVal = 4;
      break;
    case '2':
      sizeVal = 8;
      break;
    case '3':
      sizeVal = 16;
      break;
    case '4':
      sizeVal = 32;
      break;
    case '5':
      sizeVal = 64;
      break;
    case '6':
      sizeVal = 128;
      break;
    default:
      sizeVal = 2;
  }
  output.innerHTML = sizeVal + "x" + sizeVal;
}

slider.oninput = function() {
  sizeValue();
}

function makeGrid(val){
  for (var i = 1; i <= (val*val); i++){
    var square = document.createElement("div");
    square.className = "square";
    square.id = i;
    document.getElementById('grid').appendChild(square);
  }
}
makeGrid(8);

function changeBlack() {
  color = "black";
  Draw();
}

function changeRainbow() {
  color = rainbow;
  DrawRainbow();
}


function Draw(){
  var square = document.getElementsByClassName('square');
  for (var i = 0; i < square.length; i++){
    square[i].addEventListener('mouseover', function(){
    rainbow =  "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    this.style.backgroundColor = color;
    });
  }
}

function clearGrid() {
  var square = document.getElementsByClassName('square');
  for (var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = "white";
  }
}


function resetGrid() {
  var grid = document.getElementById('grid');
  grid.innerHTML = "";
  
}

function changeSize() {
  resetGrid();
  var grid = document.getElementById('grid');
  makeGrid(sizeVal);
  grid.style.gridTemplateColumns = "repeat(" + sizeVal + ", 1fr)";
  grid.style.gridTemplateRows = "repeat(" + sizeVal + ", 1fr)";
  Draw();
}

function DrawRainbow(){
  var square = document.getElementsByClassName('square');
  for (var i = 0; i < square.length; i++){
    square[i].addEventListener('mouseover', function(){
    rainbow =  "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = rainbow;
    });
  }
}