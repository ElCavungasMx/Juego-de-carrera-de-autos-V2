var gamestate;
var database;
var playercount;
var formulario;
var game;
var jugador;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    }
