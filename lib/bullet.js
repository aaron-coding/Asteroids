(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.Bullet = function Bullet(game) {
    this.game = game;

    this.pos = [this.game.ship.pos[0], this.game.ship.pos[1]];
    this.RADIUS = 4;
    this.COLOR = "#09D6B1";
    this.SPEED = 6
    this.vel = [this.game.ship.vel[0] * this.SPEED, this.game.ship.vel[1] * this.SPEED]
    if (this.vel[0] === 0 && this.vel[1] === 0) {
      return;
    } //split this up so as to avoid pointing to original ship's vel
    
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
  
  // Asteroids.Asteroid.prototype.collideWith = function(otherObject){
  //   if (otherObject instanceof Asteroids.Ship){
  //     otherObject.relocate();
  //   }
  // };
  
  Asteroids.Bullet.prototype.isWrappable = function(){
    return false;
  }
  
})(this);
