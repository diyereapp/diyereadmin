import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Skills from "./Pages/Skills/Skills";
import Users from "./Pages/User/Users";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserDetils from "./Pages/User/UserDetils";
import OrderList from "./Pages/Order/OrderList";
import ProductList from "./Pages/products/ProductList";
import ProductDetails from "./Pages/products/ProductDetails";
import OrderDetails from "./Pages/Order/OrderDetails";
import NewCategory from "./Pages/Skills/NewCategory";
import AddProduct from "./Pages/products/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login/>,
    element: <Dashboard />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/category",
    element: <Skills />,
  },
  {
    path: "/add-category",
    element: <NewCategory />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/orders",
    element: <OrderList />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },

  {
    path: "/user/:id",
    element: <UserDetils />,
  },
  {
    path: "/order/:id",
    element: <OrderDetails />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
