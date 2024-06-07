import { Bars } from "react-loader-spinner";


const BarsLoading = () => {
    return (
        <div>
         <div  className='flex items-center mt-28 justify-center'>

<Bars
        
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}

    
      ></Bars>
        </div>   
        </div>
    );
};

export default BarsLoading;