/**
 * Root reducer.
 * @module reducers/root
 */

import { getNewsitemsReducer } from './newsitems/newsitems';
/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  // ...defaultReducers,
  // Add your reducers here
  newsitems: getNewsitemsReducer,
};

export default reducers;
