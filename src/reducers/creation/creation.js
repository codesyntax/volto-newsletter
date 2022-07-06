import { CREATE_NEWSLETTER } from '../../actions';
// import { map } from 'lodash';
const getInitialState = {
  error: null,
  loaded: false,
  loading: false,
  element: {},
};

/**
 * newsitems reducer.
 * @function newsitems
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export const creationNewsletterReducer = (
  state = getInitialState,
  action = {},
) => {
  switch (action.type) {
    case `${CREATE_NEWSLETTER}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${CREATE_NEWSLETTER}_FAIL`:
      return {
        ...state,
        error: true,
        loaded: false,
        loading: false,
        element: {},
      };
    case `${CREATE_NEWSLETTER}_SUCCESS`:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
        element: action.result,
      };
    default:
      return state;
  }
};
