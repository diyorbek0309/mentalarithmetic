import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isLight, setIsLight] = useState(true);
  const navHome = useNavigate();

  return (
    <div className="Navbar">
      <h2 className="iconTitle" onClick={() => navHome("/")}>
        MentaLArifmetikA
      </h2>
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
