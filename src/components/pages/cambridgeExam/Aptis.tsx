import scss from "./CambridgeExam.module.scss"
import bg from "../../../assets/images/exam.jpg"
import { useLanguageStore } from '../../../store/translate';
const Aptis = () => {
    const {t} = useLanguageStore()
    return (
        <div className={scss.Exam}>
            <div className="container">
                <h1> <span>{t("Что","What")}</span>{t(" Что такое APTIS?","  is APTIS?")}</h1>
                <div className={scss.image}>
                    <img src={bg} alt="image" />
                </div>
                <h2>{t("Что такое APTIST? Полное введение.","What Is APTIST ? A Complete Introduction")} </h2>
                <p style={{marginBottom: '50px'}} className={scss.descr}>
                    {t(
                        `Представленная в 1989 году Международная система тестирования на знание английского языка IELTS - это признанный на международном уровне тест на знание английского языка, предназначенный для проверки владения английским языком в четырех категориях:`,
                        `Introduced in 1989, IELTS, the International English Language Testing System, is an English language proficiency test internationally recognized for testing English language ability in four categories:`
                    )}
                    
                </p>
                <ul className={`${scss.list2} ${scss.list}`}>
                    <li>{t("Прослушивание","Listening")}</li>
                    <li>{t("Чтение","Reading")}</li>
                    <li>{t("Пишу","Writing")}</li>
                    <li>{t("Говорящий","Speaking")}</li>
                </ul>
                <h2>{t("Типы тестов APTIS","Types Of APTIS test")}</h2>
                <p className={scss.descr}>
                    {t(
                        `
                            КСдать тест IELTS может любой желающий, независимо от возраста, пола, расы, национальности или вероисповедания. 
                            Администраторы IELTS (IDP или British Council) не установили возрастных ограничений для прохождения теста IELTS. 
                            Это одно из преимуществ IELTS. Однако кандидатам младше 16 лет это не рекомендуется. Хотя при желании они также 
                            могут пройти тест. Любой, кто хочет получить высшее образование за рубежом или работать за границей, может сдать
                            экзамен IELTS (академическая и общая подготовка). Однако кандидаты всегда должны проверять критерии отбора в учебное
                            заведение или организацию, в которую они подают заявление.
                        `,
                        `
                            Anyone can take the IELTS test irrespective of age, gender, race, nationality or religion. 
                            IELTS administrators (IDP or British Council) has set no age limit to take the IELTS test. 
                            This is one of the IELTS advantages. However, for candidates below 16 years, it is not recommended. 
                            Although if they wish, they can also take the test. Anyone who wishes to pursue higher studies abroad 
                            or work abroad can attempt the IELTS exam (Academic and General Training). However, candidates should
                            always check the educational institution’s eligibility criteria or organization where they are applying.
                        `,
                        )}
                </p>
                <ul className={`${scss.list2} ${scss.list}`}>
                    <li>{t("Надежные эксперты: Разработанный экспертами из Кембриджа и поддерживаемый сильной командой исследователей и разработчиков, IELTS является наиболее надежным тестом на знание английского языка.","Reliable Experts: Developed by Cambridge experts and well supported by a strong research and development team, IELTS is the most trusted name for the English efficiency test.")}</li>
                    <li>{t("Периодичность тестирования: Благодаря легкодоступности тестов, это наиболее удобно для тех, кто проходит тестирование. Оно доступно до 4-х дней в месяц.","Frequency of Test: Due to the tests’ easy availability, it is the most convenient for test-takers. It is available up to 4 dates a month.")}</li>
                    <li>{t("Принимается большинством организаций: Более 10 000 организаций по всему миру доверяют IELTS и принимают результаты для подтверждения уровня владения языком. принимается более чем 8 000 университетами, работодателями и иммиграционными организациями по всему миру.","Accepted by Most Organizations: More than 10,000 organizations globally trust IELTS and accept the score to validate language proficiency. accepted by over 8,000 universities, employers and immigration organizations worldwide")}</li>
                    <li>{t("Тестирование лицом к лицу: Известно, что это самый честный из всех тестов и единственный, который включает в себя взаимодействие лицом к лицу.","Face to Face Testing: It is known to be the fairest of all tests and is the only one that includes a face-to-face interaction.")}</li>
                </ul>
            </div>
        </div>
    );
};

export default Aptis;