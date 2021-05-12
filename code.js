window.onload = function WindowLoad(event) {
    platformBattle.classList.add("platform-img");
}

let output = document.querySelector("[data-output]");

let platformBattle = document.querySelector("[data-platform-battle]");
let platformPsn = document.querySelector("[data-platform-psn]");
let platform = document.getElementsByName("platform");


document.querySelector("[data-battle]").addEventListener("click", (event) => {
			platformPsn.classList.add("platform-img");
			platformBattle.classList.remove("platform-img");
})
document.querySelector("[data-psn]").addEventListener("click", (event) => {		
			platformBattle.classList.add("platform-img");
			platformPsn.classList.remove("platform-img");
})


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
 	output.append(userStatsBr(data.br.kdRatio, data.br.kills, data.br.deaths, data.br.wins, data.br.topFive, data.br.topTen, data.br.gamesPlayed, parseInt((data.br.timePlayed / 3600))));
	output.append(userStatsPl(data.br_dmz.kdRatio, data.br_dmz.kills, data.br_dmz.deaths, data.br_dmz.wins, data.br_dmz.topFive, data.br_dmz.topTen, data.br_dmz.gamesPlayed, parseInt((data.br_dmz.timePlayed  / 3600))));
	output.append(userStatsAll(data.br_all.kdRatio, data.br_all.kills, data.br_all.deaths, data.br_all.wins, data.br_all.topFive, data.br_all.topTen, data.br_all.gamesPlayed, parseInt((data.br_all.timePlayed  / 3600))));
})
.catch(err => {
	console.error(err);
});
}
		}
		
	}

//------ Add fetched information to html
	
function userStatsBr(kdRatio, kills, deaths, wins, topFive, topTen, gamesPlayed, timePlayed){
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

	let userTopFiveStats = document.createElement("div");
	userTopFiveStats.innerText = "Top 5: " + topFive;
	userStatsContainer.append(userTopFiveStats);

	let userTopTenStats = document.createElement("div");
	userTopTenStats.innerText = "Top 10: " + topTen;
	userStatsContainer.append(userTopTenStats);

	let userGamesStats = document.createElement("div");
	userGamesStats.innerText = "Games played: " + gamesPlayed;
	userStatsContainer.append(userGamesStats);

	let userTimeStats = document.createElement("div");
	userTimeStats.innerText = "Time played: " + timePlayed + " hours";
	userStatsContainer.append(userTimeStats);
	
	return userStatsContainer;
}

function userStatsPl(kdRatio, kills, deaths, wins, topFive, topTen, gamesPlayed, timePlayed){
	let userStatsContainer = document.createElement("div");
	userStatsContainer.classList.add("user-stats-container");
	let titel = document.createElement("h2");
	titel.innerText = "Plunder";
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

	let userTopFiveStats = document.createElement("div");
	userTopFiveStats.innerText = "Top 5: " + topFive;
	userStatsContainer.append(userTopFiveStats);

	let userTopTenStats = document.createElement("div");
	userTopTenStats.innerText = "Top 10: " + topTen;
	userStatsContainer.append(userTopTenStats);

	let userGamesStats = document.createElement("div");
	userGamesStats.innerText = "Games played: " + gamesPlayed;
	userStatsContainer.append(userGamesStats);

	let userTimeStats = document.createElement("div");
	userTimeStats.innerText = "Time played: " + timePlayed + " hours";
	userStatsContainer.append(userTimeStats);
	
	return userStatsContainer;
}

function userStatsAll(kdRatio, kills, deaths, wins, topFive, topTen, gamesPlayed, timePlayed){
	let userStatsContainer = document.createElement("div");
	userStatsContainer.classList.add("user-stats-container");
	let titel = document.createElement("h2");
	titel.innerText = "All Gamemodes";
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

	let userTopFiveStats = document.createElement("div");
	userTopFiveStats.innerText = "Top 5: " + topFive;
	userStatsContainer.append(userTopFiveStats);

	let userTopTenStats = document.createElement("div");
	userTopTenStats.innerText = "Top 10: " + topTen;
	userStatsContainer.append(userTopTenStats);

	let userGamesStats = document.createElement("div");
	userGamesStats.innerText = "Games played: " + gamesPlayed;
	userStatsContainer.append(userGamesStats);

	let userTimeStats = document.createElement("div");
	userTimeStats.innerText = "Time played: " + timePlayed + " hours";
	userStatsContainer.append(userTimeStats);
	
	return userStatsContainer;
}