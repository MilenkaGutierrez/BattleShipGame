/**
 * Created by RonaldButron on 9/1/2015.
 */


var Game = function(name){
    this.name = name;

    var maxNumShots = 10;
   this.players = [];

    this._createPlayers();

};

Game.prototype.start = function(){
    console.log(this.name,'game started');
    console.log('Here should start the game logic');
};

Game.prototype._createPlayers = function(){

    var numPlayers = 1;
    for(var i = 0; i < numPlayers; i++){
       var player = new Player('Player' + i);
       this.players.push(player);
    }
};

