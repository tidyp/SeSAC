import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Memo from './Memo.jsx'
import Todo from './Todo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/memo", element: <Memo /> },
      { path: "/todo", element: <Todo /> }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
