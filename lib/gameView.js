(function (myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.GameView = function GameView(canvas) {
    this.ctx = canvas.getContext('2d');
    this.game = new Asteroids.Game()
    this.bindKeyEvents();
  }
  
  Asteroids.GameView.prototype.start = function(){
    this.game.addAsteroids();
    setInterval(function(){
      this.game.draw(this.ctx);
      this.game.step();
    }.bind(this), 20);
  };
  
  Asteroids.GameView.prototype.bindKeyEvents = function(){
    key('a', this.game.ship.power.bind(this.game.ship)); //bind movement keys
    key('d', this.game.ship.power.bind(this.game.ship));
    key('w', this.game.ship.power.bind(this.game.ship));
    key('s', this.game.ship.power.bind(this.game.ship));
    key('left', this.game.ship.power.bind(this.game.ship));
    key('right', this.game.ship.power.bind(this.game.ship));    
    key('down', this.game.ship.power.bind(this.game.ship));        
    key('up', this.game.ship.power.bind(this.game.ship));
    key('space', this.game.ship.fireBullet.bind(this.game.ship)); //bind firing key
  };
  
})(this);