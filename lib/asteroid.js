(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Asteroid = function Asteroid(game, posObj) {
    posObj.pos = posObj.pos || game.randomPosition();
    this.pos = posObj.pos;
    this.game = game;
    this.RADIUS = 30;
    this.COLOR = "#000000";
  
    var params = {
      pos: this.pos,
      color: this.COLOR,
      radius: this.RADIUS,
      game: game,
      vel: Asteroids.Util.prototype.randomVec(3)
    }
    Asteroids.MovingObject.call(this, params)
  };
  
  Asteroids.Util.prototype.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
  
  Asteroids.Asteroid.prototype.collideWith = function(otherObject){
    if (otherObject instanceof Asteroids.Ship){
      otherObject.relocate();
    }
  };
  
})(this);
