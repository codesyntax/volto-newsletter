/**
 * Root reducer.
 * @module reducers/root
 */

import { getNewsitemsReducer } from './newsitems/newsitems';
import { sendNewsletterReducer } from './send/send';
import { creationNewsletterReducer } from './creation/creation';
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
  newsletter_send: sendNewsletterReducer,
  newsletter_creation: creationNewsletterReducer,
};

export default reducers;
