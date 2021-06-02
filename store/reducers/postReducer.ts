import produce, { Draft } from "immer";
import { PostAction, PostActionTypes, PostState } from "../types/post";

const initialState: PostState = {
  posts: {
    data: [],
  },
  post: {
    data: {
      post: {},
      commentsPost: [],
    },
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
      case PostActionTypes.SET_FETCH_POSTS_ITEM_DATA:
        draft.post = action.payload;
        draft.loading = false;
      case PostActionTypes.ADD_COMMENT:
        typeof window !== "undefined" &&
          draft.post.data.commentsPost.push(action.payload.data);
      case PostActionTypes.REMOVE_COMMENT:
        draft.post.data.commentsPost = draft.post.data.commentsPost.filter(
          (item) => item.id != action.payload.data.commentId
        );

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
export const setFetchPostsItemData = (payload: any) => ({
  type: PostActionTypes.SET_FETCH_POSTS_ITEM_DATA,
  payload,
});
export const setPost = (payload: any) => ({
  type: PostActionTypes.SET_POST,
  payload,
});
export const addComment = (payload: any) => ({
  type: PostActionTypes.ADD_COMMENT,
  payload,
});
export const addCommentFetch = (payload: any) => ({
  type: PostActionTypes.ADD_COMMENT_FETCH,
  payload,
});
export const removeComment = (payload: any) => ({
  type: PostActionTypes.REMOVE_COMMENT,
  payload,
});
export const removeCommentFetch = (payload: any) => ({
  type: PostActionTypes.REMOVE_COMMENT_FETCH,
  payload,
});
