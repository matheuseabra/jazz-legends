const PlayerModule = (function() {
  //array to storage our player's objects
  const players = JSON.parse(localStorage.getItem("players", players)) || [];

  this.name = "";
  this.instrument = "";
  this.genre = "";
  this.isAlive = true;

  this.getPlayer = function(player) {
    return player;
  };

  this.addPlayer = function(player) {
    const player = {};

    //Check if values aren't empty
    if (name && instrument && genre) {
      //Create the obj with respective value
      const player = {
        name,
        instrument,
        genre,
        isAlive
      };

      //add player to player's to storage
      players.push(player);

      //set player's array to localStorage
      localStorage.setItem("players", JSON.stringify(players));
      this.reset();
    } else {
      alert("Hey, seems like some fields are missing...");
    }
  };
})();

PlayerModule.addPlayer();
