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
import { Header } from './assets/Component/Header/Header';
import Home from './assets/Component/Home/Home';
//simple route
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is default router</div>,
//   },
//   {
//     path: "/about",
//     element:<About></About> ,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

//nested route
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'about',
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <Header></Header> */}
    

  </React.StrictMode>,
)
