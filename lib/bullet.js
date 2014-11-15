(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Bullet = function Bullet(game) {
    this.game = game;
    this.pos = game.ship.pos;
    this.RADIUS = 10;
    this.COLOR = "#000000";
    this.vel = game.ship.vel;
  
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
  
})(this);
