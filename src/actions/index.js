import jsonPlaceholder from '../apis/jsonPlaceholder';

//This is a function that return a function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response })
};