
import PropTypes from 'prop-types';
import img from '../../../assets/image/unsplash_RnCPiXixooY.png'
import img2 from '../../../assets/image/this.png'

const HeroSlider =( {heading, title, photo}) => {
    return (
        <div  >
            <div className="" style={{backgroundImage: `url(${img})`}}>
  {/* <div className="hero-overlay bg-opacity-60"></div> */}
  <div className="flex  flex-col sm:flex-row justify-between items-center text-center text-neutral-content">
  <div className="sm:w-[70%] ml-4 md:ml-8  py-8 sm:ml-16">
      <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold"> Quality Jute & wooden Crafts Products For Your Demand </h1>
      <p className="mb-5 w-[80%] mx-auto ">

        From 1999 we have work tirelessly to earan our repotation quality and dependavility in all Jute & wooden Crafts Products we offer
      </p>
      <button className="btn text-white border-none bg-[#847B4F]">Check Service</button>
      <button className="btn  text-white bg-transparent ml-4 ">Check Service</button>
    </div>

   

<div className='ml-auto   '>

<img src={photo} alt="" className='  min-h-full w-[100%] md:border-0' />
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