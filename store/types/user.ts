export enum UserActionTypes {
  SET_FETCH_USERS_DATA = "SET_FETCH_USERS_DATA ",
  SET_USERS = "SET_USERS",
  SET_TOKEN = "SET_TOKEN",
}
export type SetFetchUsersDataAction = {
  type: UserActionTypes.SET_FETCH_USERS_DATA;
  payload: any;
};
export type SetUsersAction = {
  type: UserActionTypes.SET_USERS;
  payload: any;
};
export type SetTokenAction = {
  type: UserActionTypes.SET_TOKEN;
  payload: any;
};
export type UserAction =
  | SetFetchUsersDataAction
  | SetUsersAction
  | SetTokenAction;

export type UserState = {
  users: any[];
  token: string;
  loading: boolean;
};
