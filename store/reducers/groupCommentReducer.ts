import produce, { Draft } from "immer";
import {
  GroupCommentActionTypes,
  GroupCommentCAction,
  GroupCommentState,
} from "../types/groupCommet";

const initialState: GroupCommentState = {
  groupComments: {
    data: [],
  },
  loading: true,
};

export const groupCommentReducer = produce(
  (draft: Draft<GroupCommentState>, action: GroupCommentCAction) => {
    switch (action.type) {
      case GroupCommentActionTypes.SET_FETCH_GROUP_COMMENTS_DATA:
        draft.groupComments = action.payload;
        draft.loading = false;
        break;
      case GroupCommentActionTypes.ADD_FETCH_GROUP_COMMENT_DATA:
        draft.groupComments.data.push(action.payload.data);
        break;
      default:
        break;
    }
  },
  initialState
);

export const setFetchGroupCommentsData = (payload: any) => ({
  type: GroupCommentActionTypes.SET_FETCH_GROUP_COMMENTS_DATA,
  payload,
});
export const setGroupComments = (payload: any) => ({
  type: GroupCommentActionTypes.SET_GROUP_COMMENTS,
  payload,
});
export const addFetchGroupCommentData = (payload: any) => ({
  type: GroupCommentActionTypes.ADD_FETCH_GROUP_COMMENT_DATA,
  payload,
});
export const addGroupComment = (payload: any) => ({
  type: GroupCommentActionTypes.ADD_GROUP_COMMENT,
  payload,
});
