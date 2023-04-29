import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home/Home";
import Category from "../layouts/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../layouts/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
// import NewsLayout from "../layouts/NewsLayout";
// import News from "../layouts/News/News/News";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/categories/${params.id}`),
      },
    ],
  },
  // {
  //   path: "news",
  //   element: <NewsLayout></NewsLayout>,
  //   children: [
  //     {
  //       path: "news/:id",
  //       element: <News></News>,
  //       loader: ({ params }) =>
  //         fetch(`http://localhost:3000/news/${params.id}`),
  //     },
  //   ],
  // },

  {
    path: 'news', 
    element: <NewsLayout></NewsLayout>,
    children: [
        {
            path: ':id',
            element: <News></News>,
            loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
        }
    ]
}, 
]);

export default router;
