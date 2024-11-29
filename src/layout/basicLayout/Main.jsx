import { Outlet } from "react-router-dom";
import Navbar from "../../component/basicComponent/Navbar";
import Footer from "../../component/basicComponent/footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Main = () => {



    return (
        <div>
        <div  className=" ">
        {/* <div  className="  max-w-[1820px] mx-auto"> */}
      
      <div className=" max-w-[1500px]  mx-auto relative">
      <Navbar></Navbar>
      </div>
       
            <Outlet></Outlet>
        </div>

            <div>
            <Footer></Footer> 
            </div>

           
        </div>
    );
};

export default Main;