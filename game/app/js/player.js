/**
 * Created by milenkagutierrez on 9/1/2015.
 */
var Player = function(name){
    this.name = name;
    this.score = 0;
    this.numShots = 0;
    //TODO: Table should be read from a constant
    this.table = new Table(8);
}