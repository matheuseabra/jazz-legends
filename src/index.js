//Select elements needed
const playerForm = document.querySelector("#addPlayerForm");
const playersList = document.querySelector(".players");
const players = [];

//Listen for the submit and adds the player
playerForm.addEventListener("submit", function(e) {
  //Prevent form from reloading the page
  e.preventDefault();

  //Grab the value from the jazz player name
  const playerName = document.querySelector("#playerName").value;

  //Create the obj with respective value
  const player = {
    name: playerName
  };

  //add player to player's array
  players.push(player);
  populateList(players, playersList);
  this.reset();
  // console.table(players);
});

// Function to populateList
function populateList(items = [], itemsList) {
  itemsList.innerHTML = items
    .map(function(item, i) {
      return "<li>" + item.name + "</li>";
    })
    .join("");
}
