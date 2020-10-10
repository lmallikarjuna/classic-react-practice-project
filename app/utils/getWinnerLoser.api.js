export function getWinnerLoser(players) {
  return Promise.all([
    getUserProfile(players[0]),
    getUserProfile(players[1]),
  ]).then((results) => sortPlayers(results));
}

function getUserProfile(player) {
  return Promise.all([getProfile(player), getRepositories(player)]).then(
    ([profile, repositories]) => ({
      profile,
      score: calculateScore(profile.followers, repositories),
    })
  );
}

function getProfile(username) {
  const endpoint = `https://api.github.com/users/${username}`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then((profile) => profile);
}

function getRepositories(username) {
  const endpoint = `https://api.github.com/users/${username}/repos`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then((repos) => repos);
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}

function getStarCount(repos) {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}

function sortPlayers(players) {
  const sorted = players.sort((a, b) => b.score - a.score);
  return sorted;
}
