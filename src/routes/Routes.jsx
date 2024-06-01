import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AllCategory from "../pages/allCategory/AllCategory";
// import { Root } from "postcss";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Root from "../../Root";
import CheckOut from "../pages/checkout/CheckOut";
import AddToCart1 from "../pages/addToCart1/AddToCart1";
import ProductDetails1 from "../pages/productDetails1/ProductDetails1";
import SubCategory1 from "../pages/subCategory1/SubCategory1";






export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/allCategory',
        element: <AllCategory/>
      },
      {
        path: '/checkout',
        element: <CheckOut/>
      },
      {
        path: '/addToCart1',
        element: <AddToCart1/>
      },
      {
        path: '/productDetails1',
        element: <ProductDetails1/>
      },
      {
        path: '/subCategory1',
        element: <SubCategory1/>
      },
    ]
      
    },
  
  ]);