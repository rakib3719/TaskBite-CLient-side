import { RotatingLines } from "react-loader-spinner";


const ButtonLoader = () => {
    return (
        <RotatingLines
        visible={true}
        height="32"
        width="32"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    );
};

export default ButtonLoader;