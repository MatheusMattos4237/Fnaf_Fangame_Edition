class Jogador {
    //classe utilizada para definir o tamanho, velocidade e movimentação do jogador
  
    constructor() {
      this.imagem = loadImage("jogo/img/michael.png");
      this.posX = 275;
      this.posY = 330;
      this.velocidade = 15;
      this.largura = 80;
      this.altura = 70;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
    mova() {
      //permite a movimentação do jogador
  
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
  
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
  
      //posição das frutas que caem
  
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
    }
  }