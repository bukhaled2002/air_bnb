import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";
import Stay from "./pages/Stay";
import Experiences from "./pages/Experiences";
import ExperiencesOnline from "./pages/OnlineExperiences";
// import  from "@reduxjs/toolkit"
import {  store } from "./store/store";
import Place from "./pages/Place";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import DUMMY_DATA from "./store/data";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    path: "/",
    errorElement: <Error />,
    children: [
      { element: <Stay />, index: true },
      { element: <Experiences />, path: "/experiences" },
      { element: <ExperiencesOnline />, path: "/online-experiences" },
      { element: <Place />, path: "/places/:id" },
    ],
  },
  { element: <Login />, path: "/login", errorElement: <Error /> },
  { element: <Register />, path: "/register", errorElement: <Error /> },
]);

function App() {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    <ToastContainer/>
    </>
  );
}

export default App;
