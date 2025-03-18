import { Link } from "react-router-dom";
import SplashCursor from "../reactBit/SplashCursor";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white relative">
      <SplashCursor />
      <div className="text-center">
        <h1 className="text-5xl font-bold animate-pulse mb-6">
          Movie Review Sentiment Analysis 🎬
        </h1>
        <p className="text-lg mb-6">
          Enter your movie review and check the sentiment instantly!
        </p>
        <Link to="/review">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105 cursor-pointer">
            Get Started 🚀
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
