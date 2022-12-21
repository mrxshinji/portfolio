import s from "./closeIcon.module.scss";

const CloseIcon = () => {
  return (
    <div className={s.container}>
      <span className={s.line1}></span>
      <span className={s.line3}></span>
    </div>
  );
};

export default CloseIcon;
