import scss from "./Solbrige.module.scss";
import SolbrigeTabs from "./tabs/SolbrigeTabs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { readUnivers} from "../../../store/univerSlice";
import { AppDispatch } from "../../../store/store";
import { useLanguageStore } from "../../../store/translate";

type StateType = {
  university: {
    univer: University[];
    status: string;
    error: string | null;
  };
};

interface MultiLangField {
  en: string;
  ru: string;
  ky: string;
  
}
interface University {
  id: string,
  name: MultiLangField & {png:string};
  country: MultiLangField & { flag: string };
  location: MultiLangField;
  established: number;
  specialization: MultiLangField[];
  type: MultiLangField;
  language: MultiLangField;
  descr: {
    NominalDuration: MultiLangField;
    Awards: MultiLangField;
    TuitionFee: MultiLangField;
      ApplicationFee: MultiLangField;
      RegistrationFee: MultiLangField;
      EntryQualication: MultiLangField;
      Pre_deadline: MultiLangField;
      Application_deadline: MultiLangField;
    };
    cost: {
      title: MultiLangField;
      value_1: MultiLangField;
      value_2: MultiLangField;
    };
    photo: string[];
}

interface Params {
  [key: string]: string | undefined;
}

const Solbrige = () => {
  const { t } = useLanguageStore();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<Params>();
  const { univer, status, error } = useSelector((state: StateType) => state.university);
  useEffect(() => {
    setTimeout(() => {
        window.scrollTo(10, 0);
    }, 0);
  }, []);
  useEffect(() => {
    dispatch(readUnivers());
  }, [dispatch]);

  const university = univer.find((el: University) => String(el.id) === String(id));

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!university) {
    return <div>University not found</div>;
  }

  return (
    <div id={scss.Solbrige}>
      <div className="container">
        <div className={scss.solbrige}>
          <h1 className={scss.T}>{t(university.name.ru,university.name.en)}</h1>
          <div className={scss.Block}>
            <div
              className={scss.img}
              style={{ backgroundImage: `url(${university.name.png})` }}
            />
            <div className={scss.blockText}>
              <div className={scss.Bl}>
                <h1>
                  <span>{t("Локация","Location")}: </span>{t(university.location.ru,university.location.en)}
                </h1>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>{t("Date of foundation","Date of foundation")}: </span>{university.established}
                </h1>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>{t("Тип программы","Type of programs")}: </span>{t(university.type.ru,university.type.en)}
                </h1>
              </div>
              <div className={scss.Bl1}>
                <center>
                  <h2 className={scss.TT}>
                    <span>{t("Специализация","Specialties")}:</span>{" "}
                    <div className={scss.flex}>{university.specialization.map((el) => <div>{t(el.ru,el.en) } </div>)}</div>
                  </h2>
                </center>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>{t("Язык","Language")}: </span>{t(university.language.ru,university.language.en)}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <SolbrigeTabs university={university} />
      </div>
    </div>
  );
};

export default Solbrige;
