(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Asteroid = function Asteroid(game, posObj) {
    posObj.pos = posObj.pos || game.randomPosition();
    this.pos = posObj.pos;
    this.game = game;
<<<<<<< HEAD
    this.RADIUS = 25;
    this.COLOR = "#A69214";
  
=======

    this.COLOR = "#A69214";
    this.asteroidImg = new Image();
    this.asteroidImg.src = "./lib/asteroid.png"
    this.width = 50;
    this.height = 50;
    this.RADIUS = this.width/2;
    
>>>>>>> master
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
  
<<<<<<< HEAD
=======
  Asteroids.Asteroid.prototype.draw = function(ctx) {
    //Use radius as offset to center image where regular circle would be
    ctx.drawImage(this.asteroidImg, 1, 1, 171, 155, this.pos[0] - this.radius, this.pos[1] - this.radius, this.width, this.height )
    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.arc(
    //   this.pos[0],
    //   this.pos[1],
    //   this.radius,
    //   0,
    //   2 * Math.PI,
    //   false
    // );
    // ctx.fill();
  };
  

  
>>>>>>> master
})(this);
