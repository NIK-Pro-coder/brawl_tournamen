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
		const url = `/getPlayer/${tag}`;
		let given = await fetch(url);
		let data = await given.json();

		console.log(JSON.stringify(data, 2, null));
	});
}
