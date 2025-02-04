
import PropTypes from 'prop-types';
const FeatureCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="relative bg-gradient-to-br  border rounded-lg   transition transform hover:scale-105 hover:shadow-sm p-6 m-5">
            <div className="absolute h-1"></div>
            <div className="items-center">
                <div className="flex-shrink-0 w-16 h-16 flex justify-center mb-4 items-center bg-white rounded-full shadow mr-6">
                    <Icon size={30} className="text-[#264065]" />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-raleway font-semibold text-[#264065] mb-2">{title}</h3>
                    <p className="text-gray-700 font-work-sense">{description}</p>
                </div>
            </div>
        </div>
    );
};

FeatureCard.propTypes = {
    icon: PropTypes.icon,
    title: PropTypes.title,
    description: PropTypes.string

};
export default FeatureCard;
