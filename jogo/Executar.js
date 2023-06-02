function comecar(){
      //mostra na tela as informações guardadas nas variáveis

  background(fundo);
  player.mova();
  frutas01[0].mova();
  for (let i = 0; i < frutas01.length; i++) {
    frutas01[i].mova();
    if (frutas01[i].posY > 600) {
      frutas01[i] = new Frutas(frutas01[i].posY);
    }

    // condição da pontuação

    if (
      player.xInicial < frutas01[i].xFinal &&
      player.xFinal > frutas01[i].xInicial &&
      player.yInicial < frutas01[i].yFinal &&
      player.yFinal > frutas01[i].yInicial
    ) {
      
      if (frutas01[i].imagem == frutas[3]) {
        vidas --;
        frutas01[i] = new Frutas(frutas01[i].posY);
        pontos = 0;
        velo = 5;
        sombomba1.play();
      } else {
        frutas01[i] = new Frutas(frutas01[i].posY);
        pontos++;
        velo += 1;
        erb.play();
      }
      if (vidas == 0){
        iniciar = "INICIO1";
        sombomba.play();
        vidas = 3;
      }
      if(pontos == 30){
        iniciar = "INICIO2";
        somfinal.play();
        vidas = 3;
      }

      frutas01[i] = new Frutas(frutas01[i].posY);
    }

    //texto da pontuação na tela
    fill(255, 255, 255);
    text("Score = " + pontos, 530, 20);
    fill(255, 255, 255);
    text("Lifes = " + vidas, 230, 20);
  }
}