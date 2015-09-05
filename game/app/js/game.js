
var Game = function(name){
    this.name = name;
    //TODO: number of shots should be retrieved from a constant
    var maxNumShots = 10;
    this.players = [];

    this._createPlayers();

}

Game.prototype.start = function(){
    console.log(this.name,'game started');
    console.log('Here should start the game logic');
    console.log('TMP: table', this.players[0].table._field);

    var numShots = 0
    do{
        var pos = this._doShot();
        numShots++;
        console.log('TMP: table');
        console.log(this.players[0].table._field);
    }while(numShots < 3);
}

//window.confirm() para aceptar o rechazar
//window.prompt() para introducir valores desde consola

Game.prototype._createPlayers = function(){
    //TODO: Number of players should be retrieved from a constant
    var numPlayers = 1;
    for(var i = 0; i < numPlayers; i++){
        var player = new Player('Player' + i);
        this.players.push(player);
    }
}