
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";


const Footer = () => {

    
    return (
        <div className=" bg-[black] pb-4 mt-16 font-raleway"  >
           <div   className="w-[96%] lg:w-[90%] max-w-7xl mx-auto">





  

<div className="py-8">
<h4  className="sm:text-3xl  ml-4 sm:ml-0 text-xl font-bold text-white font-poppins mt-4" >TaskBite</h4>
</div>



  <div className="sm:flex ml-4 sm:ml-0 sm:text-left mx-auto justify-between items-center ">


{/* #0bb990 */}
<div  className="mt-4 text-white " >
<p  className="text-[#0bb990] mt-4 font-bold text-lg font-playFair" >Contact us</p>

<div  className="flex mt-4 mb-4 " >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#0bb990] w-10 h-1   " ></p>

</div>


    <p   className="flex gap-2 items-center text-lg">  <FaPhone  className="text-[#0bb990]"></FaPhone> 01608888888 </p>
    <p   className="flex gap-2 items-center text-lg">  <FaWhatsapp  className="text-[#0bb990]"></FaWhatsapp> 01900000000 </p>
    <p   className="flex gap-2 mt-2 items-center text-lg">  <CiMail  className="text-[#0bb990]"></CiMail> stsupport76769@gmail.com </p>
    <p   className="flex gap-2 mt-2 items-center text-lg">  <CiMail  className="text-[#0bb990]"></CiMail> bannah76769@gmail.com </p>
</div>

<nav className="flex flex-col text-white space-y-2">
<p  className="text-[#0bb990] mt-4 font-bold text-lg font-playFair" >Go To</p>

<div  className="flex mt-4 mb-4 " >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#0bb990] w-10 h-1   " ></p>

</div>
    <Link to='/' className="link link-hover">Home</Link>
    <Link to='/login' className="link link-hover">Log in</Link>
    <Link to='/registar' className="link link-hover">Registar</Link>
    <Link className="link link-hover"></Link>
  </nav> 
<nav className="flex flex-col space-y-2 text-white">
<p  className="text-[#0bb990] mt-4 font-bold text-lg font-playFair" >Action</p>

<div  className="flex mt-4 mb-4 " >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#0bb990] w-10 h-1   " ></p>

</div>
    <Link to='#feature' className="link link-hover"   >Feature</Link>
    <Link className="link link-hover" >Terms And Condition</Link>
    <Link  className="link link-hover">Testimonial</Link>
    <a className="link link-hover">Top Earner</a>
  </nav> 
</div>




























<div  className="text-white font-poppins grid grid-cols-3 items-center gap-4 mt-16">


<div className="left-row">


<p className="bg-[#8D8080] w-[100%] h-1" ></p>
    
</div>


<div className="icon  mx-auto">



<div className="flex gap-4" >

  <a href="https://www.facebook.com/msrh.koraibrakib/" target="blank">  <FaFacebook></FaFacebook></a>
<a href="https://x.com/MsrhBannah" target="blank">    <FaTwitter></FaTwitter></a>
<a href="https://www.instagram.com/msrhkoraib/" target="blank">    <FaInstagram></FaInstagram></a>
  <a href="https://www.linkedin.com/in/srakib/" target="blank">  <FaLinkedin  className="hidden sm:flex"></FaLinkedin></a>
</div>

</div>


<div className="right-row">
<p className="bg-[#8D8080] w-[100%] h-1 " >

  
</p>

</div>


</div>


           </div>



           <footer className="footer footer-center p-4 mt-4 text-white">
  <aside> 
 
    <p>Copyright © 2024 - All right reserved by Syed Rakib Hasan</p>

  </aside>
</footer>

        </div>
    );
};

export default Footer;