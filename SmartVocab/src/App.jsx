import React from "react";
import Create from "./pages/createWord/create.jsx";
import Words from "./pages/Words/Words.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Words /></MainLayout>,
  },
  {
    path: "/create",
    element: <MainLayout><Create /></MainLayout>,
  },
  {
    path: "/settings",
    element: <MainLayout><Settings /></MainLayout>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
