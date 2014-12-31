(function(myRootObject) {
  var Asteroids = myRootObject.Asteroids = myRootObject.Asteroids || {};
  
  Asteroids.Util = function Util() {};
  
  Asteroids.Util.prototype.inherits = function(childClass, parentClass) {
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };
  
  Asteroids.Util.prototype.randomVec = function(length) {
    var xAxis = Math.floor(Math.random() * length);
    var yAxis = Math.floor(Math.sqrt((length * length) -  (xAxis * xAxis)));
    if (Math.random() > .5) {
      yAxis = yAxis * -1;
    }
    if (Math.random() > .5) {
      xAxis = xAxis * -1;
    }
    
    return [xAxis, yAxis];
  }
  
  Asteroids.Util.unitVec = function(angle){
    return [ Math.sin(angle), -1 * Math.cos(angle)];
  }

})(this);