(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Asteroid = function Asteroid(game, posObj) {
    posObj.pos = posObj.pos || game.randomPosition();
    this.asteroidImg = new Image();
    this.asteroidImg.src = "./lib/asteroid.png"
    this.width = 50;
    this.height = 50;
    Asteroids.MovingObject.call(this, {
      pos: posObj.pos,
      radius: this.width/2,
      game: game,
      vel: Asteroids.Util.prototype.randomVec(3)
    });
  };
  
  Asteroids.Util.prototype.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
  
  Asteroids.Asteroid.prototype.collideWith = function(otherObject){
    if (otherObject instanceof Asteroids.Ship){
      otherObject.relocate();
    }
  };
  
  Asteroids.Asteroid.prototype.draw = function(ctx) {
    //Use radius as offset to center image where regular circle would be
    ctx.drawImage(this.asteroidImg, 1, 1, 171, 155, this.pos[0] - this.radius, this.pos[1] - this.radius, this.width, this.height );
  };

})(this);
