import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/basicLayout/Main";
import Login from "../pages/basicPages/authantication/Login";
import Registar from "../pages/basicPages/authantication/Registar";
import Home from "../pages/basicPages/home/Home";
import DashBoardLayout from "../layout/dashBoardLayout/DashBoardLayout";
import PrivateRoute from "../secureRoutes/PrivateRoute";
import Forbidden from "../errorPage/Forbidden";
import AdminPrivateRoute from "../secureRoutes/AdminPrivateRoute";
import AddTask from "../pages/dashBoardPages/addTask/AddTask";
import CreatorPrivateRoutes from "../secureRoutes/CreatorPrivateRoutes";

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
    element:<PrivateRoute>

<DashBoardLayout></DashBoardLayout>

    </PrivateRoute>,
    children:[{

path:'manageUser',
element: 

<AdminPrivateRoute>

<p>this is pppp lorem1000</p>
</AdminPrivateRoute>


    },
    {

path:'addTask',
element:<CreatorPrivateRoutes>


<AddTask></AddTask>
</CreatorPrivateRoutes>

    }



]
},
{
    path:'/forbidden',
    element:<Forbidden></Forbidden>
},


])