import OthersPage from "./OthersPage";
import ExamsPage from "./ExamsPage";
import StudentsPage from "./StudentsPage";
import ContactForm from "./Contact";
import HomePage from "./HomePage";
import Search from "../../layout/header/Search";

const MainPage = () => {
  return (
    <>
      <div className="Search">
          <Search />
      </div>
      <HomePage />
      <OthersPage />
      <ExamsPage />
      <StudentsPage />
      <ContactForm />
    </>
  );
};

export default MainPage;
