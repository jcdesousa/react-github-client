const INICIAL_PER_PAGE = 10;
const MORE_PER_PAGE = 5;
const MORE_NEXT_PAGE = 3;

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
  perPage: 10,
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

      const newContributors = normalizeContributors(data);

      const contributors = state.contributors.concat(newContributors);

      const nextState = { ...state };

      if (state.perPage === INICIAL_PER_PAGE) { // inicial load gets 10 contributors
        nextState.perPage = MORE_PER_PAGE; // eslint-disable-line no-param-reassign
        nextState.nextPage = MORE_NEXT_PAGE; // eslint-disable-line no-param-reassign
      } else {
        nextState.nextPage += 1;
      }

      return {
        ...nextState,
        contributors,
        loading: false,
        showLoadingMore: newContributors.length === state.perPage,
        loadingMore: false,
      };
    }
    default:
      return state;
  }
}

export default contributorsReducer;
