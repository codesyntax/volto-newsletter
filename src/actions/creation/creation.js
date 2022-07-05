/**
 * Get courses.
 * @module actions/course
 */
export const CREATE_NEWSLETTER = 'CREATE_NEWSLETTER';
/**
 * Get tokens.
 * @function createNewsletter
 * @returns {Object} Get tokens action.
 */
export function createNewsletter(url, formatedtitle, text) {
  return {
    type: CREATE_NEWSLETTER,
    request: {
      op: 'post',
      path: `${url}`,
      data: {
        '@type': 'Newsletter',
        title: formatedtitle,
        text: text,
      },
    },
  };
}
