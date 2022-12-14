import s from "./hamburger.module.scss";

const HamburgerIcon = () => {
  return (
    <div className={s.container}>
      <span className={s.line1}></span>
      <span className={s.line2}></span>
      <span className={s.line3}></span>
    </div>
  );
};

export default HamburgerIcon;
