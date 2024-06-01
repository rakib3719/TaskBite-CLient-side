// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay, Pagination, Scrollbar,A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import HeroSlider from '../../../pages/basicPages/home/HeroSlider';
import image from '../../../assets/image/Discover.png'


const Hero = () => {
    return (
        <div>
          <Swiper 
   modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
navigation

   
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}


speed={1500}
autoplay={{
    delay: 2000,
  
    disableOnInteraction: false,
  }}
   

>
<SwiperSlide   >
    
     </SwiperSlide>
<SwiperSlide   > {image}</SwiperSlide>
<SwiperSlide   > {image} </SwiperSlide>
<SwiperSlide   > <HeroSlider></HeroSlider> </SwiperSlide>


</Swiper>  
        </div>
    );
};

export default Hero;