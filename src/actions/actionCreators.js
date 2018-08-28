export function searchRepositories(query) { // eslint-disable-line import/prefer-default-export
  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=6`;

  return {
    type: 'SEARCH_REPOSITORIES',
    payload: fetch(url).then(response => response.json()),
  };
}
