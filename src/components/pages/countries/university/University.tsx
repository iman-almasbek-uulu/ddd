"use client"
import React from "react";
import scss from "./University.module.scss"
import { NavLink} from 'react-router-dom';
import { useLanguageStore } from "../../../../store/translate";
import { useWindowSize } from "react-use";
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

type filterUniverType = {
  special: MultiLangField[],
  high: MultiLangField[],
  flags: MultiLangField[]
}

interface UniverProps {
  univer: University[],
  filterUniver: filterUniverType
}

const Universities: React.FC<UniverProps> = ({univer,filterUniver}) => {
    const {t} = useLanguageStore()
    const width = useWindowSize()
    const filterUniverFunc = () => {
      const filtered = univer.filter((uni) => {
        const hasSpecial = filterUniver?.special?.length > 0 
          ? filterUniver.special.some((item) => uni.specialization.some(el => el.en === item.en))
          : true; 
        const hasHigh = filterUniver?.high?.length > 0
          ? filterUniver.high.some((item) => uni.type.en === item.en)
          : true;
        const hasFlags = filterUniver?.flags?.length > 0
          ? filterUniver.flags.some((item) => uni.country.en === item.en)
          : true
        return hasSpecial && hasHigh && hasFlags;
      });
    
      return filtered;
    }

    return (
        <>
        <div className={scss.list}>
        {filterUniverFunc().map((el,index: number) => {
          return (<NavLink 
          key={index} to={`/study/univer/${el.id}`} 
          className={scss.item}>
            <div className={scss.img}>
              <img src={el.name.png} alt={t("Университет","universitet image")} />
            </div>
            <div className={scss.block}>

            <div className={scss.marg}>
              <span className={`${scss.title}`}>{t("Название","Name")}:</span>
              <span className={`${scss.value}`}>{t(el.name.ru, el.name.en).length > 20 ?t(el.name.ru, el.name.en).slice(0,20) + "..." : t(el.name.ru, el.name.en) }</span>
            </div>
            <div>
              <span className={scss.title}>{t("Локация","Location")}</span>
              <span className={scss.value}>{width.width <= 485 ? t(el.location.ru,el.location.en).split(" ")[1] : t(el.location.ru,el.location.en)}</span>
            </div>
            <div>
              <span className={scss.title}>{t("Возраст","Age")}:</span>
              <span className={scss.value}>{t("От 16", "From 16")}</span>
            </div>
            </div>
          </NavLink>)                
        })}
        </div>
        </>
    );
};
export default Universities;