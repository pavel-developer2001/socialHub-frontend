const SET_FETCH_POSTS_DATA = "SET_FETCH_POSTS_DATA";
export const SET_POSTS = "SET_POSTS ";

type InitialStateType = {
  posts: any[];
  loading: boolean;
};

const initialState: InitialStateType = {
  posts: [],
  loading: true,
};
export default function postReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_FETCH_POSTS_DATA:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export const setFetchPostsData = (payload: any) => ({
  type: SET_FETCH_POSTS_DATA,
  payload,
});
export const setPosts = () => ({
  type: SET_POSTS,
});
