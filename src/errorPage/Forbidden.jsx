import { Link } from "react-router-dom";


const Forbidden = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
        <div className="flex flex-col items-center justify-center px-5 text-center">
          <h1 className="text-8xl font-extrabold mb-4">403</h1>
          <h2 className="text-4xl font-semibold mb-8">Access Forbidden</h2>
          <p className="text-lg mb-8">
            You do not have permission to view this page.
          </p>
          <div className="flex space-x-4">
            <Link to="/" className="px-6 py-3 font-semibold bg-[#264065] text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              Go to Home
            </Link>
            <Link to="/contact" className="px-6 py-3 font-semibold bg-[#264065] text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          Go Back
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Forbidden;