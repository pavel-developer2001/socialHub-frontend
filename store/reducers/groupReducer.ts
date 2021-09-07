import produce, { Draft } from "immer";
import { GroupAction, GroupActionTypes, GroupState } from "../types/group";

const initialState: GroupState = {
  groups: [],
  group: [],
  loading: true,
};

export const groupReducer = produce(
  (draft: Draft<GroupState>, action: GroupAction) => {
    switch (action.type) {
      case GroupActionTypes.SET_FETCH_GROUPS_DATA:
        draft.groups = action.payload;
        draft.loading = false;
        break;
      case GroupActionTypes.SET_FETCH_GROUP_DATA:
        draft.group = action.payload;
        draft.loading = false;
        break;
      default:
        break;
    }
  },
  initialState
);

export const setFetchGroupsData = (payload: any) => ({
  type: GroupActionTypes.SET_FETCH_GROUPS_DATA,
  payload,
});
export const setGroups = () => ({
  type: GroupActionTypes.SET_GROUPS,
});
export const setFetchGroupData = (payload: any) => ({
  type: GroupActionTypes.SET_FETCH_GROUP_DATA,
  payload,
});
export const setGroup = (payload: any) => ({
  type: GroupActionTypes.SET_GROUP,
  payload,
});
