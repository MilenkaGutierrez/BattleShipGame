
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
    var sizeS;
    var numShips = parseInt(cont/20)+1;
    for(var i = 0; i < numShips; i++){
        var rand = parseInt(Math.random() * 10);
        if(rand <= 3 && rand > 0)
            sizeS = 1;
        if(rand <= 6 && rand > 3)
            sizeS = 2;
        else
            sizeS = 3;
        var ship = new Ship(i, sizeS);
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

    for (var j = 0; j < this.ships.length; j++) {
        var direction = parseInt(Math.random() * 10);
        var flag = 0;

        if(this.sizev > 3 && direction > 5 && flag != 1) {
                var ship = this.ships[j];

                var num = parseInt(Math.random() * (this.size - ship.size));

                do {
                    var place0 = parseInt(Math.random() * 10);
                }while(place0>this.size);
                do {
                    var place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev-ship.size);

                for (var k = place1; k < (num + ship.size); k++) {
                    if(this._field[place0][k] === '-')
                        this._field[place0][k] = ship.id;
                    flag = 1;
                }
            }

        if(this.sizev > 3 && direction <= 5 && flag != 1) {
                var ship = this.ships[j];

                var num = parseInt(Math.random() * (this.size - ship.size));

                do {
                    var place0 = parseInt(Math.random() * 10);
                }while(place0>this.size);
                do {
                    var place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev-ship.size);

                for (var k = place1; k < (num + ship.size); k++) {
                    if(this._field[place0][k] === '-')
                        this._field[place0][k] = ship.id;
                    flag = 1;
                }

        }

        if(this.size > 3 && direction > 5 && flag != 1) {
                var ship = this.ships[j];

                var num = parseInt(Math.random() * (this.size - ship.size));

                do {
                    var place0 = parseInt(Math.random() * 10);
                }while(place0>=this.size-ship.size);
                do {
                    var place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev);

                for (var k = place0; k < (num + ship.size); k++) {
                    if(this._field[k][place1] === '-')
                        this._field[k][place1] = ship.id;
                        flag = 1;
                }

        }

        if(this.size > 3 && direction <= 5 && flag != 1) {
                var ship = this.ships[j];

                var num = parseInt(Math.random() * (this.size - ship.size));

                do {
                    var place0 = parseInt(Math.random() * 10);
                }while(place0>=this.size-ship.size);
                do {
                    var place1 = parseInt(Math.random() * 10);
                }while(place1>=this.sizev);

                for (var k = place0; k < (num + ship.size); k++) {
                    if(this._field[k][place1] === '-')
                        this._field[k][place1] = ship.id;
                        flag = 1;
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
        if(this._field[i][j] == 'F' || this._field[i][j] == 'H')
            return 2;

        if (this._field[i][j] == '-') {
            this._field[i][j] = 'F';
            console.log("Shot failed. position: ",place);
        }
        else {
            var idShip = this._field[i][j];
            var kill = 0;
            this._field[i][j] = 'H';
            console.log("Good shot!! position: ",place);

            for(var n = 0; n < this.size ; n++)
            {
                for(var m = 0; m < this.sizev ; m++) {
                    if(this._field[n][m] == idShip)
                        kill=1;
                }
            }

            if(kill == 0)
                console.log("Sunked ship number ", idShip, "!!");
        }
        return 1;
    }
    else {
        console.log('Invalid shot');
        return 0;
    }
}