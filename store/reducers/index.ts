import { groupReducer } from "./groupReducer";
import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";
import { groupPostReducer } from "./groupPostReducer";
import { groupCommentReducer } from "./groupCommentReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  group: groupReducer,
  groupPost: groupPostReducer,
  groupComment: groupCommentReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
