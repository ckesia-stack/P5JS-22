function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  ativaJogo()
  desenhaJogadores()
  desenhaLinhaDeChegada()
  verificarVencedor()
}
function ativaJogo(){
  if(focused == true){
    background(220);
  } else {
    background("rgb(61,248,61)")
  }
}

function desenhaJogadores() {
  textSize(40)
  text("🥰", xJogador1, 100)
  text("🤩", xJogador2, 300)
}
function desenhaLinhaDeChegada(){
  fill("white")
  rect(350, 0, 10, 400)
  fill("black")
  for(let yAtual = 0; yAtual<400; yAtual+=20) { rect(350,yAtual, 10, 10)
  }
}

 function verificarVencedor() { 
 if(xJogador>350) {
 text("Jogador 1 venceu!", 20, 200)
 noLoop();
     }
if (xJogador2 > 350) {
text("Jogador 2 venceu!", 20, 200);
noLoop();
}  
}

function keyRealeased(){
  if(key == "a"){
  xJogador1 += random(20);
  }
  if(key == "s"){
  xJogador2 += random(20);  
  }
}
  
  

  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 20, 200);
    noLoop();
  }
