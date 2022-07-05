/**
 * Get courses.
 * @module actions/course
 */
export const GET_NEWSITEMS = 'GET_NEWSITEMS';
/**
 * Get tokens.
 * @function getCourses
 * @returns {Object} Get tokens action.
 */
export function getNewsitems(limit = 20, lang = 'eu') {
  return {
    type: GET_NEWSITEMS,
    request: {
      op: 'get',
      path: `@search?portal_type=News Item&sort_on=effective&sort_order=reverse&sort_limit=${limit}&Language=${lang}`,
    },
  };
}
