import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="Navbar">
      <h2>MentaLArifmetikA</h2>
      <div>
        <Link to="contact">Aloqa</Link>
        <Link to="about-app">Dastur haqida</Link>
      </div>
      <div>
        <select name="lang">
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <button onClick={() => setIsLight(!isLight)}>
          {isLight ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
