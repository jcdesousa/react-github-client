export function searchRepositories(query) {
  if (!query) { // get last week trending repos
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const formattedDate = date.toISOString().slice(0, 10); // yyyy-mm-dd format
    query = `created:>${formattedDate}`; // eslint-disable-line
  }

  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=6`;

  return {
    type: 'SEARCH_REPOSITORIES',
    payload: fetch(url).then(response => response.json()),
  };
}

export function fetchContributors(owner, repo, page, perPage) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contributors?page=${page}&per_page=${perPage}`;

  return {
    type: 'FETCH_CONTRIBUTORS',
    payload: fetch(url).then(response => response.json()),
  };
}
