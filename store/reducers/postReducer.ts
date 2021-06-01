import produce, { Draft } from "immer";
import { PostAction, PostActionTypes, PostState } from "../types/post";

const initialState: PostState = {
  posts: {
    data: [],
  },
  loading: true,
};

export const postReducer = produce(
  (draft: Draft<PostState>, action: PostAction) => {
    switch (action.type) {
      case PostActionTypes.SET_FETCH_POSTS_DATA:
        draft.posts = action.payload;
        draft.loading = false;
        break;
      case PostActionTypes.ADD_POST:
        draft.posts.data.push(action.payload.data);
      default:
        break;
    }
  },
  initialState
);

export const setFetchPostsData = (payload: any) => ({
  type: PostActionTypes.SET_FETCH_POSTS_DATA,
  payload,
});
export const setPosts = () => ({
  type: PostActionTypes.SET_POSTS,
});
export const addPost = (payload: any) => ({
  type: PostActionTypes.ADD_POST,
  payload,
});
export const addPostFetch = (payload: any) => ({
  type: PostActionTypes.ADD_POST_FETCH,
  payload,
});
