import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './componentes/Home/Home.jsx';
import Products from './componentes/Products/Products.jsx';
import Review from './componentes/Review/Review.jsx';
import Inventory from './componentes/Inventory/Inventory.jsx';
import LogIn from './componentes/LonIn/LogIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <Products></Products>
      },
      {
        path: 'review',
        element: <Review></Review>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
