class Frutas {
    //classe das frutas, que define o tamanho, velocidade e a posição que caem
    constructor() {
      this.imagem = frutas[int(random(0, 3.9))];
      this.posX = random(590, 0);
      this.posY = 30;
      this.velocidade = random(1, velo);
      this.largura = 40;
      this.altura = 40;
      this.yInicial = this.posY - this.altura;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
    }
  
    mova() {
      //movimentação dos itens verticalmente
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }