import { ColorRing } from "react-loader-spinner";


const RingLoading = () => {
    return (
        <div  className='flex items-center mt-28 justify-center'>

        <ColorRing
                
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
        
            
              ></ColorRing>
                </div>
    );
};

export default RingLoading;