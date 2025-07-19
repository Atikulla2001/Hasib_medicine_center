import React from 'react'

import {
  createBrowserRouter, RouterProvider,
} from "react-router";

// import file //

import Page_not_found from './page/Page_not_found';
import Home from './page/Home';
import Login from './page/Login';
import Registration from './page/Registration';
import Message from './page/Message';
import Rootlayout from './component/Rootlayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "message", Component: Message },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },
      // {
      //   path: "/message",
      //   Component: Message,
      // },
      {
        path: "/page_not_found",
        Component: Page_not_found,
      },


    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
