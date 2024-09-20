const API_KEY =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM3MzdlMDQxLWUxNjYtNGU3ZS04YzcyLWNkZWFhYmM3Mzc3NSIsImlhdCI6MTcyNjg1MjY1Mywic3ViIjoiZGV2ZWxvcGVyL2U4NjJiYzNmLTRmMDctMDJlMi05MmQ5LTk0OTNjZjMxZjFlYyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiOTMuNDUuODMuNDAiXSwidHlwZSI6ImNsaWVudCJ9XX0.YJ6t5XoBPQFm_ArKQ5XuJ8ArYwmv8QbCoMOBpWim60reJWI525sTdJCFvzlKKrfcK743AG3XYpoDyZG7pqYcqQ";

async function test() {
	const url = `https://api.brawlstars.com/v1/players/%23gjlgj80rp`;

	let given = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${API_KEY}`,
		},
		mode: "no-cors",
	});

	let data = await given.json();

	console.log(JSON.stringify(data, 2, null));
}

test();
