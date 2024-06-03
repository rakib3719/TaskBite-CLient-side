import { FaCoins, FaDollarSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PurcessCoin = () => {
    const navigate = useNavigate();

    const handlePayment = (price) => {
        navigate(`/dashboard/pay/${price}`);
    };

    return (
        <div className="flex flex-col items-center justify-center px-8 py-12 bg-gray-100 min-h-screen">
            <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">Purchase Coins</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div
                    onClick={() => handlePayment(1)}
                    className="card cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
                >
                    <div className="flex justify-center mb-4">
                        <FaCoins className="text-4xl text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center">10 Coins</h2>
                    <p className="text-xl text-gray-600 mt-4 text-center flex justify-center items-center">
                        <FaDollarSign className="mr-2" /> 1.00
                    </p>
                </div>
                <div
                    onClick={() => handlePayment(9)}
                    className="card cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
                >
                    <div className="flex justify-center mb-4">
                        <FaCoins className="text-4xl text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center">100 Coins</h2>
                    <p className="text-xl text-gray-600 mt-4 text-center flex justify-center items-center">
                        <FaDollarSign className="mr-2" /> 9.00
                    </p>
                </div>
                <div
                    onClick={() => handlePayment(19)}
                    className="card cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
                >
                    <div className="flex justify-center mb-4">
                        <FaCoins className="text-4xl text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center">500 Coins</h2>
                    <p className="text-xl text-gray-600 mt-4 text-center flex justify-center items-center">
                        <FaDollarSign className="mr-2" /> 19.00
                    </p>
                </div>
                <div
                    onClick={() => handlePayment(39)}
                    className="card cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
                >
                    <div className="flex justify-center mb-4">
                        <FaCoins className="text-4xl text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 text-center">1000 Coins</h2>
                    <p className="text-xl text-gray-600 mt-4 text-center flex justify-center items-center">
                        <FaDollarSign className="mr-2" /> 39.00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PurcessCoin;
