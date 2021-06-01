import { put, takeEvery, call } from "redux-saga/effects";
import { setFetchPostsData, addPost } from "../reducers/postReducer";
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

function* addPostWorker({ payload: payload }) {
  try {
    const newPost = yield call(PostsApi.addFetchPost, payload);
    yield put(addPost(newPost));
  } catch (error) {
    console.log(error);
  }
}

export function* postWatcher() {
  yield takeEvery(PostActionTypes.SET_POSTS, fetchPostWorker);
  yield takeEvery(PostActionTypes.ADD_POST_FETCH, addPostWorker);
}
