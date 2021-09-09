import produce, { Draft } from "immer";
import { GroupAction, GroupActionTypes, GroupState } from "../types/group";

const initialState: GroupState = {
  groups: {
    data: [],
  },
  group: [],
  loading: true,
  signed: false,
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
      case GroupActionTypes.ADD_FETCH_GROUP_DATA:
        draft.groups.data.push(action.payload.data.newGroup);
        break;
      case GroupActionTypes.SIGN_MEMBER_FETCH_DATA:
        draft.groups.data.groupMembers.push(action.payload.data.newMember);
        draft.signed = true;
        break;
      case GroupActionTypes.UNSUBCRIBE_MEMBER_FETCH_DATA:
        draft.groups.data.groupMembers = draft.groups.data.groupMembers.filter(
          (member: any) => member.id != action.payload.data.newMember.id
        );
        draft.signed = false;
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
export const addFetchGroupData = (payload: any) => ({
  type: GroupActionTypes.ADD_FETCH_GROUP_DATA,
  payload,
});
export const addGroup = (payload: any) => ({
  type: GroupActionTypes.ADD_GROUP,
  payload,
});
export const signMemberFetchData = (payload: any) => ({
  type: GroupActionTypes.SIGN_MEMBER_FETCH_DATA,
  payload,
});
export const signMember = (payload: any) => ({
  type: GroupActionTypes.SIGN_MEMBER,
  payload,
});
export const unsubcribeMemberFetchData = (payload: any) => ({
  type: GroupActionTypes.UNSUBCRIBE_MEMBER_FETCH_DATA,
  payload,
});
export const unsubcribeMember = (payload: any) => ({
  type: GroupActionTypes.UNSUBCRIBE_MEMBER,
  payload,
});
