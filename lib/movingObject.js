(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.MovingObject = function MovingObject(optionsObj) {
    this.pos = optionsObj.pos,
    this.vel = optionsObj.vel,
    this.radius = optionsObj.radius,
    this.color = optionsObj.color,
    this.game = optionsObj.game;
  };
  
  Asteroids.MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };
  
  Asteroids.MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos)
  };
  
  Asteroids.MovingObject.prototype.isCollidedWith = function(otherObject) {
    var center1 = this.pos;
    var center2 = otherObject.pos;
    var deltaX = center1[0] - center2[0];
    var deltaY = center1[1] - center2[1];
    var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    if (otherObject instanceof Asteroids.Ship) {
      if (distance < (this.radius + otherObject.radius)) {      
        otherObject.relocate();
        return true
      } else {
        return false
      }
    }

  };
  
  
})(this);