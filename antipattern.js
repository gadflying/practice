// Identify the antipattern in the function below
Player = function() {
  this.playCount = 0;
  
  this.play = function() {
    // ...
    this.playCount++;
  }
}

var player = new Player()

// If we want to reset the play count, we could utilize the following antipattern:
player.playCount = 0;

// Having getters and setters is a better pattern since it restricts access to the private variable
Player = function() {
  var playCount = 0;
  
  this.play = function() {
    // ...
    this.playCount++;
  }
  
  this.getPlayCount = function() {
		return playCount;
  }
  
  this.setPlayCount = function(pc) {
    playCount = pc;
  }
  
  this.resetPlayCount = function() {
    playCount = 0;
  }
}