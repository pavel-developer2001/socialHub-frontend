import { all } from "redux-saga/effects";
import { userWatcher } from "./userSaga";
import { postWatcher } from "./postSaga";

export function* rootWatcher() {
  yield all([userWatcher(), postWatcher()]);
}
