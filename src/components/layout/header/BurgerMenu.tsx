import { FC } from "react";
import { Link, useLocation } from "react-router-dom"; // Добавляем useLocation
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import scss from "./BurgerMenu.module.scss";

interface NavbarType {
  id: number;
  to: string;
  name: string;
}

interface BurgerMenuType {
  navbar: NavbarType[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentLanguage: string;
  onLanguageChange: (lang: "ru" | "en") => void;
  isPathActive: (path: string) => boolean; // Добавляем это свойство
}

const BurgerMenu: FC<BurgerMenuType> = ({ 
  navbar, 
  isOpen, 
  setIsOpen, 
  currentLanguage,
  onLanguageChange 
}) => {
  const location = useLocation(); // Получаем текущий путь

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

    // Для остальных страниц
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLanguageClick = (lang: "ru" | "en" ) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className={scss.burgermenu}>
      <div className="container">
        <div className={`${scss.burger_menu} ${isOpen ? scss.active : ''}`}>
          {navbar.map((item) => (
            <Link 
              onClick={handleLinkClick} 
              to={item.to} 
              key={item.id}
              className={isPathActive(item.to) ? scss.active2 : ""}
            >
              {item.name}
            </Link>
          ))}
          <div className={scss.burger_menu_buttons}>
            <button 
              onClick={() => handleLanguageClick("en")}
              className={currentLanguage === "en" ? scss.active : ""}
            >
              EN
            </button>
            <button 
              onClick={() => handleLanguageClick("ru")}
              className={currentLanguage === "ru" ? scss.active : ""}
            >
              RU
            </button>
          </div>
          <div className={scss.burger_menu_image}>
            <h3 onClick={handleLinkClick}><FaTelegram /></h3>
            <h3 onClick={handleLinkClick}><AiFillInstagram /></h3>
            <h3 onClick={handleLinkClick}><FaPhoneVolume /></h3>
            <h3 onClick={handleLinkClick}><BiLogoGmail /></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;