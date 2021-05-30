import { put, takeEvery, call } from "redux-saga/effects";
import { setFetchUsersData } from "../reducers/userReducer";
import { UserActionTypes } from "../types/user";
import { UsersApi } from "../../apis/usersApi";

function* fetchUserWorker() {
  const users = yield call(UsersApi.getFetchUsers);
  yield put(setFetchUsersData(users));
}
export function* userWatcher() {
  yield takeEvery(UserActionTypes.SET_USERS, fetchUserWorker);
}
