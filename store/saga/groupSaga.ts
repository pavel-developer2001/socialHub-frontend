import { put, takeEvery, call } from "redux-saga/effects";
import { GroupApi } from "../../apis/groupApi";
import { GroupMemberApi } from "../../apis/groupMemberApi";
import {
  addFetchGroupData,
  checkSignFetchData,
  editFetchGroupData,
  removeFetchGroupData,
  setFetchGroupData,
  setFetchGroupsData,
  signMemberFetchData,
  unsubcribeMemberFetchData,
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
function* signMemberWorker({ payload: payload }: any) {
  try {
    const newMember: Promise<any> = yield call(
      GroupMemberApi.signFetchGroupMember,
      payload
    );
    yield put(signMemberFetchData(newMember));
  } catch (error) {
    console.log(error);
  }
}
function* unsubcribeMemberWorker({ payload: payload }: any) {
  try {
    const removeMember: Promise<any> = yield call(
      GroupMemberApi.unsubcribeFetchGroupMember,
      payload
    );
    yield put(unsubcribeMemberFetchData(removeMember));
  } catch (error) {
    console.log(error);
  }
}
function* checkSignMemberWorker({ payload: payload }: any) {
  try {
    const check: Promise<any> = yield call(
      GroupMemberApi.checkSignGroupMember,
      payload
    );
    yield put(checkSignFetchData(check));
  } catch (error) {
    console.log(error);
  }
}
function* removeGroupWorker({ payload: id }: any) {
  try {
    const removeOldGroup: Promise<any> = yield call(
      GroupApi.removeFetchGroup,
      id
    );
    yield put(removeFetchGroupData(removeOldGroup));
  } catch (error) {
    console.log(error);
  }
}
function* editGroupWorker({ payload: payload }: any) {
  try {
    const editGroup: Promise<any> = yield call(
      GroupApi.editFetchGroup,
      payload
    );
    yield put(editFetchGroupData(editGroup));
  } catch (error) {
    console.log(error);
  }
}
export function* groupWatcher() {
  yield takeEvery(GroupActionTypes.SET_GROUPS, fetchGroupsWorker);
  yield takeEvery(GroupActionTypes.SET_GROUP, fetchGroupWorker);
  yield takeEvery(GroupActionTypes.ADD_GROUP, addGroupWorker);
  yield takeEvery(GroupActionTypes.SIGN_MEMBER, signMemberWorker);
  yield takeEvery(GroupActionTypes.UNSUBCRIBE_MEMBER, unsubcribeMemberWorker);
  yield takeEvery(GroupActionTypes.CHECK_SIGN, checkSignMemberWorker);
  yield takeEvery(GroupActionTypes.REMOVE_GROUP, removeGroupWorker);
  yield takeEvery(GroupActionTypes.EDIT_GROUP, editGroupWorker);
}
