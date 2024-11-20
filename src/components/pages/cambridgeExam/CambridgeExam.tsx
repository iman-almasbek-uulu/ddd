import scss from "./CambridgeExam.module.scss"
import bg from "../../../assets/images/exam.jpg"
import { useLanguageStore } from '../../../store/translate';
const CambridgeExam = () => {
    const {t} = useLanguageStore()
    return (
        <div className={scss.Exam}>
            <div className="container">
                <h1> <span>{t("Кембриджский","Cambridge")}</span>{t(" экзамен по английскому языку"," English Exam")}</h1>
                <div className={scss.image}>
                    <img src={bg} alt="image" />
                </div>
                <h2>{t("Для кого предназначены Кембриджские экзамены по английскому языку?.","Who are the Cambridge English exams for?.")} </h2>
                <p style={{marginBottom: '50px'}} className={scss.descr}>
                    {t(
                        `Кембриджские экзамены по английскому настоятельно рекомендуются всем, кто планирует заниматься
                        международным бизнесом или учиться и/или работать за границей. Куда бы вас ни занесла жизнь, вы сможете
                        подтвердить свой уровень владения английским языком с помощью Кембриджского сертификата`,
                        `The Cambridge English exams are strongly recommended for anyone who plans to work in 
                        international business or study and/or work overseas. Wherever life takes you, you will 
                        be able to prove your English level with your Cambridge Certificate`,
                    )}
                    
                </p>
                <h2>{t("Что включают в себя Кембриджские экзамены?","What do the Cambridge exams involve?")}</h2>
                <div className={scss.extra}>{t("Официальное признание","Official recognition")}</div>
                <p className={scss.descr}>
                    {t(
                        `
                            Квалификация по английскому языку в Кембридже принята во всем мире. 
                            Это знак отличия, которому доверяют тысячи ведущих высших
                            учебных заведений, правительств и работодателей. Получив квалификацию по английскому языку в Кембридже
                            , вы откроете двери в мир возможностей – в буквальном смысле этого слова!
                        `,
                        `
                            TCambridge English Qualifications are accepted worldwide. 
                            They are a mark of excellence trusted by thousands of leading higher 
                            education institutions, governments and employers. With a Cambridge English 
                            Qualification, you'll open doors to a world of opportunities – literally!
                        `,
                        )}
                </p>
                <p className={scss.descr}>
                    {t(
                        `
                            Когда вы сдадите экзамен, вам будет выдан сертификат Cambridge Assessment English, органа по аккредитации ESOL Кембриджского университета. Каждый год более 300 000 человек из более чем 100 разных стран принимают решение сдать Кембриджский экзамен
                        `,
                        `
                            When you pass the exam, you'll be awarded a certificate delivered by Cambridge Assessment English, the ESOL accreditation body of the University of Cambridge. Each year, more than 300,000 people from over 100 different countries choose to sit a Cambridge exam
                        `,
                        )}
                </p>
                <p className={scss.descr}>
                    {t(
                        `
                            В зависимости от уровня, которого вы хотите достичь, вы можете выбрать один из следующих курсов подготовки к экзаменам:                    `,
                        `
                            Depending on the level you are looking to achieve, you might choose from one of the following exam preparation courses:                    `,
                        )}
                </p>
                <div className={scss.list}>
                    <div>{t("B2 Первый (FCE)","B2 First (FCE)")}</div>
                    <div>{t("C1 продвинутый (CAE)","C1 Advanced (CAE)")}</div>
                    <div>{t("Уровень владения языком C2 (CPE)","C2 Proficiency (CPE)")}</div>
                </div>
            </div>
        </div>
    );
};

export default CambridgeExam;