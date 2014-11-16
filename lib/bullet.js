(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.Bullet = function Bullet(game) {
    this.game = game;
    this.pos = [this.game.ship.pos[0], this.game.ship.pos[1]];
    this.RADIUS = 10;
    this.COLOR = "#000000";
    this.vel = [this.game.ship.vel[0], this.game.ship.vel[1]]; //split this up so as to avoid pointing to ship's vel
    var params = {
      pos: this.pos,
      color: this.COLOR,
      radius: this.RADIUS,
      vel: this.vel,
      game: this.game
    }
    Asteroids.MovingObject.call(this, params)
  };
  
  Asteroids.Util.prototype.inherits(Asteroids.Bullet, Asteroids.MovingObject);
  
  Asteroids.Bullet.prototype.collideWith = function(otherObject){
    if (otherObject instanceof Asteroids.Asteroid){
      this.game.remove(otherObject);
    }
  };
  
})(this);
