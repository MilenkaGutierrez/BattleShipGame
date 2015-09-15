
var Game = function(name){
    this.name = name;

    var maxNumShots = 10;
    this.players = [];

    this._createPlayers();

}

Game.prototype.start = function(){
    console.log(this.name,'game started');
    console.log('Here should start the game logic');

    do {
        var size = window.prompt('Table size (Min 8 cells)? eg. 4,6');
        var num = size.split(',');
    }while((num[0]*num[1])<8);

    this.players[0].createTable(num[0], num[1]);

    var numShots = 0;
    var maxShots = parseInt((num[0]*num[1])/3);

    console.log("You have ",maxShots," shots");

    do{
        var pos = this.players[0].table._doShot();

        if(pos == 1)
            numShots++;

        if(pos == 2)
            console.log("Oops, you already hit that location");

        console.log("You still have ",maxShots-numShots," shots");
    }while(numShots < maxShots);

    console.log('The game finished');
    console.log('TMP: table', this.players[0].table._field);
}

//window.confirm() para aceptar o rechazar
//window.prompt() para introducir valores desde consola

Game.prototype._createPlayers = function(){
    var numPlayers = 1;
    for(var i = 0; i < numPlayers; i++){
        var player = new Player('Player' + i);
        this.players.push(player);
    }
}