import scss from "./AbroadPage.module.scss";
import img from "../../../assets/images/Bitmap.png";
import { Link } from "react-router-dom";
import { useLanguageStore } from "../../../store/translate";

const AbroadPage = () => {
  const { t } = useLanguageStore();
  return (
    <section id={scss.Abroad}>
      <div className="container">
        <h1>
          <span>{t("Учёба", "Study")}</span> Abroad
        </h1>

        <div className={scss.block}>
          <div className={scss.block_image}>
            <div className={scss.square}>
              <img src={img} alt="" />
            </div>
          </div>
          <div className={scss.block_info}>
            <p className={scss.descr}>
              <strong>Motion study</strong> for International Education offers
              its clients various study abroad opportunities – language courses,
              secondary, professional and higher education, professional
              development programmes for teachers and specialists of companies
              and organizations.
            </p>
            <p className={scss.name}>Our partners include:</p>
            <ul className={scss.list}>
              <li>- Universities and higher education establishments.</li>
              <li>- Private schools and colleges.</li>
              <li>- State schools and colleges.</li>
              <li>- World known language schools for adults.</li>
              <li>
                - International language schools for 7-18 y.o. schoolchildren.
              </li>
              <li>- Business schools</li>
              <li>- Executive centres</li>
              <li>- Summer camps</li>
              <li>- Guardianship companies</li>
            </ul>
            <Link to="/study">
              <span>explore</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbroadPage;
