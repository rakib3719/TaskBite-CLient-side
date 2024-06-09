// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay, Pagination, Scrollbar,A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import img from '../../../assets/image/unsplash_RnCPiXixooY.png'
import HeroSlider from '../../../pages/basicPages/home/HeroSlider';
import image1 from '../../../assets/image/this.png'
import image2 from '../../../assets/image/business-man-working-from-his-living-room_23-2149007834.jpg'
import image3 from '../../../assets/image/cover4.jpg'
import image4 from '../../../assets/image/young-business-typing-netbook-keyboard-listening-music_8353-5973.jpg'





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


<SwiperSlide   > <HeroSlider

heading={" Empower Your Freelance Journey with Us"}
title={' Discover and Complete High-Paying Tasks to Boost Your Freelance Career, Achieve Your Goals, and Maximize Your Earning Potential'}
photo={image1}
img={img}
></HeroSlider> </SwiperSlide>
<SwiperSlide   > <HeroSlider

heading={"Seamless Task Management System for You"}
title={'Create, Track, and Review Tasks with Ease Using Our Intuitive and User-Friendly Platform Designed for Efficient Task Management'}
photo={image2}
img={img}
></HeroSlider> </SwiperSlide>
<SwiperSlide   > <HeroSlider

heading={"Efficient Task Submission Process Here"}
title={'Submit Tasks, Receive Instant Feedback, and Track Your Progress Towards Approval and Payment with Our Streamlined Submission System'}
photo={image3}
img={img}
></HeroSlider> </SwiperSlide>
<SwiperSlide   > <HeroSlider

heading={" Join Our Growing Global Community Now"}
title={'Collaborate with Task Creators and Workers from Around the World to Achieve Greater Success and Foster Professional Relationships'}
photo={image4}
img={img}
></HeroSlider> </SwiperSlide>


</Swiper>  
        </div>
    );
};

export default Hero;