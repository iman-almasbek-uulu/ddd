import scss from "./About.module.scss";
import img from "../../../assets/images/Frame 73.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import React, { useEffect } from "react";
import { readWorkers } from "../../../store/workerSlice";
import { useLanguageStore } from "../../../store/translate";

const AboutPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { workers, status } = useSelector((state: RootState) => state.workers);
  const { t } = useLanguageStore();

  useEffect(() => {
    dispatch(readWorkers());
  }, [dispatch]);

  return (
    <>
      {status === "fulfilled" && (
        <div className={scss.AboutPage}>
          <div className="container">
            <div className={scss.About}>
              <div className={scss.Block}>
                <div className={scss.imagesBlock}>
                  <div className={scss.img}>
                    <img src={img} alt="" />
                  </div>
                </div>
                <div className={scss.textBlock}>
                  <h3>{t("О нас", "About Us")}</h3>
                  <h1>
                    {t(
                      "Лучшая образовательная платформа",
                      "Best Education Platform"
                    )}
                  </h1>
                  <p className={scss.P}>
                    {t(
                      "Очевидно, мы поднялись в атмосфере на большую высоту, потому что небо было совершенно черным.",
                      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black."
                    )}
                  </p>
                  <p>
                    {t(
                      "Благодаря той же иллюзии, которая поднимает горизонт моря до уровня наблюдателя на склоне холма, черное облако внизу расплылось, и автомобиль, казалось, парил посередине.",
                      "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle."
                    )}
                  </p>
                </div>
              </div>
              <h1 className={scss.T}>{t("Наша команда", "Our Team")}</h1>
              <div className={scss.OurTeam}>
                {workers.map((worker) => (
                  <div key={worker.id} className={scss.TeamMember}>
                    <img src={worker.avatar} alt={worker.name.en} />
                    <h1>{worker.name.en}</h1>
                    <h3>{worker.specialization.en}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
