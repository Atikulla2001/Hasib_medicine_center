import React from 'react'

import {
  createBrowserRouter, RouterProvider,
} from "react-router";

// import file //

import Page_not_found from './page/Page_not_found';
import Home from './page/Home';
import Login from './page/Login';
import Registration from './page/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "*",
    element: <Page_not_found />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
