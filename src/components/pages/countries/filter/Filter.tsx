import { useRef, useState } from "react";
import scss from "./Filter.module.scss";
import down from "../../../../assets/images/down.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFiltered } from "../../../../store/univerSlice";
import { useLanguageStore } from "../../../../store/translate";

interface MultiLangField {
  en: string;
  ru: string;
  ky: string;
}

interface University {
  id: string;
  name: MultiLangField & { png: string };
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

interface FilterState {
  high: MultiLangField[];
  special: MultiLangField[];
  flags: MultiLangField[];
}

interface UniverProps {
  univer: University[];
  filterUniver: FilterState;
}

interface FilterHtmlType {
  name: {
    en: string;
    ru: string;
  };
  value: MultiLangField[];
  key: keyof FilterState; // Связываем ключ с FilterState
}

const Filter: React.FC<UniverProps> = ({ univer, filterUniver }) => {
  const { t } = useLanguageStore();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false]);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleOpen = (index: number) => {
    setIsOpen((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  const toggleFilter = (data: MultiLangField, keyValue: keyof FilterState) => {
    dispatch(toggleFiltered({ key: keyValue, value: data }));
  };

  const getUniqueValues = (key: keyof University): MultiLangField[] => {
    return univer.reduce((acc: MultiLangField[], el) => {
      const value =
        key === "specialization" ? el[key] : [el[key] as MultiLangField];
      value.forEach((item: MultiLangField) => {
        if (!acc.some((entry) => entry.en === item.en)) {
          acc.push(item);
        }
      });
      return acc;
    }, []);
  };

  const higherEducationTypes = getUniqueValues("type");
  const specialEducationTypes = getUniqueValues("specialization");
  const countryEducationTypes = getUniqueValues("country");

  const filterHtml: FilterHtmlType[] = [
    {
      name: {
        en: "higher education",
        ru: "Выс. образование",
      },
      value: higherEducationTypes,
      key: "high",
    },
    {
      name: {
        en: "specialization",
        ru: "Специализация",
      },
      value: specialEducationTypes,
      key: "special",
    },
    {
      name: {
        en: "country",
        ru: "Страна",
      },
      value: countryEducationTypes,
      key: "flags",
    },
  ];

  const renderFilterItem = (el: FilterHtmlType, index: number) => (
    <div
      key={index}
      onClick={() => toggleOpen(index)}
      className={scss.filter_item}
    >
      <span>{t(el.name.ru, el.name.en)}</span>
      <img
        src={down}
        style={{
          transform: isOpen[index] ? "rotate(180deg)" : "rotate(0deg)",
        }}
        alt="arrow down"
      />
      <div
        className={`${scss.down_modal} ${isOpen[index] && scss.show}`}
        ref={modalRef}
      >
        {el.value.map((item, itemIndex: number) => {
          const isSelected = filterUniver[el.key].some(
            (el2: MultiLangField) => el2.en === item.en
          );
          const style = isSelected ? { background: "gray" } : undefined;

          if (location.pathname === "/study/univer") {
            return (
              <div
                style={style}
                onClick={() => toggleFilter(item, el.key)}
                key={itemIndex}
              >
                {t(item.ru, item.en)}
              </div>
            );
          } else {
            return (
              <Link
                to="/study/univer"
                style={style}
                onClick={() => toggleFilter(item, el.key)}
                key={itemIndex}
              >
                {t(item.ru, item.en)}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );

  return (
    <div>
      <div className={scss.filter}>
        {filterHtml.map((el: FilterHtmlType, index: number) =>
          renderFilterItem(el, index)
        )}
      </div>
    </div>
  );
};

export default Filter;
