import { SEND_NEWSLETTER } from '../../actions';
// import { map } from 'lodash';
const getInitialState = {
  error: null,
  loaded: false,
  loading: false,
  message: '',
};

/**
 * newsitems reducer.
 * @function newsitems
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export const sendNewsletterReducer = (state = getInitialState, action = {}) => {
  switch (action.type) {
    case `${SEND_NEWSLETTER}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${SEND_NEWSLETTER}_FAIL`:
      return {
        ...state,
        error: true,
        loaded: false,
        loading: false,
        message: action.error.response.text,
      };
    case `${SEND_NEWSLETTER}_SUCCESS`:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
        message: action.result.message,
      };
    default:
      return state;
  }
};
