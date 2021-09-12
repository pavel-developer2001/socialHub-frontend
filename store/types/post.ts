export enum PostActionTypes {
  SET_FETCH_POSTS_DATA = "SET_FETCH_POSTS_DATA",
  SET_POSTS = "SET_POSTS ",
  ADD_POST = "ADD_POST",
  ADD_POST_FETCH = "ADD_POST_FETCH",
  SET_FETCH_POSTS_ITEM_DATA = "SET_FETCH_POSTS_ITEM_DATA",
  SET_POST = "SET_POST",
  ADD_COMMENT = "ADD_COMMENT",
  ADD_COMMENT_FETCH = "ADD_COMMENT_FETCH",
  REMOVE_COMMENT = "REMOVE_COMMENT",
  REMOVE_COMMENT_FETCH = "REMOVE_COMMENT_FETCH ",
  REMOVE_POST_FETCH_DATA = "REMOVE_POST_FETCH_DATA",
  REMOVE_POST = "REMOVE_POST",
  EDIT_POST_FETCH_DATA = "EDIT_POST_FETCH_DATA",
  EDIT_POST = "EDIT_POST",
  EDIT_COMMENT_FETCH_DATA = "EDIT_COMMENT_FETCH_DATA",
  EDIT_COMMENT = "EDIT_COMMENT",
}

export type IPost = {
  id: number;
  author: string;
  postText: string;
  picturePost: string | null;
  countLikes: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
};

export type IComment = {
  id: number;
  author: string;
  commentText: string;
  countCommentsLikes: number;
  createdAt: string;
  updatedAt: string;
  postId: number;
  userId: number;
};

export type PostState = {
  posts: {
    data: IPost[];
  };
  post: {
    data: {
      post: {};
      commentsPost: IComment[];
    };
  };
  loading: boolean;
};

export type SetFetchPostsDataAction = {
  type: PostActionTypes.SET_FETCH_POSTS_DATA;
  payload: { data: IPost[] };
};
export type AddPostAction = {
  type: PostActionTypes.ADD_POST;
  payload: { data: IPost };
};
export type SetFetchPostsItemDataAction = {
  type: PostActionTypes.SET_FETCH_POSTS_ITEM_DATA;
  payload: { data: IPost[] };
};
export type AddCommentAction = {
  type: PostActionTypes.ADD_COMMENT;
  payload: { data: Array<IComment> };
};
export type RemoveCommentAction = {
  type: PostActionTypes.REMOVE_COMMENT;
  payload: { data: IComment };
};
export type RemovePostFetchDataAction = {
  type: PostActionTypes.REMOVE_POST_FETCH_DATA;
  payload: any;
};
export type EditPostFetchDataAction = {
  type: PostActionTypes.EDIT_POST_FETCH_DATA;
  payload: any;
};
export type EditCommentFetchDataAction = {
  type: PostActionTypes.EDIT_COMMENT_FETCH_DATA;
  payload: any;
};
export type PostAction =
  | SetFetchPostsDataAction
  | AddPostAction
  | SetFetchPostsItemDataAction
  | AddCommentAction
  | RemoveCommentAction
  | RemovePostFetchDataAction
  | EditPostFetchDataAction
  | EditCommentFetchDataAction;
