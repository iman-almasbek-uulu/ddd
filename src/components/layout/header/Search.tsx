import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { allFiltered, readUnivers } from "../../../store/univerSlice";
import { useLanguageStore } from '../../../store/translate';
import scss from "./Header.module.scss";
import { Link } from 'react-router-dom';

interface MultiLangField {
  en: string;
  ru: string;
  ky: string;
  flag?:string
}
const Search = () => {
    const { t, currentLanguage } = useLanguageStore(); 

    const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch<AppDispatch>()
    const {univer} = useSelector((state: RootState) => state.university)

    const country = [
      ...new Map(univer.map(item => [item.country.en, item])).values()
    ]

    useEffect(() => {
      dispatch(readUnivers())
    },[dispatch])
    

    const wrapperRef = useRef<HTMLDivElement>();
    
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            setIsOpenSearch(false);
          }
    };
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
    
      const filteredItems = country.filter(item => {
          if (currentLanguage == 'en') {
            return item.country.en.toLowerCase().includes(searchTerm.toLowerCase())
          }else {
            return item.country.ru.toLowerCase().includes(searchTerm.toLowerCase())
          }
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        setIsOpenSearch(value.length > 0);
      };
    
      const handleItemClick = (item: string) => {
        setSearchTerm(item);
        setIsOpenSearch(false);
      };
      const toggleFilter = (data: MultiLangField) => {
        dispatch(allFiltered(data));
      }
    
    return (
        <div className={scss.SearchContainer}>
        <input
          type="text"
          value={searchTerm}
          className={`${isOpenSearch ? `${scss.focus} focus2` : ''}`}
          onChange={handleInputChange}
          onFocus={() => setIsOpenSearch(searchTerm.length > 0)}
          placeholder={t("   Поиск...", "    Search...")}
        />
        {isOpenSearch && filteredItems.length > 0 && (
          <div className={scss.search_modal}>
              {filteredItems.map((item, index) => (
                <Link to="/study/univer"
                  key={index}
                  onClick={() => {
                    handleItemClick(currentLanguage == "en" ? item.country.en : item.country.ru)
                    toggleFilter(item.country)
                  }}
                >
                  {currentLanguage == "en" ? item.country.en : item.country.ru}
                </Link>
              ))}
            </div>
            )}

        {isOpenSearch && filteredItems.length === 0 && (
          <div>
            Ничего не найдено
          </div>
        )}

      </div>
    );
};

export default Search;