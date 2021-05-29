import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, compose, createStore } from "redux";
import { reducer, RootState } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga";
import { SagaReturnType } from "redux-saga/effects";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const makeStore: MakeStore<RootState> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  //@ts-ignore
  store.sagaTask = sagaMiddleware.run(rootWatcher);
  return store;
};

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

export type NextSagaDispatch = SagaReturnType<typeof sagaMiddleware>;
