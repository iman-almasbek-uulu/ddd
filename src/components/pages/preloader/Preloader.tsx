import scss from "./Preloader.module.scss";

interface PreloaderProps {
  progress: number;
}

const Preloader = ({ progress }: PreloaderProps) => {
  return (
    <div id={scss.Preloader}>
      <div className={scss.loader}></div>
      <h1>{progress}%</h1>
    </div>
  );
};

export default Preloader;
