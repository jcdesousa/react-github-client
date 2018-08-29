/**
 * @param  {array} data array of repositories
 */
function normalizeRepositories(data) {
  const repositories = data.reduce((acc, repo) => {
    const {
      id, name, language, description,
    } = repo;

    acc.push({
      id,
      name,
      fullName: repo.full_name,
      url: repo.html_url,
      language,
      stars: repo.stargazers_count,
      issues: repo.open_issues,
      description,
    });

    return acc;
  }, []);

  return repositories;
}


/**
 * Reducer for the Repositories Route
 *
 * @param  {object} state={}
 * @param  {string} action
 */
function repositoriesReducer(state = {}, action) {
  switch (action.type) {
    case 'SEARCH_REPOSITORIES_FULFILLED': {
      const data = action.payload || {};
      const { items = [] } = data;

      const repositories = normalizeRepositories(items);

      return {
        ...state,
        repositories,
      };
    }
    default:
      return state;
  }
}

export default repositoriesReducer;
