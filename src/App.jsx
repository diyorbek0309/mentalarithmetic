import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutApp";
import Flashcard from "./pages/Flashcard";
import First from "./pages/First";
import Second from "./pages/Second";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-app" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
        <Route path="flashcard" element={<Flashcard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
