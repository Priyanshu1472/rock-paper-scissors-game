let results = ["Rock", "Paper", "Scissors", "Scissors"];
let win = 0;
let lose = 0;
let draw = 0;
function c_result(user) {
  let p = user
  let i = Math.floor(Math.random() * results.length);
//   console.log({ res: i, pla: p });
  let out = "";
  if (results[i] == "Rock") {
    if (p == "Paper"){
       out = "Won";
      win ++}
    else if (p == "Rock") {
      out = "Draw";
    draw ++}
    else {
      out = "Lost";
      lose ++}
  } else if (results[i] == "Paper") {
    if (p == "Scissors"){
       out = "Won";
      win ++}
    else if (p == "Paper") {
      out = "Draw";
    draw ++}
    else {
      out = "Lost";
      lose ++}
  } else if (results[i] == "Scissors") {
    if (p == "Rock"){
       out = "Won";
      win ++}
    else if (p == "Scissors") {
      out = "Draw";
    draw++}
    else {
      out = "Lost";
      lose ++}
  }
  document.getElementById("player").innerHTML = p;
  document.getElementById("output").innerHTML = out;
  document.getElementById("computer").innerHTML = results[i];
  document.getElementById("wins").innerText = win;
  document.getElementById("draws").innerText = draw;
  document.getElementById("losses").innerText = lose;
}



const button = document.querySelector("#reset");
button.addEventListener("click" , relaod);

function relaod(){
  location.reload();
}