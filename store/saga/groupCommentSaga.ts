import { put, takeEvery, call } from "redux-saga/effects";
import { GroupCommentApi } from "../../apis/groupCommentApi";
import {
  addFetchGroupCommentData,
  editFetchGroupCommentData,
  removeFetchGroupCommentData,
  setFetchGroupCommentsData,
} from "../reducers/groupCommentReducer";
import { GroupCommentActionTypes } from "../types/groupCommet";

function* fetchGroupCommentsWorker({ payload: id }: any) {
  const groupComments: Promise<any> = yield call(
    GroupCommentApi.getFetchGroupComments,
    id
  );
  yield put(setFetchGroupCommentsData(groupComments));
}
function* addGroupCommentWorker({ payload: payload }: any) {
  try {
    const newGroupComment: Promise<any> = yield call(
      GroupCommentApi.addFetchGroupComment,
      payload
    );
    yield put(addFetchGroupCommentData(newGroupComment));
  } catch (error) {
    console.log(error);
  }
}
function* removeGroupCommentWorker({ payload: id }: any) {
  try {
    const removeOldGroupComment: Promise<any> = yield call(
      GroupCommentApi.removeFetchGroupComment,
      id
    );
    yield put(removeFetchGroupCommentData(removeOldGroupComment));
  } catch (error) {
    console.log(error);
  }
}
function* editGroupCommentWorker({ payload: payload }: any) {
  try {
    const editGroupComment: Promise<any> = yield call(
      GroupCommentApi.editFetchGroupComment,
      payload
    );
    yield put(editFetchGroupCommentData(editGroupComment));
  } catch (error) {
    console.log(error);
  }
}
export function* groupCommentWatcher() {
  yield takeEvery(
    GroupCommentActionTypes.SET_GROUP_COMMENTS,
    fetchGroupCommentsWorker
  );
  yield takeEvery(
    GroupCommentActionTypes.ADD_GROUP_COMMENT,
    addGroupCommentWorker
  );
  yield takeEvery(
    GroupCommentActionTypes.REMOVE_GROUP_COMMENT,
    removeGroupCommentWorker
  );
  yield takeEvery(
    GroupCommentActionTypes.EDIT_GROUP_COMMENT,
    editGroupCommentWorker
  );
}
