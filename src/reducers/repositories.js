function repositoriesReducer(state = {}, action) {
  switch (action.type) {
    case 'SEARCH_REPOSITORIES_FULFILLED': {
      const data = action.payload || {};
      const { items = [] } = data;

      const repositories = items.reduce((acc, repo) => {
        const {
          id, name, language, description,
        } = repo;

        acc.push({
          id,
          name,
          url: repo.html_url,
          language,
          stars: repo.stargazers_count,
          issues: repo.open_issues,
          description,
        });

        return acc;
      }, []);

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
