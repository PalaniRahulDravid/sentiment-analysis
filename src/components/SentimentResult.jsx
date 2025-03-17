import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SentimentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { review } = location.state || {};
  const [sentiment, setSentiment] = useState("Loading...");

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const response = await fetch("http://localhost:5000/sentiments");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        console.log("Fetched data:", data);

        // Finding the best match for the review (supports partial matching)
        const matchedReview = data.find((item) => 
          item.review.toLowerCase().includes(review.toLowerCase()) // Partial match support
        );

        console.log("Matched Review:", matchedReview);

        if (matchedReview) {
          setSentiment(matchedReview.sentiment);
        } else {
          setSentiment("Sentiment Not Found ❌");
        }
      } catch (error) {
        console.error("Error fetching sentiment:", error);
        setSentiment("Error fetching sentiment ❌");
      }
    };

    if (review) {
      fetchSentiment();
    } else {
      setSentiment("No review provided ❌");
    }
  }, [review]);

  if (!review || review.trim() === "") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Sentiment Analysis Result</h2>
          <p className="text-gray-600 text-lg mb-4">
            <span className="font-semibold text-gray-800">Review:</span> Please enter a review 🤔
          </p>
          <button
            onClick={() => navigate("/review")}
            className="mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
          >
            Analyze Another Review 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Sentiment Analysis Result</h2>
        <p className="text-gray-600 text-lg mb-4">
          <span className="font-semibold text-gray-800">Review:</span> {review}
        </p>
        <div
          className={`text-xl font-bold p-3 rounded-lg ${
            sentiment.includes("Positive") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          Sentiment: {sentiment}
        </div>
        <button
          onClick={() => navigate("/review")}
          className="mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        >
          Analyze Another Review 🔄
        </button>
      </div>
    </div>
  );
};

export default SentimentResult;
