//Select elements needed
const playerForm = document.querySelector("#addPlayerForm");
const playersList = document.querySelector(".players");
const players = JSON.parse(localStorage.getItem("players", players)) || [];

populateList(players, playersList);

//Listen for the submit and adds the player
playerForm.addEventListener("submit", function(e) {
  //Prevent form from reloading the page
  e.preventDefault();

  //Grab the value from the jazz player name
  const name = document.querySelector("#playerName").value;
  const instrument = document.querySelector("#playerInstrument").value;
  const genre = document.querySelector("#playerGenre").value;

  if (name && instrument && genre) {
    //Create the obj with respective value
    const player = {
      name,
      instrument,
      genre
    };

    //add player to player's array
    players.push(player);
    populateList(players, playersList);
    localStorage.setItem("players", JSON.stringify(players));
    this.reset();
  } else {
    alert("Hey, seems like some fields are missing...");
  }
});

// Function to populateList
function populateList(items = [], itemsList) {
  itemsList.innerHTML = items
    .map(function(item, i) {
      return `<li>
                <h3>${item.name}</h3>
                <p>Intrument: ${item.instrument}</p>
                <p>Genre: ${item.genre}</p>    
              </li>`;
    })
    .join("");
}
