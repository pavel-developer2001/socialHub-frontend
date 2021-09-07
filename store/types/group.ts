export enum GroupActionTypes {
  SET_FETCH_GROUPS_DATA = "SET_FETCH_GROUPS_DATA",
  SET_GROUPS = "SET_GROUPS",
  SET_FETCH_GROUP_DATA = "SET_FETCH_GROUP_DATA",
  SET_GROUP = "SET_GROUP",
}

export type SetFetchGroupsDataAction = {
  type: GroupActionTypes.SET_FETCH_GROUPS_DATA;
  payload: any;
};

export type SetFetchGroupDataAction = {
  type: GroupActionTypes.SET_FETCH_GROUP_DATA;
  payload: any;
};
export type GroupAction = SetFetchGroupsDataAction | SetFetchGroupDataAction;

export type GroupState = {
  groups: any;
  group: any;
  loading: boolean;
};
