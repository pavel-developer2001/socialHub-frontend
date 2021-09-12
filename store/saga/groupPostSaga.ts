import { put, takeEvery, call } from "redux-saga/effects";
import { GroupPostApi } from "../../apis/groupPostApi";
import {
  addFetchGroupPostData,
  editFetchGroupPostData,
  removeFetchGroupPostData,
  setFetchGroupPostData,
  setFetchGroupPostsData,
} from "../reducers/groupPostReducer";
import { GroupPostActionTypes } from "../types/groupPost";

function* fetchGroupPostsWorker({ payload: id }: any) {
  const groupPosts: Promise<any> = yield call(
    GroupPostApi.getFetchGroupPosts,
    id
  );
  yield put(setFetchGroupPostsData(groupPosts));
}
function* fetchGroupPostWorker({ payload: id }: any) {
  const groupPost: Promise<any> = yield call(
    GroupPostApi.getFetchGroupPost,
    id
  );
  yield put(setFetchGroupPostData(groupPost));
}
function* addGroupPostWorker({ payload: payload }: any) {
  try {
    const newGroupPost: Promise<any> = yield call(
      GroupPostApi.addFetchGroupPost,
      payload
    );
    yield put(addFetchGroupPostData(newGroupPost));
  } catch (error) {
    console.log(error);
  }
}
function* removeGroupPostWorker({ payload: id }: any) {
  try {
    const removeOldGroupPost: Promise<any> = yield call(
      GroupPostApi.removeFetchGroupPost,
      id
    );
    yield put(removeFetchGroupPostData(removeOldGroupPost));
  } catch (error) {
    console.log(error);
  }
}
function* editGroupPostWorker({ payload: payload }: any) {
  try {
    const editGroupPost: Promise<any> = yield call(
      GroupPostApi.editFetchGroupPost,
      payload
    );
    yield put(editFetchGroupPostData(editGroupPost));
  } catch (error) {
    console.log(error);
  }
}
export function* groupPostWatcher() {
  yield takeEvery(GroupPostActionTypes.SET_GROUP_POSTS, fetchGroupPostsWorker);
  yield takeEvery(GroupPostActionTypes.SET_GROUP_POST, fetchGroupPostWorker);
  yield takeEvery(GroupPostActionTypes.ADD_GROUP_POST, addGroupPostWorker);
  yield takeEvery(
    GroupPostActionTypes.REMOVE_GROUP_POST,
    removeGroupPostWorker
  );
  yield takeEvery(GroupPostActionTypes.EDIT_GROUP_POST, editGroupPostWorker);
}
