export enum GroupActionTypes {
  SET_FETCH_GROUPS_DATA = "SET_FETCH_GROUPS_DATA",
  SET_GROUPS = "SET_GROUPS",
  SET_FETCH_GROUP_DATA = "SET_FETCH_GROUP_DATA",
  SET_GROUP = "SET_GROUP",
  ADD_FETCH_GROUP_DATA = "ADD_FETCH_GROUP_DATA",
  ADD_GROUP = "ADD_GROUP",
  SIGN_MEMBER_FETCH_DATA = "SIGN_MEMBER_FETCH_DATA",
  SIGN_MEMBER = "SIGN_MEMBER",
  UNSUBCRIBE_MEMBER_FETCH_DATA = "UNSUBCRIBE_MEMBER_FETCH_DATA ",
  UNSUBCRIBE_MEMBER = "UNSUBCRIBE_MEMBER",
  CHECK_SIGN_FETCH_DATA = "CHECK_SIGN_FETCH_DATA",
  CHECK_SIGN = "CHECK_SIGN",
  REMOVE_FETCH_GROUP_DATA = "REMOVE_FETCH_GROUP_DATA",
  REMOVE_GROUP = "REMOVE_GROUP",
  EDIT_FETCH_GROUP_DATA = "EDIT_FETCH_GROUP_DATA",
  EDIT_GROUP = "EDIT_GROUP",
}

export type SetFetchGroupsDataAction = {
  type: GroupActionTypes.SET_FETCH_GROUPS_DATA;
  payload: any;
};

export type SetFetchGroupDataAction = {
  type: GroupActionTypes.SET_FETCH_GROUP_DATA;
  payload: any;
};
export type AddFetchGroupDataAction = {
  type: GroupActionTypes.ADD_FETCH_GROUP_DATA;
  payload: any;
};
export type SignMemberFetchData = {
  type: GroupActionTypes.SIGN_MEMBER_FETCH_DATA;
  payload: any;
};
export type UnsubcribeMemberFetchData = {
  type: GroupActionTypes.UNSUBCRIBE_MEMBER_FETCH_DATA;
  payload: any;
};
export type CheckSignFetchData = {
  type: GroupActionTypes.CHECK_SIGN_FETCH_DATA;
  payload: any;
};
export type RemoveFetchGroupDataAction = {
  type: GroupActionTypes.REMOVE_FETCH_GROUP_DATA;
  payload: any;
};
export type EditFetchGroupDataAction = {
  type: GroupActionTypes.EDIT_FETCH_GROUP_DATA;
  payload: any;
};
export type GroupAction =
  | SetFetchGroupsDataAction
  | SetFetchGroupDataAction
  | AddFetchGroupDataAction
  | SignMemberFetchData
  | UnsubcribeMemberFetchData
  | CheckSignFetchData
  | RemoveFetchGroupDataAction
  | EditFetchGroupDataAction;

export type GroupState = {
  groups: any;
  group: any;
  loading: boolean;
  signed: boolean;
};
