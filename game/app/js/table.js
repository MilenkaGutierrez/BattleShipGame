
var Table = function(number, number2){
    this.size = number;
    this.sizev = number2;
    this.ships = [];
    this._field = new Array(number);
    for (i = 0; i < number; i++){
        this._field[i] = new Array(number2);
    }

    this._createShips();
    this._initField();
    this._placeShips();
    this._doShot();
}

Table.prototype._createShips = function(){

    var cont = this.size * this.sizev;
    var numShips = parseInt(cont/20)+1;
    for(var i = 0; i <= numShips; i++){
        var ship = new Ship(i, 3);
        this.ships.push(ship);
    }
}

Table.prototype._initField = function (){
    for(var i = 0; i < this.size ; i++)
    {
        for(var j = 0; j < this.sizev ; j++) {
            this._field[i][j] = '-';
        }
    }
}

Table.prototype._placeShips = function (){

    if(this.sizev > 3) {
        for (var j = 0; j < this.ships.length; j++) {
            var ship = this.ships[j];

            var num = parseInt(Math.random() * (this.size - ship.size));

            do {
                var place0 = parseInt(Math.random()) * 10;
            }while(place0>this.size);
            do {
                var place1 = parseInt(Math.random()) * 10;
            }while(place1>=this.sizev-ship.size);

            for (var k = place1; k < (num + ship.size); k++) {
                this._field[place0][k] = ship.id;
            }
        }
    }

    if(this.size > 3) {
        for (var j = 0; j < this.ships.length; j++) {
            var ship = this.ships[j];

            var num = parseInt(Math.random() * (this.size - ship.size));

            do {
                var place0 = parseInt(Math.random()) * 10;
            }while(place0>=this.size-ship.size);
            do {
                var place1 = parseInt(Math.random()) * 10;
            }while(place1>=this.sizev);

            for (var k = place0; k < (num + ship.size); k++) {
                this._field[k][place1] = ship.id;
            }
        }
    }
}

Table.prototype._doShot = function(){
    var shot = window.prompt('Shot on?');
    var place = shot.split(',');
    var i = place[0]-1;
    var j = place[1]-1;
    if(i<this.size && j<this.sizev) {
        if (this._field[i][j] = '-')
            this._field[i][j] = 'F';
        else
            this._field[i][j] = 'H';
        return 1;
    }
    else {
        console.log('Invalid shot');
        return 0;
    }
}