import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import WhoWeAre from "../pages/WhoWeAre";
import WhatWeDo from "../pages/WhatWeDo";
import OurPartners from "../pages/OurPartners";
import ContactUs from "../pages/ContactUs";
import CampaignList from "../pages/CampaignList";
import CampaignDetails from "../pages/CampaignDetails";
import CreateCampaign from "../pages/CreateCampaign";
import Admin from "../pages/Admin";


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
            },
            {
                path:'/campaigns',
                element:<CampaignList></CampaignList>
            },
            {
                path:'/campaign/:id',
                element:<CampaignDetails></CampaignDetails>
            },
            {
                path:'/create-campaign',
                element:<CreateCampaign></CreateCampaign>
            },
            {
                path:'/admin',
                element:<Admin></Admin>
            }

        ]
    }
])

export default router;