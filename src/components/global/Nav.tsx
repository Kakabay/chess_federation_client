// Modules
import { useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Icons
import mainLogo from "../../../public/logo.svg";
// import { ReactComponent as Arrow } from "../../icons/arrow-down-black.svg";
import Arrow from "../../icons/arrow-down-black.svg";

import Search from "../../icons/search.svg";
import Lang from "./Lang";

// Types
interface NavProps {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<boolean | ((initial: boolean) => boolean)>;
}

const Nav = ({ burgerOpen, setBurgerOpen }: NavProps) => {
  const location = useLocation();

  const dropdownRef = useRef<HTMLLIElement>(null);

  const [dropDownOpened, setDropDownOpened] = useState<boolean>(false);

  // Click outside dropdown close function
  useEffect(() => {
    const handleDropDownClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropDownOpened(false);
      }
    };

    document.addEventListener("click", handleDropDownClickOutside);

    return () => {
      document.addEventListener("click", handleDropDownClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-inner">
          <div className="nav-logo">
            <Link to={"/"}>
              <img src={mainLogo} alt="" />
              <span>Шахматная федерация Туркменистана</span>
            </Link>
          </div>
          <div className="nav-content">
            <ul className="nav-list">
              <li
                ref={dropdownRef}
                className=""
                onClick={() => {
                  setDropDownOpened((initial) => !initial);
                }}
              >
                <div className="nav-non-link">
                  <span className={dropDownOpened ? "active" : ""}>О нас</span>
                  <div className={dropDownOpened ? "arrow active" : "arrow"}>
                    <img src={Arrow} alt="arr icon" />
                  </div>
                </div>
                {dropDownOpened && (
                  <div
                    className={
                      dropDownOpened ? "nav-dropdown" : "nav-dropdown disabled"
                    }
                  >
                    <Link to={"/about-us"}>О федерации</Link>
                    <Link to={"/structure"}>Структура федерации</Link>
                  </div>
                )}
              </li>
              <li
                className={location.pathname.includes("news") ? "active" : ""}
              >
                <Link to={"/news"}>Новости</Link>
              </li>
              <li
                className={
                  location.pathname.includes("tournaments") ? "active" : ""
                }
              >
                <Link to={"/tournaments"}>Предстоящие события</Link>
              </li>

              <li
                className={
                  location.pathname.includes("contact") ? "active" : ""
                }
              >
                <Link to={"/contact"}>Контакты</Link>
              </li>
            </ul>

            <div className="nav-functionality">
              <div>
                <Lang />
              </div>

              <div className="nav-search">
                <img src={Search} alt="search icon" />
              </div>
            </div>

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
