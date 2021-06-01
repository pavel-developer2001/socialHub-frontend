export enum PostActionTypes {
  SET_FETCH_POSTS_DATA = "SET_FETCH_POSTS_DATA",
  SET_POSTS = "SET_POSTS ",
  ADD_POST = "ADD_POST",
  ADD_POST_FETCH = "ADD_POST_FETCH",
}
export type PostState = {
  posts: {
    data: any[];
  };
  loading: boolean;
};

export type SetFetchPostsDataAction = {
  type: PostActionTypes.SET_FETCH_POSTS_DATA;
  payload: any;
};
export type AddPostAction = {
  type: PostActionTypes.ADD_POST;
  payload: any;
};
export type PostAction = SetFetchPostsDataAction | AddPostAction;
