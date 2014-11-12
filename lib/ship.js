(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.Ship = function Ship(position) {
    // this.COLOR = "#6B039C";
    this.COLOR = "#000000";
    this.RADIUS = 50;
    this.vel = [0, 0];
    this.pos = [21, 515];
    var params = {
      pos: this.pos,
      color: this.COLOR,
      radius: this.RADIUS
    }
    Asteroids.MovingObject.call(this, params)
  }
  
  Asteroids.Util.prototype.inherits(Asteroids.Ship, Asteroids.MovingObject);
})(this);
  