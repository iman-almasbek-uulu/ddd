"use client";
import { useDispatch, useSelector } from "react-redux";
import scss from "./CountriesPage.module.scss";
import Filter from "./filter/Filter";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { readUnivers } from "../../../store/univerSlice";
import Flags from "./flags/Flags";
import { Route, Routes } from "react-router-dom";
import Universities from "./university/University";
import { useLanguageStore } from "../../../store/translate";

const CountriesPage = () => {
  const { t } = useLanguageStore();

  useEffect(() => {
    setTimeout(() => {
        window.scrollTo(10, 0);
    }, 0);
  }, []);
  const {univer,filterUniver} = useSelector((state: RootState) => state.university)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(readUnivers())
  }, [dispatch])


  return (
    <>
    <section id={scss.Countries}>
      <div className="container">
        <h1> {t('Выберите страну','Choose the country')}</h1>
        <Filter univer={univer} filterUniver={filterUniver} />
        <Routes>
          <Route path="" element={<Flags univer={univer} />} />
          <Route path="univer" element={<Universities univer={univer} filterUniver={filterUniver} />} />
        </Routes>
      </div>
    </section>
    </>
  );
};

export default CountriesPage;
