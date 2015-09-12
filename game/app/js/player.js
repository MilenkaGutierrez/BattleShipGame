var Player = function(name){
    this.name = name;
    this.score = 0;
    this.numShots = 0;
    this.table;
}

Player.prototype.createTable = function(number, number2)
{
    this.table = new Table(number, number2);
}