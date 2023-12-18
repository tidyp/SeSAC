import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Memo from './Memo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/memo", element: <Memo /> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
