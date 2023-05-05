import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Flashcard from "./pages/Flashcard";
import First from "./pages/First";
import Second from "./pages/Second";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="flashcard" element={<Flashcard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
