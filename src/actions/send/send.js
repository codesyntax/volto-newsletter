/**
 * Get courses.
 * @module actions/course
 */
export const SEND_NEWSLETTER = 'SEND_NEWSLETTER';
/**
 * Get tokens.
 * @function SendNewsletter
 * @returns {Object} Get tokens action.
 */
export function sendNewsletter(url, from, to, subject) {
  return {
    type: SEND_NEWSLETTER,
    request: {
      op: 'post',
      path: `${url}/@send`,
      data: {
        from: from,
        to: to,
        subject: subject,
      },
    },
  };
}
