import { put, takeEvery, call } from "redux-saga/effects";
import {
  setFetchUsersData,
  setFetchUsersItemData,
  setToken,
} from "../reducers/userReducer";
import { UserActionTypes } from "../types/user";
import { UsersApi } from "../../apis/usersApi";

function* fetchUsersWorker() {
  const users: Promise<any> = yield call(UsersApi.getFetchUsers);
  yield put(setFetchUsersData(users));
}

function* fetchUserWorker({ payload: id }: any) {
  const user: Promise<any> = yield call(UsersApi.getFetchUser, id);
  yield put(setFetchUsersItemData(user));
}

function* loginUserWorker({ payload: payload }: any) {
  const token: Promise<any> = yield call(UsersApi.loginUser, payload);
  yield put(setToken(token));
}

function* registerUserWorker({ payload: payload }: any) {
  const token: Promise<any> = yield call(UsersApi.registerUser, payload);
  yield put(setToken(token));
}
export function* userWatcher() {
  yield takeEvery(UserActionTypes.LOGIN_TOKEN, loginUserWorker);
  yield takeEvery(UserActionTypes.REGISTER_TOKEN, registerUserWorker);
  yield takeEvery(UserActionTypes.SET_USERS, fetchUsersWorker);
  yield takeEvery(UserActionTypes.SET_USER, fetchUserWorker);
}
