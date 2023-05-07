import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutApp";
import Flashcard from "./pages/Flashcard";
import Single from "./pages/Single";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Fast from "./pages/Fast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-app" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="single" element={<Single />} />
        <Route path="team" element={<Team />} />
        <Route path="fast" element={<Fast />} />
        <Route path="flashcard" element={<Flashcard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
