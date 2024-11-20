import { Link } from 'react-router-dom';
import scss from "../CountriesPage.module.scss"
import { toggleFiltered } from '../../../../store/univerSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { useWindowSize } from 'react-use';
import React from 'react';
import { useLanguageStore } from '../../../../store/translate';

interface MultiLangField {
    en: string;
    ru: string;
    ky: string;
    flag?:string
}

type filterFlagsType = {
    id: string,
    country: MultiLangField
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

interface props {
    univer: University[]
}

const Flags: React.FC<props> = ({univer}) => {
    const { t } = useLanguageStore();

    const dispatch = useDispatch<AppDispatch>()
    const { width } = useWindowSize();
    const filterFlags = univer.reduce((acc: filterFlagsType[], el) => {
        if (!acc.some((item: filterFlagsType) => item.country.en === el.country.en)) {
            acc.push({ id: el.id, country: el.country });
        }
        return acc;
    }, [])

    const toggleFilter = (data: MultiLangField) => {
        dispatch(toggleFiltered({ key: "flags", value: data }));
    }

    const sliceWords = (str: string) => {
        return str.split(" ").map((el) => el[0].toUpperCase()).join("")
    }

    return (
        <>
        <div className={scss.list}>
            {filterFlags.map((el: filterFlagsType, idx: number) => (
                <Link onClick={() => toggleFilter(el.country)} key={el.id || idx} to="/study/univer" className={scss.item}>
                    <div className={scss.img}><img src={el.country.flag} alt={t("флаг","flag")} /></div>
                    <span>{width <= 485 ? `${t("Высшее образование в","Higher education in")} 
                    ${t(el.country.ru,el.country.en).split(" ").length > 1 
                    ? sliceWords(t(el.country.ru,el.country.en)) 
                    : t(el.country.ru,el.country.en)}` 
                    : t(el.country.ru,el.country.en)} </span>
                </Link>
            ))}
        </div>
        </>
    );
};

export default Flags;