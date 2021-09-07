import { put, takeEvery, call } from "redux-saga/effects";
import { GroupApi } from "../../apis/groupApi";
import {
  setFetchGroupData,
  setFetchGroupsData,
} from "../reducers/groupReducer";
import { GroupActionTypes } from "../types/group";

function* fetchGroupsWorker() {
  const groups: Promise<any> = yield call(GroupApi.getFetchGroups);
  yield put(setFetchGroupsData(groups));
}
function* fetchGroupWorker({ payload: id }: any) {
  const group: Promise<any> = yield call(GroupApi.getFetchGroup, id);
  yield put(setFetchGroupData(group));
}
export function* groupWatcher() {
  yield takeEvery(GroupActionTypes.SET_GROUPS, fetchGroupsWorker);
  yield takeEvery(GroupActionTypes.SET_GROUP, fetchGroupWorker);
}
