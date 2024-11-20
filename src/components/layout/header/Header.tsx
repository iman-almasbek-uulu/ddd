import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import scss from "./Header.module.scss";
import header_logo from "../../../assets/images/Motion_web.svg";
import { useLanguageStore } from "../../../store/translate";
import BurgerMenu from "./BurgerMenu";
import Search from "./Search";


const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { t, setLanguage, currentLanguage } = useLanguageStore(); // Add currentLanguage
  const navbar = [
    { id: 1, name: t("Главная", "Home"), to: "/" },
    { id: 2, name: t("О нас", "About Us"), to: "/about" },
    { id: 3, name: t("Учёба за границей", "Study Abroad"), to: "/abroad" },
    { id: 4, name: t("Контакты", "Contacts"), to: "/contact" },
  ];
  useEffect(() => {
    const handleResize = () => setIsActive(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChangeLanguage = (newLanguage: "ru" | "en") => {
    setLanguage(newLanguage);
  };

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  
  // Определяем группы маршрутов
  const ROUTE_GROUPS = {
    // пути, при которых должна быть активна "Главная"
    home: ['/cambridge', '/aptis', '/ielts', '/other'],
    // пути, при которых должна быть активна "Учёба за границей"
    abroad: ['/study', '/abroad']
  };

  const isPathActive = (path: string) => {
    // Для главной страницы проверяем, входит ли текущий путь в группу home
    if (path === '/') {
      return ROUTE_GROUPS.home.some(route => 
        location.pathname === route || location.pathname.startsWith(route)
      );
    }

    // Для "Учёба за границей"
    if (path === '/abroad') {
      return ROUTE_GROUPS.abroad.some(route => 
        location.pathname === route || location.pathname.startsWith(route)
      );
    }

    // Для остальных страниц - простая проверка на соответствие пути
    return location.pathname === path || location.pathname.startsWith(path);
  };


  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.Header}>
          <img src={header_logo} alt="header_logo" />
          {isActive ? (
            <>
            <input
              id="checkbox"
              type="checkbox"
              checked={isOpen}
              onChange={toggleBurgerMenu}
            />
            <label className="toggle" htmlFor="checkbox">
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
            <BurgerMenu 
              navbar={navbar} 
              isOpen={isOpen} 
              setIsOpen={setIsOpen}
              currentLanguage={currentLanguage}
              onLanguageChange={handleChangeLanguage}
              isPathActive={isPathActive} // Передаем функцию в BurgerMenu
            />
          </>
        ) : (
          <>
            <div className={scss.Header_nav}>
              {navbar.map((item) => (
                <NavLink 
                  to={item.to} 
                  key={item.id}
                  className={isPathActive(item.to) ? scss.active : ""}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className={scss.Header_buttons}>
              <Search/>
              <select 
                value={currentLanguage} 
                onChange={(e) => handleChangeLanguage(e.target.value as "ru" | "en")}
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;