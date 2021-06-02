export enum UserActionTypes {
  SET_FETCH_USERS_DATA = "SET_FETCH_USERS_DATA ",
  SET_FETCH_USERS_ITEM_DATA = "SET_FETCH_USERS_ITEM_DATA",
  SET_USERS = "SET_USERS",
  SET_USER = "SET_USER",
  SET_TOKEN = "SET_TOKEN",
  LOGIN_TOKEN = "LOGIN_TOKEN",
  REGISTER_TOKEN = "REGISTER_TOKEN",
}
export type SetFetchUsersDataAction = {
  type: UserActionTypes.SET_FETCH_USERS_DATA;
  payload: any;
};
export type SetFetchUsersItemAction = {
  type: UserActionTypes.SET_FETCH_USERS_ITEM_DATA;
  payload: any;
};
export type SetUsersAction = {
  type: UserActionTypes.SET_USERS;
  payload: any;
};
export type SetUserAction = {
  type: UserActionTypes.SET_USER;
  payload: any;
};
export type SetTokenAction = {
  type: UserActionTypes.SET_TOKEN;
  payload: any;
};
export type UserAction =
  | SetFetchUsersDataAction
  | SetUsersAction
  | SetTokenAction
  | SetUserAction
  | SetFetchUsersItemAction;

export type UserState = {
  users: any[];
  user: any[];
  token: string;
  loading: boolean;
};
