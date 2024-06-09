import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AllCategory from "../pages/allCategory/AllCategory";
// import { Root } from "postcss";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Root from "../../Root";
import CheckOut from "../pages/checkout/CheckOut";
// import AddToCart1 from "../pages/addToCart1/AddToCart1";
// import ProductDetails1 from "../pages/productDetails1/ProductDetails1";
// import SubCategory1 from "../pages/subCategory1/SubCategory1";
// import Item from "../pages/item/Item";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";
import Landing from "../pages/landing/Landing";
import Category from "../pages/category/Category";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Form from '../pages/landing/files/From'
import Profile from "../pages/profile/Profile";






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
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/product',
        element: <Product/>
      },
      {
        path: '/category',
        element: <Category/>
      },
      {
        path: '/landing',
        element: <Landing/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/registration',
        element: <Registration/>
      },
      {
        path: '/form',
        element: <Form/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
    ]
      
    },
  
  ]);