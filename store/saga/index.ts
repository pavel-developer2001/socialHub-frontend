import { all } from "redux-saga/effects";
import { userWatcher } from "./userSaga";
import { postWatcher } from "./postSaga";
import { commentWatcher } from "./commentSaga";
import { groupWatcher } from "./groupSaga";
import { groupPostWatcher } from "./groupPostSaga";

export function* rootWatcher() {
  yield all([
    userWatcher(),
    postWatcher(),
    commentWatcher(),
    groupWatcher(),
    groupPostWatcher(),
  ]);
}
