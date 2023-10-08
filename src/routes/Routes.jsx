/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Allcourse from "../pages/Allcourse/Allcourse";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const router =createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () =>fetch('event.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allcourse',
                element:<Allcourse></Allcourse>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
      },
])

export default router;