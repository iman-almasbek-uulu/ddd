import scss from "./CambridgeExam.module.scss"
import bg from "../../../assets/images/other.png"
import { useLanguageStore } from '../../../store/translate';
const Other = () => {
    const {t} = useLanguageStore()
    return (
        <div className={scss.Exam}>
            <div className="container">
                <h1> <span>{t("Другие","Other")}</span>{t(" экзамены","  exams")}</h1>
                <div className={scss.image}>
                    <img src={bg} alt="image" />
                </div>
                <h2>{t("Бумажные экзамены – Третья сторона","Paper Exams –Third party")} </h2>
                <div className={scss.extra}>{t("Наш офис также готов организовать бумажные экзамены от имени других школ или частных учреждений. Пожалуйста, имейте в виду следующее:","Our office is also willing to proctor paper exams on behalf of other schools or private institutions. Please keep the following in mind:")} </div>

                <ul className={`${scss.list2} ${scss.list}`}>
                    <li>{t("Надежные эксперты: Разработанный экспертами из Кембриджа и поддерживаемый сильной командой исследователей и разработчиков, IELTS является наиболее надежным тестом на знание английского языка.","Reliable Experts: Developed by Cambridge experts and well supported by a strong research and development team, IELTS is the most trusted name for the English efficiency test.")}</li>
                    <li>{t("Периодичность тестирования: Благодаря легкодоступности тестов, это наиболее удобно для тех, кто проходит тестирование. Оно доступно до 4-х дней в месяц.","Frequency of Test: Due to the tests’ easy availability, it is the most convenient for test-takers. It is available up to 4 dates a month.")}</li>
                    <li>{t("Принимается большинством организаций: Более 10 000 организаций по всему миру доверяют IELTS и принимают результаты для подтверждения уровня владения языком. принимается более чем 8 000 университетами, работодателями и иммиграционными организациями по всему миру.","Accepted by Most Organizations: More than 10,000 organizations globally trust IELTS and accept the score to validate language proficiency. accepted by over 8,000 universities, employers and immigration organizations worldwide")}</li>
                    <li>{t("Тестирование лицом к лицу: Известно, что это самый честный из всех тестов и единственный, который включает в себя взаимодействие лицом к лицу.","Face to Face Testing: It is known to be the fairest of all tests and is the only one that includes a face-to-face interaction.")}</li>
                </ul>
                <h2>{t("Требования к удостоверению личности","ID Requirements")}</h2>
                <ul className={`${scss.list2} ${scss.list}`}>
                    <li>{t("Надежные эксперты: Разработанный экспертами из Кембриджа и поддерживаемый сильной командой исследователей и разработчиков, IELTS является наиболее надежным тестом на знание английского языка.","Reliable Experts: Developed by Cambridge experts and well supported by a strong research and development team, IELTS is the most trusted name for the English efficiency test.")}</li>
                </ul>
                <h2>{t("Часто задаваемые вопросы","Frequently Asked Questions")}</h2>
                <ul className={`${scss.list2} ${scss.list}`}>
                    <li>{t("Где я могу припарковаться?","Where can I park?")}</li>
                    <li>{t("Информацию о парковке, включая инструкции по оплате парковки, можно найти [здесь].","Parking information including instructions on how to pay for parking can be found [here].")}</li>
                    <li>{t("Что мне нужно взять с собой?","What do I need to bring?")}</li>
                    <li>{t("Вам нужно будет иметь при себе соответствующее удостоверение личности (см. выше) и хорошее настроение! Также рекомендуется немного перекусить или выпить воды. У нас будет все необходимое для прохождения теста.","You will need to bring proper identification (see above) and a good attitude! A small snack or water is also encouraged. We will have everything else you will need to take the test.")}</li>
                    <li>{t("Как долго продлится экзамен?","How long is the exam?")}</li>
                    <li>{t("Время проведения экзамена зависит от самого экзамена. Все экзамены, которые мы проводим для других школ, отличаются друг от друга, и тест UT High School, безусловно, отличается от теста Университета Буффало.","The exam time is dependent on the exam itself. Every exam we do for others' schools is different and a UT High School test is certainly different from the University of Buffalo.")}</li>
                    <li>{t("Где я буду хранить свои личные вещи во время теста?","Where will I store my personal belongings during the test?")}</li>
                    <li>{t("Перед началом тестирования вам будет предоставлен надежный шкафчик для хранения ваших личных вещей","You will be provided a secure locker for your personal belongings before testing begins")}</li>
                </ul>

            </div>
        </div>
    );
};

export default Other;