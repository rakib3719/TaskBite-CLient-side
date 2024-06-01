import { Outlet } from "react-router-dom";
import Sidebar from "../../component/dashBoardComponent/sidebar/Sidebar";

import { IoIosNotifications } from "react-icons/io";
import DashbordMenu from "../../component/dashBoardComponent/DashbordMenu";
import useGetUser from "../../hook/useGetUser";
import { ColorRing } from "react-loader-spinner";
import RingLoading from "../../component/loader/RingLoading";

<IoIosNotifications />



const DashBoardLayout = () => {
const [, , isLoading] = useGetUser();
if(isLoading){
    return <RingLoading></RingLoading>
}

    return (
        <div>
       
<div className="hidden md:block">
<DashbordMenu


></DashbordMenu>
</div>
        
         {/* 
         
         
         Slightly Lighter Gray

Background: #3A3A3A
Provides subtle contrast while maintaining a cohesive dark theme.
Muted Blue

Background: #1F3A44
Adds a hint of color without overwhelming the dark theme.
Soft Black

Background: #1C1C1C
Slightly darker than the main background to create depth.
Dark Slate Gray

Background: #2F4F4F
A dark gray with a bluish tint, offering a slight variation.*/}



        


           <div className='relative  min-h-screen md:flex'>

      <Sidebar />


      <div className='flex-1 md:ml-64 mt-28'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div> 
        </div>
    );
};

export default DashBoardLayout;