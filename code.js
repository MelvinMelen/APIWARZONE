let playerName;
let output = document.querySelector("[data-output]");

document.querySelector("[data-name-box]").addEventListener("submit", (event) => {
  event.preventDefault();
 let playerName =  document.querySelector("[data-name-input]").value;
  presentUserStats(playerName)
})
// M33L%25232684
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
	output.append(userStats(data.br.kills));
})
.catch(err => {
	console.error(err);
});


}

function userStats(kills){
	let userStatsContainer = document.createElement("div");
	userStatsContainer.classList.add("user-stats-container");

	let userKillStats = document.createElement("div");
	userKillStats.innerText = kills;
	userStatsContainer.append(userKillStats);
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



