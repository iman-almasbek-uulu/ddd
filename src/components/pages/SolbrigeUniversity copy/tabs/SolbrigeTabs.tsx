import { useState } from "react";
import scss from "./SolbrigeTabs.module.scss";
import logo from "../.././../../assets/images/056772.png";
import icon1 from "../../../../assets/images/icon1.png";
import icon2 from "../../../../assets/images/шсщт2.png";
import wh from "../../../../assets/images/WhatsApp.png";
import ins from "../../../../assets/images/ins.png";
import tg from "../../../../assets/images/tg.png";
import { useLanguageStore } from "../../../../store/translate";

type TabType = {
  id: string;
  title: string;
  content: JSX.Element;
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

interface SolbrigeTabsProps {
  university: University;
}

const SolbrigeTabs: React.FC<SolbrigeTabsProps> = ({ university }) => {
  const [activeTab, setActiveTab] = useState<string>("Description");
  const { t } = useLanguageStore();

  const tabs: TabType[] = [
    {
      id: "Description",
      title: t("Описание","Description"),
      content: (
        <div className={scss.mom}>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                alignItems: "center",
                width: "100%",
                gap: "4pc"
              }}
            >
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <h1>{t("Ландшафтный дизайн","Landscape Design")}</h1>
                <h2>{t("Университет моды и дизайна","University of Fashion and Design")}</h2>
              </div>
            </div>
            <p className={scss.grid}>
              <strong>{t("Номинальная продолжительность", "Nominal duration")}:</strong> {t(university.descr.NominalDuration.ru,university.descr.NominalDuration.en)}
            </p>
            <p className={scss.grid}>
              <strong>{t("Награды","Awards")}:</strong> {t(university.descr.Awards.ru,university.descr.Awards.en)}
            </p>
            <div style={{borderTop: "1px solid #212121", marginTop: "30px"}}>
              <p className={scss.grid}>
                <strong>{t("Обучение","Tuition")} <br /> {t("платеж","fee")}:</strong> <span style={{borderBottom: "1px solid #212121", paddingBottom: "30px"}}> {t(university.descr.TuitionFee.ru,university.descr.TuitionFee.en)} </span>
              </p>
              <p className={scss.grid}>
                <strong>{t("Приложение","Application")} <br /> {t("платеж","fee")}:</strong> <span style={{borderBottom: "1px solid #212121", paddingBottom: "30px"}}> {t(university.descr.ApplicationFee.ru,university.descr.ApplicationFee.en)} </span>
              </p>
              <p className={scss.grid} style={{ borderBottom: " solid 1px" }}>
                <strong>{t("Регистрация","Registration")} <br /> {t("платеж","fee")}:</strong>  {t(university.descr.RegistrationFee.en,university.descr.RegistrationFee.en)} 
              </p>
              <p className={scss.grid}>
                <strong>{t("Обучение","Tuition")} <br /> {t("платеж","fee")}:</strong> <span style={{borderBottom: "1px solid #212121", paddingBottom: "30px"}}> {t(university.descr.RegistrationFee.ru,university.descr.RegistrationFee.en)} </span>
              </p>
              <p className={scss.grid}>
                <strong>{t("Вход","Entry")} <br />{t("квалификация","qualication")} :</strong>{t(university.descr.EntryQualication.ru,university.descr.EntryQualication.en)}
              </p>
            </div>
          </div>
          <div className={scss.block}>
            <h3>
              <strong  className={scss.importantFont}>{t("Подать заявку сейчас","Apply Now")}!!! </strong>{t("Осенний семестр 2023","Fall semester 2023")}
            </h3>
            <div 
              style={{ display: "flex", padding: "20px 0", gap: "20px" }}>
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon1}
                alt=""
              />
              <p style={{display:"flex", flexDirection: "column", gap:"10px"}}>
                <strong>{t("Предварительный_срок","Pre_deadline")}</strong>  
                { t(university.descr.Pre_deadline.ru,university.descr.Pre_deadline.en)}
              </p>
            </div>
            <div 
              style={{ display: "flex", padding: "20px 0", gap: "20px" }}>
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon1}
                alt=""
              />
              <p style={{display:"flex", flexDirection: "column", gap:"10px"}}>
               <strong >{t("Срок_подачи_заявок","Application_deadline")}</strong>
               
                {t(university.descr.Application_deadline.ru,university.descr.Application_deadline.en)}
                
              </p>
            </div>{" "}
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px 0", gap: "20px" }}
            >
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon2}
                alt=""
              />
              <p style={{display:"flex", flexDirection: "column", gap:"10px"}}>
               <strong>{t("Исследования_начало","Studies_commence")}</strong> 
               {t(university.descr.Application_deadline.ru,university.descr.Application_deadline.en)}
              </p>
            </div>
            <h3 style={{ background: "rgba(26, 162, 238, 0.5),fontSize: '18px'", marginTop: "30px" }}>
              <strong className={scss.importantFont}>
              {t("Подать заявку сейчас","Apply Now")}!!! <br />{" "}
              </strong>
              {t("Осенний семестр 2023","Fall semester 2023")}
            </h3>
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                gap:"20px",
                fontFamily: "inherit",
                color: "rgba(255, 106, 106, 1)",
                fontSize: "20px",
                fontWeight: "700",
                padding: "20px 0 0",
                // line-height: 26.82px;
                // text-align: left;
              }}
            >
             <span className={scss.fr}>!</span> {t("Срок подачи заявок закончился","Application period has ended")}
            </h1>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px 0 ", gap: 20, borderBottom: "1px solid #212121" }}
            >
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon2}
                alt=""
              />
              <p style={{display:"flex", flexDirection: "column", gap:"10px"}}>
                <strong> {t("Исследования_начало","Studies_commence")}</strong> 
                {t(university.descr.Application_deadline.ru, university.descr.Application_deadline.en)}
              </p>
            </div>
            <div className={scss.shares}>
              {t("Поделиться","share on")}: 
              <div className={scss.links}>
                <a href="https://web.whatsapp.com/"> <img src={wh} alt="whatsapp" />  </a>
                <a href="https://www.instagram.com/"> <img src={ins} alt="instagram" /></a>
                <a href="https://web.telegram.org/"> <img src={tg} alt="telegram" />  </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Cost",
      title: t("Стоимость","Cost"),
      content: (
        <div>
          <h1 style={{display:"flex", gap:"0.6pc",fontSize:"22px"}}>
            <p> <span className={scss.blue}>{t("Стоимость обучения","The cost of studying ")}</span> {t(university.cost.title.ru,university.cost.title.en)} <br />
            {t(university.cost.value_1.ru,university.cost.value_1.en)} <br/>
            {t(university.cost.value_2.ru,university.cost.value_2.en)} <br/>
            </p>
          </h1>
        </div>
      ),
    },
    {
      id: "Photos",
      title: t("Фото","Photos"),
      content: (
        <div key={university.id} className={scss.imagesStudents}>
            {university.photo.map((img,index: number) =><div className={scss.image}><img key={index} src={img} /></div> )}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={scss.tabComponent}>
        <div className={scss.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? scss.active : ""}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className={scss.tabContent}>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </>
  );
}

export default SolbrigeTabs;
