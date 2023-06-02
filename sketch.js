//variáveis
let fundo;
let player;
let frutas = [];
let frutas01 = [];
let pontos = 0;
let sombomba;
let bomb;
let erb;
var velo = 5;
var abertura;
var somAbertura;
var iniciar = "INICIO";
var abertura1;
var sommenu;
var somgame;
var vidas = 3;
var imgvidas;
var sombomba1;


function setup() {
  //define o tamanho da tela do jogo
  createCanvas(600, 400).parent("jogo");
}

function preload() {
  //guarda as informações em variáveis
  fundo = loadImage("jogo/img/fundo.png");
  jogador = loadImage("jogo/img/michael.png");
  frutas[0] = loadImage("jogo/img/Extra.png");
  frutas[1] = loadImage("jogo/img/Objetivo.png");
  frutas[2] = loadImage("jogo/img/pizza.png");
  abertura = loadImage("jogo/img/inicio.gif")
  somAbertura = loadSound("./jogo/sons/menu.mp3");
  abertura1 = loadImage("jogo/img/inicio2.gif");
  abertura2 = loadImage("jogo/img/finalruim.gif");
  imgvidas = loadImage("jogo/img/Inimigo.png");
  abertura3 = loadImage("jogo/img/finalbom.png");


  //bomba aqui

  frutas[3] = loadImage("jogo/img/Inimigo.png");
  player = new Jogador();
  frutas01[0] = new Frutas();
  frutas01[1] = new Frutas();
  frutas01[2] = new Frutas();
  frutas01[3] = new Frutas();
  sombomba = loadSound("./jogo/sons/Music Box (Freddy_s Music) (128 kbps).mp3");
  erb = loadSound("./jogo/sons/eat.mp3");
  sommenu = loadSound("./jogo/sons/menu.mp3");
  somgame=loadSound("./jogo/sons/FNAF 2.mp3");
  somfinal=loadSound("./jogo/sons/final_bom.mp3");
  sombomba1=loadSound("./jogo/sons/bomb.mp3");

}

function draw() {

if (iniciar == "INICIO") {abrirabertura();
sombomba.stop();
sommenu.play();
}
else{
  teladois();
 if (iniciar == "JOGAR") {
  sommenu.stop(); 
  
  comecar()
 }
}
if (keyIsDown(32)&& iniciar == "INICIO"){ iniciar = "TELA";
}
if (keyIsDown(13) && iniciar == "TELA"){ iniciar = "JOGAR";
}
if (iniciar == "INICIO1") {abrirabertura1();
  if (keyIsDown(13) && iniciar == "INICIO1"){ iniciar = "INICIO";
}
}
if (iniciar == "INICIO2") {abrirabertura2();
  if (keyIsDown(13) && iniciar == "INICIO2"){ iniciar = "INICIO";
}
}
}
