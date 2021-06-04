export enum UserActionTypes {
  SET_FETCH_USERS_DATA = "SET_FETCH_USERS_DATA ",
  SET_FETCH_USERS_ITEM_DATA = "SET_FETCH_USERS_ITEM_DATA",
  SET_USERS = "SET_USERS",
  SET_USER = "SET_USER",
  SET_TOKEN = "SET_TOKEN",
  LOGIN_TOKEN = "LOGIN_TOKEN",
  REGISTER_TOKEN = "REGISTER_TOKEN",
}
export type IUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};
export type SetFetchUsersDataAction = {
  type: UserActionTypes.SET_FETCH_USERS_DATA;
  payload: Array<IUser>;
};
export type SetFetchUsersItemAction = {
  type: UserActionTypes.SET_FETCH_USERS_ITEM_DATA;
  payload: IUser;
};
export type SetUsersAction = {
  type: UserActionTypes.SET_USERS;
  payload: Array<IUser>;
};
export type SetUserAction = {
  type: UserActionTypes.SET_USER;
  payload: IUser;
};
export type SetTokenAction = {
  type: UserActionTypes.SET_TOKEN;
  payload: string;
};
export type UserAction =
  | SetFetchUsersDataAction
  | SetUsersAction
  | SetTokenAction
  | SetUserAction
  | SetFetchUsersItemAction;

export type UserState = {
  users: Array<IUser>;
  user: IUser[];
  token: string;
  loading: boolean;
};
