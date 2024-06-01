import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/basicLayout/Main";
import Login from "../pages/basicPages/authantication/Login";
import Registar from "../pages/basicPages/authantication/Registar";
import Home from "../pages/basicPages/home/Home";
import DashBoardLayout from "../layout/dashBoardLayout/DashBoardLayout";

export  const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
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
    path:'/registar',
    element:<Registar></Registar>
}


    ]
},
{
    path:'/dashboard',
    element:<DashBoardLayout></DashBoardLayout>
}

])