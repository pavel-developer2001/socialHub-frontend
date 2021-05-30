export enum PostActionTypes {
  SET_FETCH_POSTS_DATA = "SET_FETCH_POSTS_DATA",
  SET_POSTS = "SET_POSTS ",
}
export type PostState = {
  posts: any[];
  loading: boolean;
};

export type SetFetchPostsDataAction = {
  type: PostActionTypes.SET_FETCH_POSTS_DATA;
  payload: any;
};
export type PostAction = SetFetchPostsDataAction;
