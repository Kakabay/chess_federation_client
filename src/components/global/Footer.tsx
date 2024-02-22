// Modules
import { Link } from "react-router-dom";

// Icons
import vk from "../../icons/vk.svg";
import instagram from "../../icons/instagram.svg";
import facebook from "../../icons/facebook.svg";

// Types
import { footerProps } from "../../types/burger";

// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";

const Footer = ({
  setDropdown,
  setDropdownBurger,
  setBurgerOpen,
  refTrig_1,
}: footerProps) => {
  const date = new Date();
  const breakpoint: Record<number, boolean> = {
    1300: useMediaQuery("(max-width: 1300px)"),
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-inner">
            <ul>
              <li
                ref={refTrig_1}
                onClick={() => {
                  if (breakpoint["1300"]) {
                    window.scrollTo(0, 0);
                    setBurgerOpen(true);
                    setDropdownBurger(true);
                  } else {
                    window.scrollTo(0, 0);
                    setDropdown(true);
                  }
                }}
              >
                <span>О нас</span>
              </li>
              <li>
                <Link to={"/news"}>Новости и cобытия</Link>
              </li>
              <li>
                <Link to={"/tournaments"}>Турниры</Link>
              </li>
              <li>
                <Link to={"/rating"}>Рейтинг</Link>
              </li>
              <li>
                <Link to={"/contact"}>Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-bottom-left">
              <p>
                Copyright 2012-{date.getFullYear()} Шахматная федерация
                Туркменистана | <a href="/">Пользовательское соглашение</a>
              </p>
            </div>
            <div className="footer-bottom-right">
              <ul>
                <li>
                  <a href="/">
                    <img src={vk} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={facebook} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
