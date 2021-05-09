let playerName;
let output = document.querySelector("[data-output]");

document.querySelector("[data-name-box]").addEventListener("submit", (event) => {
  event.preventDefault();
  let playerInput = document.querySelector("[data-name-input]").value;
 let playerName =  playerInput.replace("#", "%2523");
  presentUserStats(playerName);
})
// M33L%25232684 M33L#2684
function presentUserStats(playerName) {
    fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/" + playerName + "/battle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6bbf769455msh9e00165a14552adp1589fejsne12384413e18",
		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
	}
})
.then(response => response.json())
.then ( (data) => {
	console.log(data);
	output.append(userStatsBr(data.br.kills));
})
.catch(err => {
	console.error(err);
});


}

function userStatsBr(kills){
	let userStatsContainer = document.createElement("div");
	userStatsContainer.classList.add("user-stats-container-br");
	let titel = document.createElement("h2");
	titel.innerText = "BR";
	userStatsContainer.append(titel);

	let userKillStats = document.createElement("div");
	console.log(kills);
	userKillStats.innerText = "Kills: "+kills;
	console.log(userKillStats);
	userStatsContainer.append(userKillStats);
	
	let userDeatStats = document.createElement("div");
	userDeathStats.innerText = "Deats: "+deaths;
	
	return userStatsContainer;
}

// let output = document.getElementById("output");

// document.querySelector("form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     let playerName = document.querySelector("[data-name-input]").value;
//     presentUserStats(playerName);
// })


// function presentUserStats(playerName) {
//     fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/" + playerName + "/battle", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "ca80e9e0bemsh20dfbedd9e3a1e4p18ba1bjsn961ab30b9aa8",
//             "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
//         }
//     })
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }



