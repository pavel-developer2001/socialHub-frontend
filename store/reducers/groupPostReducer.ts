import produce, { Draft } from "immer";
import {
  GroupPostAction,
  GroupPostActionTypes,
  GroupPostState,
} from "../types/groupPost";

const initialState: GroupPostState = {
  groupPosts: {
    data: [],
  },
  groupPost: {
    data: [],
  },
  loading: true,
};

export const groupPostReducer = produce(
  (draft: Draft<GroupPostState>, action: GroupPostAction) => {
    switch (action.type) {
      case GroupPostActionTypes.SET_FETCH_GROUP_POSTS_DATA:
        draft.groupPosts = action.payload;
        draft.loading = false;
        break;
      case GroupPostActionTypes.SET_FETCH_GROUP_POST_DATA:
        draft.groupPost = action.payload;
        draft.loading = false;
        break;
      case GroupPostActionTypes.ADD_FETCH_GROUP_POST_DATA:
        draft.groupPosts.data.push(action.payload.data);
        break;
      default:
        break;
    }
  },
  initialState
);

export const setFetchGroupPostsData = (payload: any) => ({
  type: GroupPostActionTypes.SET_FETCH_GROUP_POSTS_DATA,
  payload,
});
export const setGroupPosts = (payload: any) => ({
  type: GroupPostActionTypes.SET_GROUP_POSTS,
  payload,
});
export const setFetchGroupPostData = (payload: any) => ({
  type: GroupPostActionTypes.SET_FETCH_GROUP_POST_DATA,
  payload,
});
export const setGroupPost = (payload: any) => ({
  type: GroupPostActionTypes.SET_GROUP_POST,
  payload,
});
export const addFetchGroupPostData = (payload: any) => ({
  type: GroupPostActionTypes.ADD_FETCH_GROUP_POST_DATA,
  payload,
});
export const addGroupPost = (payload: any) => ({
  type: GroupPostActionTypes.ADD_GROUP_POST,
  payload,
});
