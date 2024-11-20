"use client";
import scss from "./Footer.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import footer_logo from "../../../assets/images/Motion_web.svg";
import { useLanguageStore } from "../../../store/translate";

const Footer = () => {
  const { t } = useLanguageStore();

  return (
    <footer id={scss.footer}>
      <div className="container">
        <div className={scss.footer}>
          <img src={footer_logo} alt="footer_logo" />
          <div className={scss.footer_nav}>
            <Link to={"/"}>{t("Главная", "Home")}</Link>
            <Link to={"/"}>{t("О нас", "About us")}</Link>
            <Link to={"/"}>{t("Учёба за рубежом", "Study Abroad")}</Link>
            <Link to={"/"}>{t("Контакты", "Contacts")}</Link>
          </div>
          <div className={scss.footer_icons}>
            <button>
              <FaYoutube />
            </button>
            <button>
              <FaTelegramPlane />
            </button>
            <button>
              <FaInstagram />
            </button>
          </div>
        </div>
        <div className={scss.footer_line}></div>
        <h2 className={scss.footer_text}>
          {t("с 2023 Motion Study LLC", "© 2023 Motion Study LLC")}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
