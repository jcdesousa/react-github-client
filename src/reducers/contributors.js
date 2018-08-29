/**
 * @param  {array} data array of contributors
 */
function normalizeContributors(data) {
  const contributors = data.reduce((acc, contributor) => {
    const { id, login, contributions } = contributor;

    acc.push({
      id,
      login,
      url: contributor.html_url,
      contributions,
      avatar: contributor.avatar_url,
    });

    return acc;
  }, []);

  return contributors;
}

/**
 * Reducer for the Contributors Route
 *
 * @param  {object} state
 * @param  {string} action
 */
function contributorsReducer(state = {
  loading: false,
  showLoadingMore: false,
  contributors: [],
  nextPage: 1,
  loadingMore: true,
}, action) {
  switch (action.type) {
    case 'FETCH_CONTRIBUTORS_PENDING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'FETCH_CONTRIBUTORS_FULFILLED': {
      const data = action.payload || [];

      if (!data.length) {
        return {
          ...state,
          loading: false,
          showLoadingMore: false,
          loadingMore: false,
        };
      }

      const contributors = state.contributors.concat(normalizeContributors(data));

      return {
        ...state,
        contributors,
        loading: false,
        showLoadingMore: true,
        loadingMore: false,
        nextPage: state.nextPage + 1,
      };
    }
    default:
      return state;
  }
}

export default contributorsReducer;
