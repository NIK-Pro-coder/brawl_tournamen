let players = new Set();

function reset() {
	players = new Set();
}

function addPlayer() {
	let error = document.getElementById("tagError");
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

	if (!players.has(tag)) {
		players.add(tag);
		loadPlayer(tag);
	}
}

async function loadPlayer(tag) {
	let error = document.getElementById("playerError");
	error.classList.add("hidden");

	let div = document.getElementById("playerList");

	let p = document.createElement("p");
	p.setAttribute("id", tag);
	p.innerHTML = "Loading Player";

	div.appendChild(p);

	const url = `/getPlayer/${tag}`;
	let given = await fetch(url);
	let data = await given.json();

	let player_name = data.name;
	let player_cups = data.trophies;

	if (player_name && player_cups) {
		p.innerHTML = `${player_name} - ${player_cups}`;
	} else {
		error.classList.remove("hidden");
		error.innerHTML = `Could not find player with tag "${tag}"`;
		div.removeChild(p);
	}
}

async function addClub() {
	let error = document.getElementById("tagError");
	error.classList.add("hidden");

	let field = document.getElementById("ctag");

	let tag = field.value;

	if (tag.length === 0) {
		error.classList.remove("hidden");
		return;
	}

	if (tag[0] === "#") {
		tag = tag.substring(1);
	}

	const url = `getClub/${tag}`;
	let given = await fetch(url);
	let data = await given.json();

	data.items.forEach((player) => {
		let tag = player.tag.substring(1);
		loadPlayer(tag);
	});
}
