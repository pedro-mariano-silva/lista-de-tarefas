import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import { DB } from "./mock/tasks.mock";
import "./index.scss";

const router = createBrowserRouter([{
  path: "/",
  element: <Home data={DB}/>,
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
