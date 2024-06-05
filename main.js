console.log("main.js loaded");

//vars
let points = 0;
let cost =25;
let multi =1;
//end

function add(){
  points+=multi;
  document.getElementById("points").innerHTML = 'Points: ' + points;
}
function upgrade(){
if (points >= cost) {
  points-=cost;
  multi*=2
  cost*=2
  document.getElementById("points").innerHTML = 'Points: ' + points;
  document.getElementById("multi").innerHTML = 'Multi: x' + multi;
  document.getElementById("text").innerHTML = 'Upgraded';
  document.getElementById("upgrade").innerHTML = 'Upgrade for ' + cost + ' points'
} else {
  document.getElementById("text").innerHTML = 'You need atleast ' + cost + ' to get this upgrade!';
} 
}