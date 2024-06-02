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
import MyTask from "../pages/dashBoardPages/myTaskForCreator/MyTask";
import PurcessCoin from "../pages/dashBoardPages/purcessCoin/PurcessCoin";
import Payment from "../pages/dashBoardPages/payment/Payment";
import PaymentHistory from "../pages/dashBoardPages/payment/PaymentHistory";
import HomeCreator from "../pages/dashBoardPages/home/HomeCreator";
import AllTask from "../pages/dashBoardPages/worker/tasklist/AllTask";
import TaskDetails from "../component/dashBoardComponent/allTakCard/TaskDetails";

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

    },

    {

path:'myTask',
element:<CreatorPrivateRoutes>

<MyTask></MyTask>
</CreatorPrivateRoutes>

    },
    {

        path:'purcessCoin',
        element:<CreatorPrivateRoutes>

<PurcessCoin></PurcessCoin>
        </CreatorPrivateRoutes>
    },
    
    
    {

path:'pay/:price',
element:<CreatorPrivateRoutes>

<Payment></Payment>
</CreatorPrivateRoutes>


    },
    {
        path:'paymentHistory',
        element: <CreatorPrivateRoutes>


<PaymentHistory></PaymentHistory>
        </CreatorPrivateRoutes>
    },

    {
        path:'creatorHome',
        element:<CreatorPrivateRoutes>

            <HomeCreator></HomeCreator>
        </CreatorPrivateRoutes>
    },

    // worker routes


    {
path:'allTaksList',
element:<PrivateRoute>
    <AllTask></AllTask>
</PrivateRoute>
    
    },
    {
        path:'taskDetails/:id',
        element: <PrivateRoute>

            <TaskDetails></TaskDetails>
        </PrivateRoute>
    }



]
},
{
    path:'/forbidden',
    element:<Forbidden></Forbidden>
},


])