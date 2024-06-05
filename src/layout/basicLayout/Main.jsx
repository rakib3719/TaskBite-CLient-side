import { Outlet } from "react-router-dom";
import Navbar from "../../component/basicComponent/Navbar";
import Footer from "../../component/basicComponent/footer/Footer";


const Main = () => {



    return (
        <div>
        <div  className=" w-[94%] md:w-[90%] max-w-7xl mx-auto">
        {/* <div  className="  max-w-[1820px] mx-auto"> */}
        <Navbar></Navbar>
            <Outlet></Outlet>
        </div>

            <div>
            <Footer></Footer> 
            </div>

           
        </div>
    );
};

export default Main;