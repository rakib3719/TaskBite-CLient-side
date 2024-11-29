import img1 from '../../assets/image/category-music.jpg'
import img2 from '../../assets/image/category-ai.jpg'
import img3 from '../../assets/image/category-programming.jpg'
import img4 from '../../assets/image/category-graphic.jpg'
import img5 from '../../assets/image/category-digital-marketing.jpg'

import Slider from 'react-slick';
const Category = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="mt-16 px-8">
            <div className="space-y-3 ">
            <h4 className="text-[#0bb990] font-work-sense font-semibold text-lg">Boost Your Working Flow</h4>
            <h1 className="font-raleway font-bold text-3xl">Your One-Stop Online Marketplace for <br />  Everything You Need</h1>
            <p className="font-work-sense text-gray-600">Your premier online marketplace. Find quality products and services, connect with trusted <br /> sellers, and enjoy a seamless shopping experience today</p>
            </div>

          

           <Slider {...settings}>
           <div className='mt-16'>

           <div className='relative  group'>
  <img src={img1} alt="" className='rounded-[30px]' />

  <div className='absolute bottom-12 left-8 bg-transparent'>
    <h1 className='text-3xl font-bold text-white'>Music And Audio</h1>
  </div>

  <div className='bg-white p-3 rounded-lg absolute top-4 right-4'>
    <p className='text-gray-800'> 2 listings </p>
  </div>

  {/* View All Button */}
  <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
    <button className='bg-[#0a7058] text-white py-2 px-6 rounded shadow-lg hover:bg-[#034336] focus:outline-none'>
      See Workers
    </button>
  </div>
</div>


     </div>
           <div className='mt-16 ml-8'>

           <div className='relative  group'>
  <img src={img2} alt="" className='rounded-[30px]' />

  <div className='absolute bottom-12 left-8 bg-transparent'>
    <h1 className='text-3xl font-bold text-white'>Smart ai service</h1>
  </div>

  <div className='bg-white p-3 rounded-lg absolute top-4 right-4'>
    <p className='text-gray-800'> 7 listings </p>
  </div>

  {/* View All Button */}
  <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
    <button className='bg-[#0a7058] text-white py-2 px-6 rounded shadow-lg hover:bg-[#034336] focus:outline-none'>
      See Workers
    </button>
  </div>
</div>


     </div>
           <div className='mt-16 ml-16 mr-8'>

           <div className='relative  group'>
  <img src={img3} alt="" className='rounded-[30px]' />

  <div className='absolute bottom-12 left-8 bg-transparent'>
    <h1 className='text-3xl font-bold text-white'>Pogramming Tech</h1>
  </div>

  <div className='bg-white p-3 rounded-lg absolute top-4 right-4'>
    <p className='text-gray-800'> 16 listings </p>
  </div>

  {/* View All Button */}
  <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
    <button className='bg-[#0a7058] text-white py-2 px-6 rounded shadow-lg hover:bg-[#034336] focus:outline-none'>
      See Workers
    </button>
  </div>
</div>


     </div>
           
           <div className='mt-16 ml-28'>

           <div className='relative  group'>
  <img src={img4} alt="" className='rounded-[30px]' />

  <div className='absolute bottom-12 left-8 bg-transparent'>
    <h1 className='text-3xl font-bold text-white'>Grapics Design</h1>
  </div>

  <div className='bg-white p-3 rounded-lg absolute top-4 right-4'>
    <p className='text-gray-800'> 16 listings </p>
  </div>

  {/* View All Button */}
  <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
    <button className='bg-[#0a7058] text-white py-2 px-6 rounded shadow-lg hover:bg-[#034336] focus:outline-none'>
      See Workers
    </button>
  </div>
</div>


     </div>
           <div className='mt-16 ml-40'>

           <div className='relative  group'>
  <img src={img5} alt="" className='rounded-[30px]' />

  <div className='absolute bottom-12 left-8 bg-transparent'>
    <h1 className='text-3xl font-bold text-white'>Grapics Design</h1>
  </div>

  <div className='bg-white p-3 rounded-lg absolute top-4 right-4'>
    <p className='text-gray-800'> 16 listings </p>
  </div>

  {/* View All Button */}
  <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
    <button className='bg-[#0a7058] text-white py-2 px-6 rounded shadow-lg hover:bg-[#034336] focus:outline-none'>
      See Workers
    </button>
  </div>
</div>


     </div>
           

           </Slider>
        </div>
    );
};

export default Category;