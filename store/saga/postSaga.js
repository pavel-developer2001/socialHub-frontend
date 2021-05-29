import { put, takeEvery, call } from "redux-saga/effects";
import { SET_POSTS, setFetchPostsData } from "../reducers/postReducer";
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
  yield takeEvery(SET_POSTS, fetchPostWorker);
}
