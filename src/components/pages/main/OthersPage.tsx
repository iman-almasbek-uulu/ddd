import scss from "./OthersPage.module.scss";
import others_image from "../../../assets/images/Others_image.svg";
import orhers_icon1 from "../../../assets/images/others_icon1.svg";
import orhers_icon2 from "../../../assets/images/others_icon2.svg";
import orhers_icon3 from "../../../assets/images/others_icon3.svg";
import orhers_icon4 from "../../../assets/images/others_icon4.svg";
import { useLanguageStore } from "../../../store/translate";

const OthersPage = () => {
  const { t } = useLanguageStore();

  return (
    <section id={scss.Others}>
      <div className="container">
        <div className={scss.Others}>
          <div className={scss.Others_left}>
            <h1>
              {t(
                "Почему мы лучшие среди других",
                "This is why we are best from others"
              )}
            </h1>
            <p>
              {t(
                "Мы предоставляем полную поддержку на всех этапах подготовки, включая помощь в подаче документов и подготовке к собеседованию. Свяжитесь с нами и начните ваше путешествие в высшее образование за рубежом!",
                "We provide full support at all stages of preparation, including assistance in filing documents and preparing for an interview. Contact us and start your journey to higher education abroad!"
              )}
            </p>
            <img
              src={others_image}
              alt={t("Изображение других", "Others image")}
            />
          </div>
          <div className={scss.Others_right}>
            <div className={scss.Others_block}>
              <img
                src={orhers_icon1}
                alt={t("Иконка партнёров", "Partners icon")}
              />
              <h3>{t("1000+ партнёров", "1000+ Partners")}</h3>
              <p>
                {t(
                  "более 1000 партнёров по всему миру помогают поступить в лучшие университеты мира",
                  "over 1000+ partners worldwide enter the best universities in the world"
                )}
              </p>
            </div>
            <div className={scss.Others_block}>
              <img
                src={orhers_icon2}
                alt={t("Иконка экспертов", "Experts icon")}
              />
              <h3>{t("Эксперты", "Experts")}</h3>
              <p>
                {t(
                  "Мы являемся экспертами в своей области и поможем вам достичь новых высот.",
                  "We are experts in our field. Help you reach new heights."
                )}
              </p>
            </div>
            <div className={scss.Others_block}>
              <img src={orhers_icon3} alt={t("Иконка времени", "Time icon")} />
              <h3>{t("Время", "Time")}</h3>
              <p>
                {t(
                  "Мы поможем вам сэкономить время и нервы при поступлении в лучший университет.",
                  "We will help you save your time and nerves when applying to the best university."
                )}
              </p>
            </div>
            <div className={scss.Others_block}>
              <img
                src={orhers_icon4}
                alt={t("Иконка доступных цен", "Affordable prices icon")}
              />
              <h3>{t("Доступные цены", "AFFORDABLE PRICES")}</h3>
              <p>
                {t(
                  "Разумные цены всегда вас порадуют. Запишитесь на консультацию.",
                  "Reasonable prices will always please you. Sign up for a consultation."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersPage;
