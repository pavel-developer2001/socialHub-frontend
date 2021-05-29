import { put, takeEvery, call } from "redux-saga/effects";
import { SET_USERS, setFetchUsersData } from "../reducers/userReducer";
import { UsersApi } from "../../apis/usersApi";

function* fetchUserWorker() {
  const users = yield call(UsersApi.getFetchUsers);
  yield put(setFetchUsersData(users));
}
export function* userWatcher() {
  yield takeEvery(SET_USERS, fetchUserWorker);
}
