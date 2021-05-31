import { put, takeEvery, call } from "redux-saga/effects";
import {
  setFetchUsersData,
  setFetchUsersItemData,
} from "../reducers/userReducer";
import { UserActionTypes } from "../types/user";
import { UsersApi } from "../../apis/usersApi";

function* fetchUsersWorker() {
  const users = yield call(UsersApi.getFetchUsers);
  yield put(setFetchUsersData(users));
}

function* fetchUserWorker({ payload: id }) {
  const user = yield call(UsersApi.getFetchUser, id);
  yield put(setFetchUsersItemData(user));
}
export function* userWatcher() {
  yield takeEvery(UserActionTypes.SET_USERS, fetchUsersWorker);
  yield takeEvery(UserActionTypes.SET_USER, fetchUserWorker);
}
