import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import WhoWeAre from "../pages/WhoWeAre";
import WhatWeDo from "../pages/WhatWeDo";
import OurPartners from "../pages/OurPartners";
import ContactUs from "../pages/ContactUs";

const router =createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
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
                path:'/who_we_are',
                element:<WhoWeAre></WhoWeAre>
            },
            {
                path:'/what_we_do',
                element:<WhatWeDo></WhatWeDo>
            },
            {
                path:'/partners',
                element:<OurPartners></OurPartners>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default router;