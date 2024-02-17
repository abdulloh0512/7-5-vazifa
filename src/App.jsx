import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Use from "./pages/Use";
import { Provider } from "react-redux";
import store from "./Redux/Store";

import Post from "./components/Post";
import Put from "./components/Put";
import Update from "./components/Update";
import Delate from "./components/Delate";
import Headers from "./components/Headers";
import Body from "./components/Body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "use",
        element: <Use />,
        children: [
          {
            path: "post",
            element: <Post />,
            children: [
              {
                path: "headers",
                element: <Headers />,
              },
              {
                path: "body",
                element: <Body />,
              },
            ],
          },
          {
            path: "put",
            element: <Put />,
          },
          {
            path: "update",
            element: <Update />,
          },
          {
            path: "delate",
            element: <Delate />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
