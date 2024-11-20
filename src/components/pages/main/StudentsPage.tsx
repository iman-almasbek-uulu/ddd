import React, { useState } from "react";
import scss from "./StudentsPage.module.scss";
import studest_img from "../../../assets/images/Studest_image1.svg";
import studest_img2 from "../../../assets/images/Studest_imag2.svg";
import close from "../../../assets/images/close-cross.png";
import { useLanguageStore } from "../../../store/translate";

interface YouTubeModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

const YouTubeModal: React.FC<YouTubeModalProps> = ({ videoId, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={scss.modal_overlay}>
      <div className={scss.modal_content}>
        <button 
          className={scss.modal_close} 
          onClick={onClose}
        >
          <img src={close} alt="" />
        </button>
        <iframe 
          width="100%" 
          height="450" 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const StudentsPage: React.FC = () => {
  const { t } = useLanguageStore();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>('');

  const openModal = (videoId: string): void => {
    setCurrentVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setCurrentVideoId('');
  };

  const studentImages = [
    { img: studest_img, alt: t("Студент 1", "Student 1") },
    { img: studest_img2, alt: t("Студент 2", "Student 2") },
    { img: studest_img, alt: t("Студент 1", "Student 1") },
    { img: studest_img2, alt: t("Студент 2", "Student 2") }
  ];

  return (
    <section id={scss.Students}>
      <div className="container">
        <h1>
          {t(
            "Видеоотзывы наших студентов",
            "Video testimonials from our students"
          )}
        </h1>
        <div className={scss.Students}>
          {studentImages.map((student, index) => (
            <img 
              key={index} 
              onClick={() => openModal('dQw4w9WgXcQ')} 
              src={student.img} 
              alt={student.alt} 
            />
          ))}
        </div>
        <YouTubeModal 
          videoId={currentVideoId} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      </div>
    </section>
  );
};

export default StudentsPage;