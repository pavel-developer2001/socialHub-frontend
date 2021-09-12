import { put, takeEvery, call } from "redux-saga/effects";
import {
  addComment,
  editCommentFetchData,
  removeComment,
} from "../reducers/postReducer";
import { PostActionTypes } from "../types/post";
import { CommentsApi } from "../../apis/commentsApi";

function* addCommentWorker({ payload: payload }: any) {
  try {
    const newComment: Promise<any> = yield call(
      CommentsApi.addFetchComment,
      payload
    );
    yield put(addComment(newComment));
  } catch (error) {
    console.log(error);
  }
}

function* removeCommentWorker({ payload: id }: any) {
  try {
    const removeOldComment: Promise<any> = yield call(
      CommentsApi.removeFetchComment,
      id
    );
    yield put(removeComment(removeOldComment));
  } catch (error) {
    console.log(error);
  }
}
function* editCommentWorker({ payload: payload }: any) {
  try {
    const editComment: Promise<any> = yield call(
      CommentsApi.editFetchComment,
      payload
    );
    yield put(editCommentFetchData(editComment));
  } catch (error) {
    console.log(error);
  }
}

export function* commentWatcher() {
  yield takeEvery(PostActionTypes.ADD_COMMENT_FETCH, addCommentWorker);
  yield takeEvery(PostActionTypes.REMOVE_COMMENT_FETCH, removeCommentWorker);
  yield takeEvery(PostActionTypes.EDIT_COMMENT, editCommentWorker);
}
