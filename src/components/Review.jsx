import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (review.trim() === "") {
      alert("Please enter a review before analyzing!");
      return;
    }

    // Review ni JSON Server ki POST cheyyadam
    try {
      const response = await fetch("http://localhost:5000/sentiments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review, sentiment: "Pending" }), // Default sentiment
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/result", { state: { review, sentiment: data.sentiment } });
      } else {
        console.error("Error submitting review");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Enter Your Review</h2>
        <textarea
          className="border p-2 w-full h-24 rounded-md"
          placeholder="Type your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          className="mt-4 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        >
          Analyze Sentiment
        </button>
      </div>
    </div>
  );
};

export default Review;
