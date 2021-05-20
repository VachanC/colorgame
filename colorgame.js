let numberOfSqaures = 6;
let colors =[];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButton = document.querySelectorAll(".mode");

init();

function init(){
  setModeButtons();
  setSquares();
  reset();

}

function reset(){
  colors = generateRandomColors(numberOfSqaures);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  for(let i = 0; i<squares.length; i++){
    if(colors[i]){
    squares[i].style.display = "block";  
    squares[i].style.background = colors[i];
  }else{
    squares[i].style.display = "none";
  }}
  h1.style.background = "cornflowerblue";

}


resetButton.addEventListener("click", () =>{
  reset();
})


function changecolor(color){
  for(let i = 0; i < squares.length; i++){
    squares[i].style.background = pickedColor;
  }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  let arr =[];
  for(let i = 0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"; 

}

function setModeButtons(){
  for(let i = 0;i < modeButton.length;i++){
    modeButton[i].addEventListener("click", () =>{
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      modeButton[i].classList.add("selected");
  
      modeButton[i].textContent === "Easy" ? numberOfSqaures = 3 : numberOfSqaures = 6;
      reset(); 
    });
  }
}

function setSquares(){
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
      let clickedColor = squares[i].style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        h1.style.background = clickedColor;  
        changecolor(clickedColor);
      }
      else{
        squares[i].style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

