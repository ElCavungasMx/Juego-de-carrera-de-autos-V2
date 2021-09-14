class form {

    constructor(){}
  display(){

    var title = createElement('h2');
    title.html("Juego de carreras de autos");
    title.position(130,10);

    var input = createInput("nombre");
    input.position(200,200);

    var button = createButton('PLAY');
    button.position(200,150);
    button.mousePressed(function(){

    input.hide();
    button.hide();

    var nombre = input.value();

    playercount+=1;

    jugador.update(nombre);
    jugador.updateCount(playercount);

    var saludo = createElement('h3');
    saludo.html("Bienvenido "+nombre);
    saludo.position(200,100);
    })

  }
}