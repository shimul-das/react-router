import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About } from './assets/Component/About/About';
import { Contact } from './assets/Component/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is default router</div>,
  },
  {
    path: "/about",
    element:<About></About> ,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
