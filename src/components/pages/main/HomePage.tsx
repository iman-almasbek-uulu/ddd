import { Link } from "react-router-dom";
import scss from "./MainPage.module.scss";
import motion_web_main from "../../../assets/images/motion_web_main.svg";
import contact from "../../../assets/images/contacts_2.svg";
import contact_1 from "../../../assets/images/contacts_1.svg";
import { useLanguageStore } from "../../../store/translate";

const HomePage = () => {
  const { t } = useLanguageStore();

  return (
    <>
      <section id={scss.Main}>
        <div className="container">
          <div className={scss.Main}>
            <div className={scss.Main_text}>
              <Link to={"/"}>{t("Исследуйте мир", "EXPLORE THE WORLD")}</Link>
              <h1>
                {t(
                  "Учитесь за границей с нашей помощью",
                  "Study abroad with our help"
                )}
              </h1>
              <p>
                {t(
                  "Учитесь в лучших университетах мира и расширяйте свои горизонты. Получите образование высочайшего качества и добейтесь успеха за границей.",
                  "Study at the world's top universities and expand your horizons. Get the highest quality education and achieve success abroad."
                )}
              </p>
              <div className={scss.Main_blocks}>
                <div className={scss.Main_block}>
                  <img src={contact_1} alt="contact" />
                  <div className={scss.Main_block_text}>
                    <label htmlFor="name">{t("Имя", "NAME")}</label>
                    <input
                      type="text"
                      placeholder={t("|Введите ваше имя", "|Enter your name")}
                    />
                  </div>
                </div>
                <div className={scss.Main_block}>
                  <img src={contact} alt="contact" />
                  <div className={scss.Main_block_text}>
                    <label htmlFor="phone">{t("Телефон", "PHONE")}</label>
                    <input
                      type="text"
                      placeholder={t(
                        "|Введите ваш телефон",
                        "|Enter your phone"
                      )}
                    />
                  </div>
                </div>
                <button>{t("Связаться", "Contact")}</button>
              </div>
            </div>
            <div className={scss.Main_right}>
              <img src={motion_web_main} alt="motion_web_main" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
