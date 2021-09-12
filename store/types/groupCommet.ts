export enum GroupCommentActionTypes {
  SET_FETCH_GROUP_COMMENTS_DATA = "SET_FETCH_GROUP_COMMENTS_DATA",
  SET_GROUP_COMMENTS = "SET_GROUP_COMMENTS ",
  ADD_FETCH_GROUP_COMMENT_DATA = "ADD_FETCH_GROUP_COMMENT_DATA",
  ADD_GROUP_COMMENT = "ADD_GROUP_COMMENT ",
  REMOVE_FETCH_GROUP_COMMENT_DATA = "REMOVE_FETCH_GROUP_COMMENT_DATA",
  REMOVE_GROUP_COMMENT = "REMOVE_GROUP_COMMENT ",
  EDIT_FETCH_GROUP_COMMENT_DATA = "EDIT_FETCH_GROUP_COMMENT_DATA",
  EDIT_GROUP_COMMENT = "EDIT_GROUP_COMMENT ",
}

export type SetFetchGroupCommentsDataAction = {
  type: GroupCommentActionTypes.SET_FETCH_GROUP_COMMENTS_DATA;
  payload: any;
};
export type AddFetchGroupCommentDataAction = {
  type: GroupCommentActionTypes.ADD_FETCH_GROUP_COMMENT_DATA;
  payload: any;
};
export type RemoveFetchGroupCommentDataAction = {
  type: GroupCommentActionTypes.REMOVE_FETCH_GROUP_COMMENT_DATA;
  payload: any;
};
export type EditFetchGroupCommentDataAction = {
  type: GroupCommentActionTypes.EDIT_FETCH_GROUP_COMMENT_DATA;
  payload: any;
};
export type GroupCommentCAction =
  | SetFetchGroupCommentsDataAction
  | AddFetchGroupCommentDataAction
  | RemoveFetchGroupCommentDataAction
  | EditFetchGroupCommentDataAction;

export type GroupCommentState = {
  groupComments: any;
  loading: boolean;
};
