(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.Bullet = function Bullet(vel, pos, game) {
    this.SPEED = 6;
    Asteroids.MovingObject.call(this, {
      pos: [pos[0], pos[1]],
      color: Asteroids.Bullet.COLOR,
      radius: Asteroids.Bullet.RADIUS,
      vel: [game.ship.vel[0] * this.SPEED, game.ship.vel[1] * this.SPEED],
      game: game
    })    
  };
  
  Asteroids.Util.prototype.inherits(Asteroids.Bullet, Asteroids.MovingObject);
  
  Asteroids.Bullet.prototype.collideWith = function(otherObject){
    if (otherObject instanceof Asteroids.Asteroid){
      this.game.remove(otherObject);
    }
  };
  
  Asteroids.Bullet.prototype.isWrappable = function(){
    return false;
  }
  
  Asteroids.Bullet.COLOR = "#09D6B1";
  Asteroids.Bullet.RADIUS = 4;
})(this);
