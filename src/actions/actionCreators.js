export function searchRepositories(query) {
  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=6`;

  return {
    type: 'SEARCH_REPOSITORIES',
    payload: fetch(url).then(response => response.json()),
  };
}

export function fetchContributors(owner, repo, page) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contributors?page=${page}&per_page=10`;

  return {
    type: 'FETCH_CONTRIBUTORS',
    payload: fetch(url).then(response => response.json()),
  };
}
