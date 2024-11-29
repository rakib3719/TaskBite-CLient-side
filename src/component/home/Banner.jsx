
import bgImg from '../../assets/image/bgImg.png'
import leftImg from '../../assets/image/banner-image.png'
import SearchBar from './SearchBar';
import icon1 from '../../assets/image/airbnb.svg'
import icon2 from '../../assets/image/trello.svg'
import icon3 from '../../assets/image/intercom.svg'
import icon4 from '../../assets/image/microsoft.svg'
import BannerBottom from './BannerBottom';

const Banner = () => {


    return (
        <div
        className="pb-20 pt-44  bg-cover "
        style={{
          backgroundImage: `url(${bgImg})`,
        } } >
     
      <div className='md:flex mx-auto max-w-[1500px] -mt-12 items-center px-2 text-center md:text-left md:px-8'>
        <section>
<h1 className='text-3xl  font-bold font-raleway'>Thrive in the World of Freelance Excellence Marketplace!</h1>
<p className='text-gray-500 mt-4 font-lg font-work-sense'>Flourish in a thriving freelance ecosystem dedicated to excellence and limitless opportunities.</p>

<SearchBar/>
<p className='text-gray-400 font-work-sense mt-6'>Trusted by</p>

<div className='flex flex-wrap gap-3 justify-center lg:justify-start mt-2'>
<img src={icon1} alt="" />
<img src={icon2} alt="" />
<img src={icon3} alt="" />
<img src={icon4} alt="" />
</div>
        </section>
        <section className='mt-8 md:mt-0'>

            <img src={leftImg} alt="" />
        </section>
      </div>
      <BannerBottom/>
      </div>
    );
};

export default Banner;