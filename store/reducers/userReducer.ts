import produce, { Draft } from "immer";
import { UserAction, UserActionTypes, UserState } from "../types/user";

const initialState: UserState = {
  users: [],
  user: [],
  token: "",
  loading: true,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserAction) => {
    switch (action.type) {
      case UserActionTypes.SET_FETCH_USERS_DATA:
        draft.users = action.payload;
        draft.loading = false;
        break;
      case UserActionTypes.SET_TOKEN:
        draft.token = action.payload;
        break;
      case UserActionTypes.SET_FETCH_USERS_ITEM_DATA:
        draft.user = action.payload;
        draft.loading = false;
        break;
      default:
        break;
    }
  },
  initialState
);

export const setFetchUsersData = (payload: any) => ({
  type: UserActionTypes.SET_FETCH_USERS_DATA,
  payload,
});
export const setUsers = () => ({
  type: UserActionTypes.SET_USERS,
});

export const setFetchUsersItemData = (payload: any) => ({
  type: UserActionTypes.SET_FETCH_USERS_ITEM_DATA,
  payload,
});
export const setUser = (payload: any) => ({
  type: UserActionTypes.SET_USER,
  payload,
});

export const setToken = (payload: any) => ({
  type: UserActionTypes.SET_TOKEN,
  payload,
});

export const loginToken = (payload: any) => ({
  type: UserActionTypes.LOGIN_TOKEN,
  payload,
});
export const registerToken = (payload: any) => ({
  type: UserActionTypes.REGISTER_TOKEN,
  payload,
});
