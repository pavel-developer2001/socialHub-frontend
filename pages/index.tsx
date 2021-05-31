import { Router, useRouter } from "next/dist/client/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUsers } from "../store/reducers/userReducer";

import MainLayout from "../layouts/MainLayout";

import { wrapper } from "../store";
import { END } from "redux-saga";

//TODO:  3 Сделать Auth 5 Сделать получение и добавления постов

const Home = () => {
  const router = useRouter();

  //@ts-ignore
  const { token } = useSelector((state) => state.user);
  //@ts-ignore
  const state = useSelector((state) => state.user.users);
  console.log(token);
  console.log(state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setToken(localStorage.getItem("token")));
  }, [token]);

  // if (!token) return
  // React.useEffect(() => {
  // if (!token) {
  //   router.push("/login");
  // } else {
  //   router.push("/");
  // }
  // });

  return <MainLayout>лента</MainLayout>;
};
// export const getStaticProps = async function () {
//   // Get the user's session based on the request
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  //@ts-ignore
  if (!store.getState().placeholderData) {
    store.dispatch(setUsers());
    store.dispatch(END);
  }
  //@ts-ignore
  await store.sagaTask.toPromise();
});
export default Home;
