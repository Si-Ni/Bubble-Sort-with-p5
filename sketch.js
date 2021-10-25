let numbers = [];
let tausch;
let fr = 120;
let j = 0;
zaehler = 0;

for(let i = 0; i < 120; i++) {
  numbers.push(Math.floor(Math.random() * 450)+50);
}

function setup() {
  createCanvas(1200, 600);
  frameRate(fr);
}

function draw() {
  //bubble Sort Algorithm
  if(numbers[j] > numbers[j+1]){
    let hilfe = numbers[j]
    numbers[j] = numbers[j+1]
    numbers[j+1] = hilfe
    tausch++;
  }
  j++;
  if(j === (numbers.length-1)-zaehler && tausch === 0){
    noLoop();
  }
  if(j === (numbers.length-1)-zaehler){
    j = 0;
    zaehler++;
    tausch = 0;
  } 

  background(200);
  let x = 0;
  for(let i = 0; i < numbers.length; i++){
    stroke(255, 0, 0)
    rect(x, 0, 5, numbers[i]);
    x = x + 10;
  }
}
