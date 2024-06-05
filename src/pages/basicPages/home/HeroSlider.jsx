
import PropTypes from 'prop-types';

import img2 from '../../../assets/image/this.png'
import img from '../../../assets/image/unsplash_RnCPiXixooY.png'

const HeroSlider =( ) => {
    return (
//         <div  >
//             <div className="" style={{backgroundImage: `url(${img})`}}>
//   {/* <div className="hero-overlay bg-opacity-60"></div> */}
//   <div className="flex min-h-svh flex-col sm:flex-row justify-between items-center text-center text-neutral-content">
//   <div className="sm:w-[70%] ml-4 md:ml-8  py-8 sm:ml-16">
//       <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold"> Quality Jute & wooden Crafts Products For Your Demand </h1>
//       <p className="mb-5 w-[80%] mx-auto ">

//         From 1999 we have work tirelessly to earan our repotation quality and dependavility in all Jute & wooden Crafts Products we offer
//       </p>
//       <button className="btn text-white border-none bg-[#847B4F]">Check Service</button>
//       <button className="btn  text-white bg-transparent ml-4 ">Check Service</button>
//     </div>

   

// <div className='ml-auto   '>

// <img src={photo} alt="" className=' h-[100%]  md:border-0' />
// </div>
    
//   </div>
// </div>
//         </div>


<div  className='mt-8'>
 <div className={`  rounded-md text-gray-800`} style={{backgroundImage: `url(${img})`}} >
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="  text-3xl md:text-5xl font-bold leading-none sm:text-6xl">Start 
				<span className="dark:text-[#C24914]">learning </span>with us now!
			</h1>
			<p className="mt-6 mb-8 sm:text-lg sm:mb-12">Begin your educational voyage with our comprehensive platform! Explore varied assignments 
				<br  className="hidden md:inline lg:hidden" /> tailored to improve your skills and foster success.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#C24914] dark:text-gray-50">Start Assinment</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Registration</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={img2} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border-8 rounded-md" />
		</div>
	</div>
</div>
        </div>
    );
};

HeroSlider.propTypes = {
    heading:PropTypes.string,
    title:PropTypes.string
};

export default HeroSlider;