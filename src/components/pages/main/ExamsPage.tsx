import scss from "./ExamsPage.module.scss";
import exams from "../../../assets/images/exams_image.svg";
import exams_image1 from "../../../assets/images/exams_block_img1.svg";
import { Link } from "react-router-dom";
import { useLanguageStore } from "../../../store/translate";

const ExamsPage = () => {
  const { t } = useLanguageStore();
  return (
    <section id={scss.Exams}>
      <div className="container">
        <div className={scss.Exams_text}>
          <h1>{t("Экзамены", "ExamsPage")}</h1>
          <p>
            {t(
              "Экзамены — это тесты, которые оценивают знания, навыки, способности или другие квалификации человека в определённой области. Они используются для оценки академической успеваемости.",
              "Exams are tests that assess a person's knowledge, skills, aptitude, or other qualifications in a specific subject or area of study. They are used to evaluate academic performance."
            )}
          </p>
        </div>
        <div className={scss.Exams}>
          <div className={scss.Exasm_text}>
            <img src={exams} alt={t("Экзамены", "Exams")} />
            <div className={scss.Exams_mar4ik}>
              <Link to={"/cambridge"}>
                {t("Экзамены Cambridge English", "Cambridge English exams")}
              </Link>
              <h2>
                {t(
                  "Ваш путь к изучению английского шаг за шагом.",
                  "Your path to learning English, step by step."
                )}
              </h2>
              <p>
                {t(
                  "Квалификации Cambridge English — это углублённые экзамены, которые делают изучение английского языка увлекательным, эффективным и полезным. Наши квалификации основаны на исследованиях в области эффективного обучения.",
                  "Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding. Our qualifications are based on research into effective teaching and learning."
                )}
              </p>
              <Link to={"/cambridge"}>
                {t("Узнать больше", "Discover more")}
              </Link>
            </div>
          </div>
          <div className={scss.Exams_blocks}>
              <Link to="/aptis" className={scss.Exams_block}>
                <img
                  src={exams_image1}
                  alt={t("Изображение экзаменов", "Exams image")}
                />
                <div className={scss.Exams_block_text}>
                  <h4>{t("Aptis", "Aptis")}</h4>
                  <h2>
                    {t(
                      "Выберите Aptis для ваших оценочных нужд",
                      "Choose Aptis for your assessment needs"
                    )}
                  </h2>
                  <p>
                    {t(
                      "Aptis — это компьютерный тест, который обеспечивает быстрые результаты и надёжную проверку нашими экзаменаторами.",
                      "Aptis is a computer-based test which provides fast results reliably marked by our examiners."
                    )}
                  </p>
                </div>
              </Link>
              <Link to='/ielts' className={scss.Exams_block}>
                <img
                  src={exams_image1}
                  alt={t("Изображение экзаменов", "Exams image")}
                />
                <div className={scss.Exams_block_text}>
                  <h4>{t("Aptis", "Aptis")}</h4>
                  <h2>
                    {t(
                      "Выберите Aptis для ваших оценочных нужд",
                      "Choose Aptis for your assessment needs"
                    )}
                  </h2>
                  <p>
                    {t(
                      "Aptis — это компьютерный тест, который обеспечивает быстрые результаты и надёжную проверку нашими экзаменаторами.",
                      "Aptis is a computer-based test which provides fast results reliably marked by our examiners."
                    )}
                  </p>
                </div>
              </Link>
              <Link to=".other" className={scss.Exams_block}>
                <img
                  src={exams_image1}
                  alt={t("Изображение экзаменов", "Exams image")}
                />
                <div className={scss.Exams_block_text}>
                  <h4>{t("Aptis", "Aptis")}</h4>
                  <h2>
                    {t(
                      "Выберите Aptis для ваших оценочных нужд",
                      "Choose Aptis for your assessment needs"
                    )}
                  </h2>
                  <p>
                    {t(
                      "Aptis — это компьютерный тест, который обеспечивает быстрые результаты и надёжную проверку нашими экзаменаторами.",
                      "Aptis is a computer-based test which provides fast results reliably marked by our examiners."
                    )}
                  </p>
                </div>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsPage;
