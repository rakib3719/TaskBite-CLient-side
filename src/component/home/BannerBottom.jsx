import { FaBuffer, FaRecycle, FaRegStar } from "react-icons/fa";

const BannerBottom = () => {
    return (
        <div className="flex space-y-8 justify-center px-2  flex-col lg:flex-row items-center py-12 bg-gray-100 gap-4">
            <p className="font-work-sense text-gray-600 text-center lg:text-left">Flourish in a thriving freelance ecosystem dedicated <br /> to excellence and limitless opportunities.</p>

            <div className="text-center space-y-2 lg:border-r lg:border-gray-400 px-8">
                <FaRegStar className="text-center text-[#0bb990] text-5xl mx-auto"/>
                <h1 className="text-2xl font-semibold">4.91/5</h1>
                <p className="font-work-sense text-gray-600">Average rating for work with tech talent.</p>
            </div>
            <div className="text-center px-8 lg:border-r lg:border-gray-400 space-y-2">
                <FaRecycle className="text-center text-[#0bb990] text-5xl mx-auto"/>
                <h1 className="text-2xl font-semibold">211K+ contracts</h1>
                <p className="font-work-sense text-gray-600">Engaged in development & IT work in the past year.</p> <p className="font-work-sense text-gray-600">Engaged in development & IT work in the past year.</p>
            </div>
            <div className="text-center px-8  space-y-2">
                <FaBuffer className="text-center text-[#0bb990] text-5xl mx-auto"/>
                <h1 className="text-2xl font-semibold">1,665 skills</h1>
                <p className="font-work-sense text-gray-600">Backed by talent on Workreap.</p>
            </div>
        </div>
    );
};

export default BannerBottom;