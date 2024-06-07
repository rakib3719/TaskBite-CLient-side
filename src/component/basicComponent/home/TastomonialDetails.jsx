
import PropTypes from 'prop-types';

const TastomonialDetails =({data}) => {
    return (
        <div>
            <section className="p-6">
	<div className="container max-w-xl mx-auto">
		<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
			<img src={data.img} alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
			<blockquote className="max-w-lg text-lg italic font-medium text-center">{data?.brief_quotes}</blockquote>
			<div className="text-center dark:text-gray-600">
				<p>{data?.name}</p>
				
			</div>
			
		</div>
	</div>
</section>
        </div>
    );
};

TastomonialDetails.propTypes = {
    data: PropTypes.object
};

export default TastomonialDetails;