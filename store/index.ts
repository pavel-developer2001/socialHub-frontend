import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, compose, createStore } from "redux";
import { reducer, RootState } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga";
const sagaMiddleware = createSagaMiddleware();

//@ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(reducer, applyMiddleware());

// export an assembled wrapper
// makeStore.sagaTask = sagaMiddleware.run(rootWatcher);
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
// sagaMiddleware.run(rootWatcher);
// export type NextSagaDispatch = SagaDispatch<RootState, void, AnyAction>;
