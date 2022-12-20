import { ReactNode } from "react";
import s from "./skillItem.module.scss";

type Props = {
  children: ReactNode;
  name: string;
};

const SkillItem = ({ children, name }: Props) => {
  return (
    <div className={s.container}>
      <span className={s.icon}>{children}</span>
      <p>{name}</p>
    </div>
  );
};

export default SkillItem;
