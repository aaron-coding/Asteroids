(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.Game = function Game() {
    this.asteroids = [];
    this.bullets = [];
    this.ship = new Asteroids.Ship(this, Asteroids.Game.prototype.randomPosition());
    this.bg = new Image();
    this.bg.src = "./images/bg.gif";
  };
  
  Asteroids.Game.DIM_X = 900;
  Asteroids.Game.DIM_Y = 650;
  Asteroids.Game.NUM_ASTEROIDS = 8;
  // Asteroids.Game.BG_COLOR = "#000000";
  
  Asteroids.Game.prototype.addAsteroids = function() {
    for (var i = 1; i <= Asteroids.Game.NUM_ASTEROIDS; i++) {
      var randPos = Asteroids.Game.prototype.randomPosition();
      var ast = new Asteroids.Asteroid(this, {pos: randPos});
      this.addObj(ast);
    }
  };
  
  Asteroids.Game.prototype.addObj = function(obj){
    if (obj instanceof Asteroids.Asteroid){
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet){
      this.bullets.push(obj);
    }

  }
  
  Asteroids.Game.prototype.allObjects = function() {
    var allObjs = []
    for (var i = 0; i < this.asteroids.length; i++) {
       allObjs.push(this.asteroids[i])      
    }
    for (i = 0; i < this.bullets.length; i++) {
       allObjs.push(this.bullets[i])      
    }
    allObjs.push(this.ship)
    return allObjs
  };
  
  Asteroids.Game.prototype.randomPosition = function() {
    var x = Math.random() * Asteroids.Game.DIM_X;
    var y = Math.random() * Asteroids.Game.DIM_Y;
    return [x, y];
  };

  Asteroids.Game.prototype.draw = function(ctx) {
    // ctx.clearRect(0,0, Asteroids.Game.DIM_X, Asteroids.Game.DIM_Y);
    // ctx.fillStyle = Asteroids.Game.BG_COLOR;
    // ctx.fillRect(0, 0, Asteroids.Game.DIM_X, Asteroids.Game.DIM_Y);
    ctx.drawImage(this.bg, 0, 0);
    var ary = this.allObjects();
    ary.forEach(function(thing){
      thing.draw(ctx);
    });
  };
  
  Asteroids.Game.prototype.move = function() {
    this.allObjects().forEach(function(asteroid){
      asteroid.move();
    });
  };
  
  
  Asteroids.Game.prototype.checkCollisions = function() {
    var allObjs =  this.allObjects();
    for (var i = 0; i < allObjs.length; i++) {
      for (var j = 0; j < allObjs.length; j++) {
        if (allObjs[i] == allObjs[j]){
          continue;
        } else {
          if (allObjs[i].isCollidedWith(allObjs[j])) {
            allObjs[i].collideWith(allObjs[j])
          }
        }
      }
    }
  };
  
  Asteroids.Game.prototype.remove = function (objToRemove) {
    if (objToRemove instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(objToRemove);
      this.asteroids[idx] = new Asteroids.Asteroid(this, {});
    }
  };
  
  Asteroids.Game.prototype.step = function() {
    this.move();
    this.checkCollisions();
  };
   
  Asteroids.Game.prototype.wrap = function(pos) {
    if (pos[0] > Asteroids.Game.DIM_X){
      pos[0] -= Asteroids.Game.DIM_X;
    }
    if (pos[0] < 0){
      pos[0] += Asteroids.Game.DIM_X;
    }
    if (pos[1] > Asteroids.Game.DIM_Y){
      pos[1] -= Asteroids.Game.DIM_Y;
    }
    if (pos[1] < 0){
      pos[1] += Asteroids.Game.DIM_Y;
    }
  };
  
  Asteroids.Game.prototype.isOutOfBounds = function(pos){
      if (pos[0] > Asteroids.Game.DIM_X || pos[0] < 0){
        return true;
      }
      if (pos[1] > Asteroids.Game.DIM_Y || pos[1] < 0){
        return true;
      }
      return false;
  };
  
  
})(this);

