import { put, takeEvery, call } from "redux-saga/effects";
import { GroupApi } from "../../apis/groupApi";
import {
  addFetchGroupData,
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
function* addGroupWorker({ payload: payload }: any) {
  try {
    const newGroup: Promise<any> = yield call(GroupApi.addFetchGroup, payload);
    yield put(addFetchGroupData(newGroup));
  } catch (error) {
    console.log(error);
  }
}

export function* groupWatcher() {
  yield takeEvery(GroupActionTypes.SET_GROUPS, fetchGroupsWorker);
  yield takeEvery(GroupActionTypes.SET_GROUP, fetchGroupWorker);
  yield takeEvery(GroupActionTypes.ADD_GROUP, addGroupWorker);
}
