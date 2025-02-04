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
import MySubmission from "../pages/dashBoardPages/worker/mySubmission/MySubmission";
import HomeWorker from "../pages/dashBoardPages/home/workerHome/HomeWorker";
import Withdrawals from "../component/dashBoardComponent/worker/Withdrawals";
import UpdateTask from "../component/dashBoardComponent/updateTask/UpdateTask";
import ManageUsers from "../pages/dashBoardPages/admin/ManageUsers";
import ManageTask from "../pages/dashBoardPages/admin/ManageTask";
import AdminHome from "../pages/dashBoardPages/admin/AdminHome";
import WorkerPrivateRoute from "../secureRoutes/WorkerPrivateRoute";
import Error from "../errorPage/Error";

export  const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
    errorElement:<Error></Error>,
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
    children:[
        
        // admit related route
        {

path:'manageUser',
element: 

<AdminPrivateRoute>
<ManageUsers></ManageUsers>
</AdminPrivateRoute>


    },

    {
        path:'manageTask',
        element:<AdminPrivateRoute>

            <ManageTask></ManageTask>
        </AdminPrivateRoute>
    },{
        path:'adminHome',
        element: <AdminPrivateRoute>

            <AdminHome></AdminHome>
        </AdminPrivateRoute>
    },

    // creator related routes
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
    {
path:'updateTask/:id',
element:<CreatorPrivateRoutes>
    <UpdateTask></UpdateTask>
</CreatorPrivateRoutes>
    },

    // worker routes


    {
path:'allTaksList',
element:
    <WorkerPrivateRoute>
        <AllTask></AllTask>
    </WorkerPrivateRoute>

    
    },
    {
        path:'taskDetails/:id',
        element: 

            <WorkerPrivateRoute>
                <TaskDetails></TaskDetails>
            </WorkerPrivateRoute>
       
    },
    {
        path:'mySubmission',
        element:

<WorkerPrivateRoute>

<MySubmission></MySubmission>
</WorkerPrivateRoute>

    
    },
    {
        path:'workerHome',
        element: 

<WorkerPrivateRoute>
<HomeWorker></HomeWorker>
</WorkerPrivateRoute>
            
        
    },{

        path:'withdrawals',
        element:

<WorkerPrivateRoute>

<Withdrawals></Withdrawals>
</WorkerPrivateRoute>
      
    }



]
},
{
    path:'/forbidden',
    element:<Forbidden></Forbidden>
},


])