import { put, takeEvery, call } from "redux-saga/effects";
import { GroupApi } from "../../apis/groupApi";
import { setFetchGroupsData } from "../reducers/groupReducer";
import { GroupActionTypes } from "../types/group";

function* fetchGroupsWorker() {
  const groups: Promise<any> = yield call(GroupApi.getFetchGroups);
  yield put(setFetchGroupsData(groups));
}

export function* groupWatcher() {
  yield takeEvery(GroupActionTypes.SET_GROUPS, fetchGroupsWorker);
}
