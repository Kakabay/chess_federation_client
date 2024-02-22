// Modules
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Types
import { burgerProps } from "../../types/burger";

// Icons
import arrow from "../../icons/arrow-white-up.svg";

const Burger = ({
  burgerOpen,
  setBurgerOpen,
  dropdownBurger,
  setDropdownBurger,
}: burgerProps) => {
  useEffect(() => {
    if (burgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [burgerOpen]);
  return (
    <section className={burgerOpen ? "burger active" : "burger"}>
      <div className="burger-inner">
        <ul>
          <li
            className={
              dropdownBurger ? "burger-list-first active" : "burger-list-first"
            }
          >
            <div
              className="first-inner"
              onClick={() => {
                setDropdownBurger((initial) => !initial);
              }}
            >
              <span>О нас</span>
              <div
                className={
                  dropdownBurger ? "burger-arrow active" : "burger-arrow"
                }
              >
                <img src={arrow} alt="" />
              </div>
            </div>
            <ul className="burger-inner-dropdown">
              <li>
                <Link
                  to="/about-us"
                  onClick={() => {
                    setBurgerOpen(false);
                  }}
                >
                  О федерации
                </Link>
              </li>
              <li>
                <Link
                  to="/structure"
                  onClick={() => {
                    setBurgerOpen(false);
                  }}
                >
                  Структура федерации
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/news"}
              onClick={() => {
                setBurgerOpen(false);
              }}
            >
              Новости и события
            </Link>
          </li>
          <li>
            <Link
              to={"/tournaments"}
              onClick={() => {
                setBurgerOpen(false);
              }}
            >
              Турниры
            </Link>
          </li>
          <li>
            <Link
              to={"/rating"}
              onClick={() => {
                setBurgerOpen(false);
              }}
            >
              Рейтинг
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              onClick={() => {
                setBurgerOpen(false);
              }}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="burger-close-overlay"
        onClick={() => {
          setBurgerOpen(false);
        }}
      ></div>
    </section>
  );
};

export default Burger;
