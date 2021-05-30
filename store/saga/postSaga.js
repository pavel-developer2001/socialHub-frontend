import { put, takeEvery, call } from "redux-saga/effects";
import { setFetchPostsData } from "../reducers/postReducer";
import { PostActionTypes } from "../types/post";
import { PostsApi } from "../../apis/postsApi";

function* fetchPostWorker() {
  try {
    const posts = yield call(PostsApi.getFetchPosts);
    yield put(setFetchPostsData(posts));
  } catch (e) {
    console.log(e);
  }
}
export function* postWatcher() {
  yield takeEvery(PostActionTypes.SET_POSTS, fetchPostWorker);
}
