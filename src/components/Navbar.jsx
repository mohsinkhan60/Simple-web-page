import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import "./navbar.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="main-div">
        <h1 className="logo">Mohsin Dev</h1>

        <div className={`menu-link ${show ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social">
            <li className="social">
              <a href="#">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li className="social">
              <a href="#">
                <FaInstagram className="insta" />
              </a>
            </li>
            <li className="social">
              <a href="#">
                <IoLogoYoutube className="youtube" />
              </a>
            </li>
          </ul>
          <div className="hamb-menu">
            <a href="#" onClick={() => setShow(!show)}>
              <IoMenu />
            </a>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <p className="para">Welcome To</p>
        <h1 className="hading">Mohsin Khan</h1>
      </section>
    </>
  );
};
export default Navbar;