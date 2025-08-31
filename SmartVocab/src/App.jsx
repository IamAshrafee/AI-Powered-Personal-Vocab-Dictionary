import React from "react";
import Create from "./pages/createWord/create.jsx";
import Words from "./pages/Words/Words.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Words />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/Settings",
    element: <Settings />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
