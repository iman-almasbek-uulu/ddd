import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import CountriesPage from "./components/pages/countries/CountriesPage";
import MainPage from "./components/pages/main/MainPage";
import Footer from "./components/layout/footer/Footer";
import Solbrige from "./components/pages/SolbrigeUniversity copy/Solbrige";
import AbroadPage from "./components/pages/abroad/AbroadPage";
import AboutPage from "./components/pages/AboutPage/About";
import Contact from "./components/pages/main/Contact";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";
import CambridgeExam from "./components/pages/cambridgeExam/CambridgeExam";
import Aptis from "./components/pages/cambridgeExam/Aptis";
import Ielts from "./components/pages/cambridgeExam/Ielts";
import Other from "./components/pages/cambridgeExam/Other";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const routes = [
    {
      id: 1,
      path: "/",
      element: <MainPage />,
    },
    {
      id: 2,
      path: "/about",
      element: <AboutPage />,
    },
    {
      id: 3,
      path: "/study/*",
      element: <CountriesPage />,
    },
    {
      id: 4,
      path: "/",
      element: <MainPage />,
    },
    {
      id: 5,
      path: "/study/univer/:id",
      element: <Solbrige />,
    },
    {
      id: 6,
      path: "/abroad",
      element: <AbroadPage />,
    },
    {
      id: 7,
      path: "/contact",
      element: <Contact />,
    },
    {
      id:8,
      path: '/cambridge',
      element: <CambridgeExam />
    },
    {
      id:9,
      path: '/aptis',
      element: <Aptis />
    },
    {
      id:10,
      path: '/ielts',
      element: <Ielts />
    },
    {
      id:11,
      path: '/other',
      element: <Other />
    },
  ];
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Header />
          <Routes>
            {routes.map((item) => (
              <Route path={item.path} element={item.element} key={item.id} />
            ))}
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
