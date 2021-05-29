import React, { FC } from "react";
import { AppProps } from "next/app";
import { wrapper } from "../store";
import withReduxSaga from "next-redux-saga";
import "../styles/globals.css";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(withReduxSaga(WrappedApp));
