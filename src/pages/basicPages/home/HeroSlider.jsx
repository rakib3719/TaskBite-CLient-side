import PropTypes from 'prop-types';

import img2 from '../../../assets/image/this.png'
import img from '../../../assets/image/unsplash_RnCPiXixooY.png'
import { Link } from 'react-router-dom';

const HeroSlider = ({heading, title,photo}) => {
    return (
        <div className='mt-8'>
            <div className='rounded-md text-gray-800' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl leading-none font-bold sm:text-4xl text-white">{heading}
                        </h1>
                        <p className="mt-6 mb-8 sm:text-lg sm:mb-12 text-white">
                            <br className="hidden md:inline lg:hidden" /> {title}
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" to="dashboard/adminHome" className="px-8 py-3 text-lg font-semibold rounded bg-[#264065] text-white">Go To Dashboard</Link>
                            <Link to={'/registar'} rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded text-white border-white">Registration</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={photo} alt="" className="object-contain h-72 sm:h-96 border-8 rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSlider.propTypes = {
    heading: PropTypes.string,
    title: PropTypes.string
};

export default HeroSlider;
