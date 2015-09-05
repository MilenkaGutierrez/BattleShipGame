/**
 * Created by milenkagutierrez on 9/1/2015.
 */
var Table = function(number){
    this.size = number;
    this.ships = [];
    this._field = [];
    var shipSize = Number;

    this._createShips();
    this._initField();
    this._placeShips(number);
    this._doShot();
}

Table.prototype._createShips = function(){
    //TODO: Number of ships should be retrieved from a constant
    var numShips = 1;
    for(var i = 0; i < numShips; i++){
        var ship = new Ship(i, 3);
        this.ships.push(ship);
    }
}

Table.prototype._initField = function (){
    for(var i = 0; i < this.size ; i++)
    {
        this._field.push('-');
    }
}

Table.prototype._placeShips = function (number){
    for (var j=0; j < this.ships.length; j++) {
        var ship = this.ships[j];

        var num = parseInt(Math.random() * (this.size - ship.size));

        for (var i = num; i < (num + ship.size); i++) {
            this._field[i] = ship.id;
        }
    }
}

Table.prototype._doShot = function(){
    var shot = window.prompt('Shot on?');
    //var place = shot.split(',');
    for(var i = 0; i < this.size; i++)
    {
        if(i == shot){
            if(this._field[i] = '-')
                this._field[i] = 'F';
            else
                this._field[i] = 'H';
        }
    }
}