import produce, { Draft } from "immer";
import { GroupAction, GroupActionTypes, GroupState } from "../types/group";

const initialState: GroupState = {
  groups: [],
  loading: true,
};

export const groupReducer = produce(
  (draft: Draft<GroupState>, action: GroupAction) => {
    switch (action.type) {
      case GroupActionTypes.SET_FETCH_GROUPS_DATA:
        draft.groups = action.payload;
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