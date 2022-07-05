import { GET_NEWSITEMS } from '../../actions';
// import { map } from 'lodash';
const getInitialState = {
  error: null,
  loaded: false,
  loading: false,
  newsitems: [],
};

/**
 * newsitems reducer.
 * @function newsitems
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export const getNewsitemsReducer = (state = getInitialState, action = {}) => {
  switch (action.type) {
    case `${GET_NEWSITEMS}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
        newsitems: [],
      };
    case `${GET_NEWSITEMS}_FAIL`:
      return {
        ...state,
        error: true,
        loaded: false,
        loading: false,
        newsitems: [],
      };
    case `${GET_NEWSITEMS}_SUCCESS`:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
        newsitems: action.result.items,
      };
    default:
      return state;
  }
};
