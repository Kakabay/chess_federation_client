// Modules
import { Link } from "react-router-dom";

// Icons
import vk from "../../icons/vk.svg";
import instagram from "../../icons/instagram.svg";
import facebook from "../../icons/facebook.svg";
import { navLinks } from "../../data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <Link to={link.path} className="footer-nav-link">
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="footer-info">
            <div className="footer-info-top">
              <h4>Пользовательское соглашение</h4>
              <h4>Copyright 2012-2024. Шахматная федерация Туркменистана</h4>
            </div>
            <div className="footer-info-bottom">
              <img src={vk} alt="vk" />
              <img src={instagram} alt="inst" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
