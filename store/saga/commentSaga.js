import { put, takeEvery, call } from "redux-saga/effects";
import { addComment, removeComment } from "../reducers/postReducer";
import { PostActionTypes } from "../types/post";
import { CommentsApi } from "../../apis/commentsApi";

function* addCommentWorker({ payload: payload }) {
  try {
    const newComment = yield call(CommentsApi.addFetchComment, payload);
    yield put(addComment(newComment));
  } catch (error) {
    console.log(error);
  }
}

function* removeCommentWorker({ payload: id }) {
  try {
    const removeOldComment = yield call(CommentsApi.removeFetchComment, id);
    yield put(removeComment(removeOldComment));
  } catch (error) {
    console.log(error);
  }
}

export function* commentWatcher() {
  yield takeEvery(PostActionTypes.ADD_COMMENT_FETCH, addCommentWorker);
  yield takeEvery(PostActionTypes.REMOVE_COMMENT_FETCH, removeCommentWorker);
}
