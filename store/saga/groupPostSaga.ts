import { put, takeEvery, call } from "redux-saga/effects";
import { GroupPostApi } from "../../apis/groupPost";
import {
  addFetchGroupPostData,
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
export function* groupPostWatcher() {
  yield takeEvery(GroupPostActionTypes.SET_GROUP_POSTS, fetchGroupPostsWorker);
  yield takeEvery(GroupPostActionTypes.SET_GROUP_POST, fetchGroupPostWorker);
  yield takeEvery(GroupPostActionTypes.ADD_GROUP_POST, addGroupPostWorker);
}
