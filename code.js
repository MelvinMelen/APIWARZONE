let playerName;
let output = document.querySelector("[data-output]");

document.querySelector("[data-name-box]").addEventListener("submit", (event) => {
  event.preventDefault();
  let playerInput = document.querySelector("[data-name-input]").value;
  let playerName =  playerInput.replace("#", "%2523");
  let platform = document.getElementsByName("platform");
  presentUserStats(playerName, platform);
})
// M33L%25232684 M33L#2684
function presentUserStats(playerName, platform) {
	for(let i = 0; i < 2; i++){
		if(platform[i].checked){
			console.log(platform[i].value)
		}
		fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/" + playerName + "/"+platform[i].value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6bbf769455msh9e00165a14552adp1589fejsne12384413e18",
		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
	}
})
.then(response => response.json())
.then ( (data) => {
	document.querySelector("[data-output]").innerHTML = "";
	console.log(data);
 	output.append(userStatsBr(data.br.kills, data.br.deaths, data.br.wins, data.br.kdRatio));
	output.append(userStatsPl(data.br_dmz.kills, data.br_dmz.deaths));
	
})
.catch(err => {
	console.error(err);
});
}
	}


	
function userStatsBr(kills, deaths, wins, kdRatio){
	let userStatsContainer = document.createElement("div");
	userStatsContainer.classList.add("user-stats-container");
	let titel = document.createElement("h2");
	titel.innerText = "Battle Royale";
	userStatsContainer.append(titel);

	let userKdStats = document.createElement("div");
	userKdStats.innerText = "K/D ratio: " + kdRatio.toFixed(2);
	userStatsContainer.append(userKdStats);

	let userKillStats = document.createElement("div");
	userKillStats.innerText = "Kills: " + kills;
	userStatsContainer.append(userKillStats);
	
	let userDeathStats = document.createElement("div");
	userDeathStats.innerText = "Deaths: " + deaths;
	userStatsContainer.append(userDeathStats);

	let userWinsStats = document.createElement("div");
	userWinsStats.innerText = "Wins: " + wins;
	userStatsContainer.append(userWinsStats);
	
	return userStatsContainer;
}

function userStatsPl(kills, deaths){
	let userStatsContainer = document.createElement("div");
	userStatsContainer.classList.add("user-stats-container");
	let titel = document.createElement("h2");
	titel.innerText = "Plunder";
	console.log(titel);
	userStatsContainer.append(titel);
	console.log(userStatsContainer);

	let userKillStats = document.createElement("div");
	userKillStats.innerText = "Kills: " + kills;
	console.log(kills);
	userStatsContainer.append(userKillStats);

	let userDeathStats = document.createElement("div");
	userDeathStats.innerText = "Deaths: " + deaths;
	console.log(deaths);
	userStatsContainer.append(userDeathStats);

	return userStatsContainer;
}