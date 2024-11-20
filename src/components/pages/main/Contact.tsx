import React, { useState } from "react";
import scss from "./Contact.module.scss";
import axios, { AxiosResponse } from "axios";

import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import contour from "../../../assets/images/contour.png"
import line from "../../../assets/images/line.svg"

import {
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon
} from "react-share";
import { useLanguageStore } from "../../../store/translate";
import { useWindowSize } from "react-use";

interface FormData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  group_or_company: string;
  how_can_we_help: string;
}

enum Language {
  RU = 'RU',
  EN = 'EN'
}

interface LanguageStore {
  t: (ru: string, en: string) => string;
  language?: Language;
}

const Contact: React.FC = () => {
  const { t }: LanguageStore = useLanguageStore();
  const {width} = useWindowSize()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    group_or_company: "",
    how_can_we_help: "",
  });
  console.log(width);
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    try {
      const response: AxiosResponse = await axios.post(
        "http://ec2-16-171-21-204.eu-north-1.compute.amazonaws.com/applications", 
        formData
      );
      console.log("Данные отправлены", response.data);
      
      alert("Форма успешно отправлена!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Ошибка отправки:", err.response?.data);
        alert("Не удалось отправить форму. Попробуйте позже.");
      } else {
        console.error("Неизвестная ошибка:", err);
      }
    }
  };

  const SHARE_URL = 'https://www.google.com/';
  const SHARE_TITLE = 'Check out this amazing site!';

  return (
    <section id={scss.Contact}>
      <div className="container">
        <div className={scss.Contact}>
          <div className={scss.Contact_left}>
            <h1>{t("Отправить сообщение", "Send a message")}</h1>
            <div className={scss.Contact_inputs}>
              <input 
                name="name"
                value={formData.name} 
                onChange={handleChange} 
                type="text" 
                placeholder={t("Имя", "First Name")} 
              />
              <input 
                name="lastName"
                value={formData.lastName} 
                onChange={handleChange} 
                type="text" 
                placeholder={t("Фамилия", "Last Name")} 
              />
              <input 
                name="phone"
                value={formData.phone} 
                onChange={handleChange} 
                type="text" 
                placeholder={t("Телефон", "Phone")} 
              />
              <input 
                name="email"
                value={formData.email} 
                onChange={handleChange}
                type="email"
                placeholder={t("Электронная почта", "Email")}
              />
            </div>
            <input
              name="group_or_company"
              value={formData.group_or_company} 
              onChange={handleChange}
              type="text"
              placeholder={t("Группа или Компания", "Group or Company")}
            />
            <textarea
              name="how_can_we_help"
              value={formData.how_can_we_help} 
              onChange={handleChange}
              placeholder={t("Чем мы можем помочь?", "How can we help?")}
            ></textarea>
            <button onClick={handleSubmit}> 
              {t("Отправить", "Submit")}
            </button>
          </div>

          <div className={scss.Contact_right}>
            <h1>{t("Контактная информация", "Contact Info")}</h1>
            <h4>
              <FaPhoneVolume />
              +996 500 34 84 39
            </h4>
            <h4>
              <CgMail />
              motionweb312@gmail.com
            </h4>
            <div className={scss.Contact_icons}>
              <h3>
                <FaTelegramPlane />
              </h3>
              <h3>
                <IoLogoWhatsapp />
              </h3>
              <h3>
                <FaInstagram />
              </h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1714.658611897622!2d74.5864357317366!3d42.873786335082514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1731156835880!5m2!1sru!2skg"
              width="100%"
              height="250px"
              loading="lazy"
            ></iframe>
            <img src={line} alt=""/>
            {
              width >= 801 
              &&
              <button onClick={() => setIsOpen(!isOpen)} className={scss.open}>
                <img src={contour} alt="Open share" />
              </button>

            }
            
            {isOpen && (
              <div className={scss.share}>
                <h4>Send</h4>
                <p>SHARE THIS SITE WITH YOUR FRIENDS</p>
                <div className={scss.icons}>
                  <FacebookShareButton url={SHARE_URL}>
                    <FacebookIcon size={48} round />
                  </FacebookShareButton>

                  <TwitterShareButton url={SHARE_URL} title={SHARE_TITLE}>
                    <TwitterIcon size={48} round />
                  </TwitterShareButton>

                  <WhatsappShareButton url={SHARE_URL} title={SHARE_TITLE}>
                    <WhatsappIcon size={48} round />
                  </WhatsappShareButton>

                  <TelegramShareButton url={SHARE_URL} title={SHARE_TITLE}>
                    <TelegramIcon size={48} round />
                  </TelegramShareButton>
                </div>
                <button className={scss.btn} onClick={() => setIsOpen(!isOpen)}>
                  DONE
                </button>
              </div>
            )}
          </div>
          {
            width < 801 && <div className={scss.div}>
            <button onClick={() => setIsOpen(!isOpen)} className={scss.open}>
              <img src={contour} alt="Open share" />
            </button>
            <span>Copy the link</span> 
          </div>
          }
        </div>
      </div>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className={scss.dark}
        ></div>
      )}
    </section>
  );
};

export default Contact;