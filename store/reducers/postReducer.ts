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
        break;
      case PostActionTypes.SET_FETCH_POSTS_ITEM_DATA:
        //@ts-ignore
        draft.post = action.payload;
        draft.loading = false;
        break;
      case PostActionTypes.ADD_COMMENT:
        typeof window !== "undefined" &&
        //@ts-ignore
          draft.post.data.commentsPost.push(action.payload.data);
        break;
      case PostActionTypes.REMOVE_COMMENT:
        draft.post.data.commentsPost = draft.post.data.commentsPost.filter(
          //@ts-ignore
          (item) => item.id != action.payload.data.commentId
        );
        break;
      case PostActionTypes.REMOVE_POST_FETCH_DATA:
        draft.posts.data = draft.posts.data.filter(
          (item) => item.id != action.payload.data.id
        );
        break;
      case PostActionTypes.EDIT_POST_FETCH_DATA:
        draft.post.data.post = action.payload.data;
        break;
      case PostActionTypes.EDIT_COMMENT_FETCH_DATA:
        draft.post.data.commentsPost = draft.post.data.commentsPost.filter(
          (item) => item.id != action.payload.data.id
        );
        draft.post.data.commentsPost.push(action.payload.data);
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
export const removePostFetchData = (payload: any) => ({
  type: PostActionTypes.REMOVE_POST_FETCH_DATA,
  payload,
});
export const removePost = (payload: any) => ({
  type: PostActionTypes.REMOVE_POST,
  payload,
});
export const editPostFetchData = (payload: any) => ({
  type: PostActionTypes.EDIT_POST_FETCH_DATA,
  payload,
});
export const editPost = (payload: any) => ({
  type: PostActionTypes.EDIT_POST,
  payload,
});
export const editCommentFetchData = (payload: any) => ({
  type: PostActionTypes.EDIT_COMMENT_FETCH_DATA,
  payload,
});
export const editComment = (payload: any) => ({
  type: PostActionTypes.EDIT_COMMENT,
  payload,
});
