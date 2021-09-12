export enum GroupPostActionTypes {
  SET_FETCH_GROUP_POSTS_DATA = "SET_FETCH_GROUP_POSTS_DATA",
  SET_GROUP_POSTS = "SET_GROUP_POSTS",
  SET_FETCH_GROUP_POST_DATA = "SET_FETCH_GROUP_POST_DATA",
  SET_GROUP_POST = "SET_GROUP_POST",
  ADD_FETCH_GROUP_POST_DATA = "ADD_FETCH_GROUP_POST_DATA",
  ADD_GROUP_POST = "ADD_GROUP_POST",
  REMOVE_FETCH_GROUP_POST_DATA = "REMOVE_FETCH_GROUP_POST_DATA",
  REMOVE_GROUP_POST = "REMOVE_GROUP_POST",
  EDIT_FETCH_GROUP_POST_DATA = "EDIT_FETCH_GROUP_POST_DATA ",
  EDIT_GROUP_POST = "EDIT_GROUP_POST",
}

export type SetFetchGroupPostsDataAction = {
  type: GroupPostActionTypes.SET_FETCH_GROUP_POSTS_DATA;
  payload: any;
};
export type SetFetchGroupPostDataAction = {
  type: GroupPostActionTypes.SET_FETCH_GROUP_POST_DATA;
  payload: any;
};
export type AddFetchGroupPostDataAction = {
  type: GroupPostActionTypes.ADD_FETCH_GROUP_POST_DATA;
  payload: any;
};
export type RemoveFetchGroupPostDataAction = {
  type: GroupPostActionTypes.REMOVE_FETCH_GROUP_POST_DATA;
  payload: any;
};
export type EditFetchGroupPostDataAction = {
  type: GroupPostActionTypes.EDIT_FETCH_GROUP_POST_DATA;
  payload: any;
};
export type GroupPostAction =
  | SetFetchGroupPostsDataAction
  | SetFetchGroupPostDataAction
  | AddFetchGroupPostDataAction
  | RemoveFetchGroupPostDataAction
  | EditFetchGroupPostDataAction;

export type GroupPostState = {
  groupPosts: any;
  groupPost: any;
  loading: boolean;
};
