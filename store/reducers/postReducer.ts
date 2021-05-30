import produce, { Draft } from "immer";
import { PostAction, PostActionTypes, PostState } from "../types/post";

const initialState: PostState = {
  posts: [],
  loading: true,
};

export const postReducer = produce(
  (draft: Draft<PostState>, action: PostAction) => {
    switch (action.type) {
      case PostActionTypes.SET_FETCH_POSTS_DATA:
        draft.posts = action.payload;
        draft.loading = false;
        break;
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
