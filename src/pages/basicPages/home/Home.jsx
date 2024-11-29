import Banner from "../../../component/home/Banner";
import Hero from "../../../component/basicComponent/heroSection/Hero";
import Feture from "../../../component/basicComponent/home/Feture";
import Tastomonial from "../../../component/basicComponent/home/Tastomonial";
import TopEarners from "../../../component/basicComponent/home/TopEarners";
import Steps from "./Steps";
import MarqueeSlide from "../../../component/home/Marquee";
import Category from "../../../component/home/Category";



const Home = () => {
    return (
        <div>
<Banner/>
<MarqueeSlide/>
<div className="max-w-[1500px] mx-auto px-2 ">
    <Category/>
    <Feture></Feture>
    <Steps></Steps>
<TopEarners></TopEarners>
</div>



<Tastomonial></Tastomonial>
        </div>
    );
};

export default Home;