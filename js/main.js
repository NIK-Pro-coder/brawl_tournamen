const API_KEY =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM3MzdlMDQxLWUxNjYtNGU3ZS04YzcyLWNkZWFhYmM3Mzc3NSIsImlhdCI6MTcyNjg1MjY1Mywic3ViIjoiZGV2ZWxvcGVyL2U4NjJiYzNmLTRmMDctMDJlMi05MmQ5LTk0OTNjZjMxZjFlYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiOTMuNDUuODMuNDAiXSwidHlwZSI6ImNsaWVudCJ9XX0.YJ6t5XoBPQFm_ArKQ5XuJ8ArYwmv8QbCoMOBpWim60reJWI525sTdJCFvzlKKrfcK743AG3XYpoDyZG7pqYcqQ";

let players = new Set();

function reset() {
	players = new Set();
}

function addPlayer() {
	let error = document.getElementById("error");
	error.classList.add("hidden");

	let field = document.getElementById("ptag");

	let tag = field.value;

	if (tag.length === 0) {
		error.classList.remove("hidden");
		return;
	}

	if (tag[0] === "#") {
		tag = tag.substring(1);
	}

	players.add(tag);
	console.log(players);
}

async function loadPlayers() {
	players.forEach(async (tag) => {
		const url = `https://api.brawlstars.com/v1/players/%23${tag}`;

		let given = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${API_KEY}`,
			},
		});
		console.log(given);
	});
}
