import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/basicLayout/Main";
import Login from "../pages/basicPages/authantication/Login";
import Registar from "../pages/basicPages/authantication/Registar";

export  const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
    children:[

{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/registar',
    element:<Registar></Registar>
}


    ]
}

])