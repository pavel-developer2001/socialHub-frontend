import { put, takeEvery } from "redux-saga/effects";

function* setTokenWorker() {
  yield put(setToken());
}

export function* userWatcher() {
  yield takeEvery(SET_TOKEN, setTokenWorker);
}
