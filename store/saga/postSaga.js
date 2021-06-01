import { put, takeEvery, call } from "redux-saga/effects";
import {
  setFetchPostsData,
  addPost,
  setFetchPostsItemData,
} from "../reducers/postReducer";
import { PostActionTypes } from "../types/post";
import { PostsApi } from "../../apis/postsApi";

function* fetchPostsWorker() {
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

function* fetchPostWorker({ payload: id }) {
  try {
    const post = yield call(PostsApi.getFetchPost, id);
    yield put(setFetchPostsItemData(post));
  } catch (error) {
    console.log(error);
  }
}

export function* postWatcher() {
  yield takeEvery(PostActionTypes.SET_POSTS, fetchPostsWorker);
  yield takeEvery(PostActionTypes.ADD_POST_FETCH, addPostWorker);
  yield takeEvery(PostActionTypes.SET_POST, fetchPostWorker);
}
