// Modules
import { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// Icons
import mainLogo from "../../icons/main_logo.svg";
// import { ReactComponent as Arrow } from "../../icons/arrow-down-black.svg";
import Arrow from "../../icons/arrow-down-black.svg";

// Types
import { navProps } from "../../types/burger";

const Nav = ({
  dropdown,
  setDropdown,
  burgerOpen,
  setBurgerOpen,
  refTrig_1,
}: navProps) => {
  const location = useLocation();
  const ref = useRef<any>(null);
  const refTrigger = useRef<any>(null);

  useEffect(() => {
    if (ref.current && refTrigger.current && refTrig_1.current) {
      window.addEventListener("click", (e: any) => {
        if (
          !e.target.contains(ref.current) &&
          !e.target.contains(refTrigger.current) &&
          !e.target.contains(refTrig_1.current)
        ) {
          setDropdown(false);
        }
      });
    }
  }, [setDropdown, ref, refTrig_1]);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">
            <Link to={"/"}>
              <img src={mainLogo} alt="" />
            </Link>
          </div>
          <div className="nav-content">
            <ul className="nav-list">
              <li
                ref={refTrigger}
                className="nav-non-link"
                onClick={() => {
                  setDropdown((initial) => !initial);
                }}
              >
                <span className={dropdown ? "active" : ""}>О нас</span>
                <div className={dropdown ? "arrow active" : "arrow"}>
                  {/* <Arrow className="arrow" /> */}
                  <img src={Arrow} alt="arr icon" />
                </div>
                <ul
                  ref={ref}
                  className={
                    dropdown ? "nav-dropdown" : "nav-dropdown disabled"
                  }
                >
                  <li>
                    <Link to={"/about-us"}>О федерации</Link>
                  </li>
                  <li>
                    <Link to={"/structure"}>Структура федерации</Link>
                  </li>
                </ul>
              </li>
              <li
                className={location.pathname.includes("news") ? "active" : ""}
              >
                <Link to={"/news"}>Новости и события</Link>
              </li>
              <li
                className={
                  location.pathname.includes("tournaments") ? "active" : ""
                }
              >
                <Link to={"/tournaments"}>Турниры</Link>
              </li>
              <li
                className={location.pathname.includes("rating") ? "active" : ""}
              >
                <Link to={"/rating"}>Рейтинг</Link>
              </li>
              <li
                className={
                  location.pathname.includes("contact") ? "active" : ""
                }
              >
                <Link to={"/contact"}>Контакты</Link>
              </li>
            </ul>
            <div
              className={burgerOpen ? "nav-burger active" : "nav-burger"}
              onClick={() => {
                setBurgerOpen((initial) => !initial);
              }}
            >
              <span className="burger-line burger-line-top"></span>
              <span className="burger-line burger-line-mid"></span>
              <span className="burger-line burger-line-bot"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
