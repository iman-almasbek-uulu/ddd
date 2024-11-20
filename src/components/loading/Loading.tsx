import { useEffect, useState } from "react";
import scss from "./Loading.module.scss";

const Loading = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [1000, 1000, 500, 500];

    const timers = steps.map((_, index) =>
      setTimeout(
        () => {
          setStep(index + 1);
        },
        steps.slice(0, index + 1).reduce((acc, t) => acc + t, 0)
      )
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className={scss.Loading}>
      <h1
        className={`${scss.text} ${step === 1 ? scss.visible : ""}`}
        data-aos="fade-up"
      >
        0%
      </h1>
      <h1 className={`${scss.text} ${step === 2 ? scss.visible : ""}`}>50%</h1>
      <h1 className={`${scss.text} ${step === 3 ? scss.visible : ""}`}>90%</h1>
      <h1 className={`${scss.text} ${step === 4 ? scss.visible : ""}`}>100%</h1>
    </div>
  );
};

export default Loading;
