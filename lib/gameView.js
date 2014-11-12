(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  Asteroids.GameView = function GameView(canvas) {
    this.ctx = canvas.getContext('2d');
    this.game = new Asteroids.Game
  }
  
  Asteroids.GameView.prototype.start = function(){
    this.game.addAsteroids();
    setInterval(function(){
      this.game.draw(this.ctx);
      this.game.step();
    }.bind(this), 20);
  }
})(this);