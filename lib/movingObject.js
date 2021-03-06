(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.MovingObject = function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
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
    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable()) {
        this.game.wrap(this.pos)        
      } else {
        this.game.remove(this)        
      }
    }
  };
  
  Asteroids.MovingObject.prototype.collideWith = function(){
    //blank. overwrite what to do in specific subclasses
  }
  
  Asteroids.MovingObject.prototype.isCollidedWith = function(otherObject) {
    var center1 = this.pos;
    var center2 = otherObject.pos;
    var deltaX = center1[0] - center2[0];
    var deltaY = center1[1] - center2[1];
    var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    if (distance < (this.radius + otherObject.radius)) {
       return true
    } else {
       return false
    };
  };
  
  Asteroids.MovingObject.prototype.isWrappable = function(){
    return true;
  }
  
})(this);