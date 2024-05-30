import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AllCategory from "../pages/allCategory/AllCategory";
// import { Root } from "postcss";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Root from "../../Root";


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
    ]
      
    },
  
  ]);