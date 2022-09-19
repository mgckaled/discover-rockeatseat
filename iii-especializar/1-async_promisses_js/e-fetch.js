import fetch from 'node-fetch'

function getGithubOrgs(url) {
	return fetch(url)
		.then(response => response.json())
		.then(data => fetch(data.repos_url))
		.then(res => res.json())
		.then(d => console.log(d))
}

getGithubOrgs('https://api.github.com/users/mgckaled').then(res =>
	console.log(res)
)
