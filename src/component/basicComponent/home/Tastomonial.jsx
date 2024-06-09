import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
import TastomonialDetails from './TastomonialDetails';
import { Zoom } from 'react-awesome-reveal';
const tastomonial = [
    {
        "name": "Maria Fasil",
        "brief_quotes": "This platform has revolutionized the way I complete tasks. The rewards system is amazing, and I appreciate how easy it is to navigate and find tasks that suit my skills.",
        "img": "https://i.ibb.co/Dwm9Yss/portrait-beautiful-smiling-woman-with-folded-hands-isolated-yellow-studio.jpg"
    },
    {
        "name": "Marjana Kabir",
        "brief_quotes": "I've earned so many coins by completing tasks on this platform. The interface is user-friendly and efficient, making it a breeze to find and complete tasks quickly.",
        "img": "https://i.ibb.co/c3t7C2v/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg"
    },
    {
        "name": "Saifur Rahman Atik",
        "brief_quotes": "Great platform for both task creators and workers. The task management tools are top-notch, and the support team is always there to help. Highly recommend this service!",
        "img": "https://i.ibb.co/cNY04S0/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray.jpg"
    },
    {
        "name": "Emily Davis",
        "brief_quotes": "I love the secure payment system. It ensures I get paid on time every time. The transparency and reliability of this platform are truly commendable.",
        "img": "https://i.ibb.co/wN0jD0t/bohemian-man-with-his-arms-crossed.jpg"
    },
    {
        "name": "Muntaha Rahman",
        "brief_quotes": "Creating tasks and managing them is a breeze on this platform. The user interface is intuitive, and the customer support is excellent, always ready to assist with any issues.",
        "img": "https://i.ibb.co/VpMyRpD/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg"
    },
    {
        "name": "Sarah Brown",
        "brief_quotes": "The best part is earning rewards for every task completed. It's motivating and fun, and the variety of tasks available keeps me engaged and constantly learning new things.",
        "img": "hhttps://i.ibb.co/7VR9dZ2/happy-excited-lady-enjoying-phone-talk.jpg"
    },
    {
        "name": "David Wilson",
        "brief_quotes": "This marketplace has a robust authentication system that makes me feel secure while using it. The overall experience is seamless, and I trust this platform with my tasks.",
        "img": "https://i.ibb.co/fx3PsMQ/cheerful-intelligent-man-reading-message-phone.jpg"
    },
    {
        "name": "Laura Martin",
        "brief_quotes": "The dashboard is very informative and helps me track my earnings and submissions easily. It's a comprehensive tool that simplifies the task management process for me.",
        "img": "https://i.ibb.co/BgbCt1q/close-up-portrait-young-smiling-man-171337-20064.jpg"
    },
    {
        "name": "James White",
        "brief_quotes": "The task creation process is simple and straightforward. Plus, I get to manage everything efficiently. This platform has significantly improved my productivity and earnings.",
        "img": "https://i.ibb.co/D8VVgvB/handsome-bearded-businessman-rubbing-hands-having-deal-176420-18778.jpg"
    },
    {
        "name": "Jessica Green",
        "brief_quotes": "I appreciate the clear guidelines and easy-to-navigate UI. It's a great platform for earning extra money, and the support team is always there to help when needed.",
        "img": "https://i.ibb.co/vP9S4L3/young-brunette-woman-cozy-winter-clothes-273609-41786.jpg"
    }
]


const Tastomonial = () => {
    return (
        <div className='mt-28 font-raleway '>



            <h1 data-aos="fade-down" data-aos-duration={1200}  className='font-bold text-3xl text-center mb-16p'> Testimonial</h1>
      


<Zoom duration={3000}>

<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
         
        }}
        pagination={{
            clickable: true, 
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

{

tastomonial.map((data,idx )=> <SwiperSlide

key={idx}

>
<TastomonialDetails data={data}></TastomonialDetails>


</SwiperSlide>)}

       
    
      
     
      </Swiper>

</Zoom>
        </div>
    );
};

export default Tastomonial;