export enum GroupActionTypes {
  SET_FETCH_GROUPS_DATA = "SET_FETCH_GROUPS_DATA",
  SET_GROUPS = "SET_GROUPS",
}

export type SetFetchGroupsDataAction = {
  type: GroupActionTypes.SET_FETCH_GROUPS_DATA;
  payload: any;
};
export type GroupAction = SetFetchGroupsDataAction;

export type GroupState = {
  groups: any;
  loading: boolean;
};
