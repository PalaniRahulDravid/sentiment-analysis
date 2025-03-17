import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieForm from "./components/MovieForm";
import SentimentResult from "./components/SentimentResult";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<MovieForm />} />
        <Route path="/result" element={<SentimentResult />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
