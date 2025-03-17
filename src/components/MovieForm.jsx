import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieForm = () => {
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result", { state: { review } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Enter Movie Review 🎬
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
            placeholder="Write your review here..."
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
          >
            Analyze Sentiment 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
