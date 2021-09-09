export enum GroupCommentActionTypes {
  SET_FETCH_GROUP_COMMENTS_DATA = "SET_FETCH_GROUP_COMMENTS_DATA",
  SET_GROUP_COMMENTS = "SET_GROUP_COMMENTS ",
  ADD_FETCH_GROUP_COMMENT_DATA = "ADD_FETCH_GROUP_COMMENT_DATA",
  ADD_GROUP_COMMENT = "ADD_GROUP_COMMENT ",
}

export type SetFetchGroupCommentsDataAction = {
  type: GroupCommentActionTypes.SET_FETCH_GROUP_COMMENTS_DATA;
  payload: any;
};
export type AddFetchGroupCommentDataAction = {
  type: GroupCommentActionTypes.ADD_FETCH_GROUP_COMMENT_DATA;
  payload: any;
};
export type GroupCommentCAction =
  | SetFetchGroupCommentsDataAction
  | AddFetchGroupCommentDataAction;

export type GroupCommentState = {
  groupComments: any;
  loading: boolean;
};
