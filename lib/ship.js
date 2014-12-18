(function (myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.Ship = function Ship(game, position) {
    this.COLOR = "#09D6B1";
    this.RADIUS = 18;
    this.vel = [0, 0];
    this.pos = position;
    this.game = game;
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
  
    
  Asteroids.Ship.prototype.power = function(impulse){
    event.preventDefault();
    if (impulse instanceof KeyboardEvent) {
      switch(event.keyCode) {
      case 37:  //for left arrow
      case 65:  //for "a"
        impulse = [-1,0];
        break;
      case 39:  //for right arrow
      case 68:  //for "d"
        impulse = [1,0];
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
    this.game.addObj(new Asteroids.Bullet(this.game)); 
  }  
  
  
})(this);
  