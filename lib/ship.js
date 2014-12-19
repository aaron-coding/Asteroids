(function (myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  var TO_RADIANS = Math.PI/180;   

  Asteroids.Ship = function Ship(game, position) {
    this.COLOR = "#09D6B1";
    this.RADIUS = 25;
    this.vel = [0, 0];
    this.pos = position;
    this.game = game;
    this.shipImg = new Image();
    this.shipImg.src = "./lib/ship.png";
    this.width = 50;
    this.height = 50;
    this.angle = 0;
    

    
    var params = {
      pos: this.pos,
      color: this.COLOR,
      radius: this.RADIUS,
      vel: this.vel,
      game: this.game
    }
    Asteroids.MovingObject.call(this, params)    
  };

  Asteroids.Util.prototype.inherits(Asteroids.Ship, Asteroids.MovingObject);

  
  Asteroids.Ship.prototype.relocate = function(){
    this.pos = [Math.floor(Math.random() * Asteroids.Game.DIM_X), 
          Math.floor(Math.random() * Asteroids.Game.DIM_Y)]
    this.vel = [0, 0]
  };
  
    
  Asteroids.Ship.prototype.power = function(event){
    event.preventDefault();
    if (event instanceof KeyboardEvent) {
      switch(event.keyCode) {
      case 37:  //for left arrow
      case 65:  //for "a"
        impulse = [-1,0];
        // this.angle -= 5
        break;
      case 39:  //for right arrow
      case 68:  //for "d"
        impulse = [1,0];
        // this.angle += 5
        break; 
      case 40:  // for down arrow
      case 83:  //for "s"
        impulse = [0,1];
        break;
      case 38: // for up arrow
      case 87: // for "w"
        impulse = [0, -1];
        break;
      }
    }
    this.vel[0] += impulse[0]
    this.vel[1] += impulse[1]
  }
  
  Asteroids.Ship.prototype.fireBullet = function(){
    event.preventDefault();
    
    // var bullet = new Asteroids.Bullet({pos: this.center(), vel: window.Asteroids.Util.unitVec(this.angle), game: this.game});
    // [this.game.ship.pos[0], this.game.ship.pos[1]];

    
    this.game.addObj(new Asteroids.Bullet(Asteroids.Util.unitVec(this.angle), this.pos, this.game)); 
  }  
  
  Asteroids.Ship.prototype.draw = function(ctx) {
    // save the current co-ordinate system 
    ctx.save();
    // move to the middle of where we want to draw our image
    ctx.translate(this.pos[0], this.pos[1]);
    if (this.vel[0] !== 0 || this.vel[1] !== 0) {
      this.radians = Math.atan(this.vel[1]/this.vel[0])
    }
    
    if (this.vel[0] < 0){
      ctx.rotate(this.radians + 270 * TO_RADIANS);
    }
    else {
      ctx.rotate(this.radians + 90 * TO_RADIANS);
    }
       
    ctx.translate((0 - this.width) / 2, (0 - this.height) / 2);
    ctx.drawImage(this.shipImg, 0, 0, this.width, this.height);
    
    //Alternate way to do it:
    // ctx.drawImage(this.shipImg, (0 - this.width) / 2, (0 - this.height) / 2, this.width, this.height);
    
    ctx.restore();
  };
  
  
  
})(this);
  