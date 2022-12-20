import s from "../styles/Skills.module.scss";
import MotionVisible from "../components/motion/motionVisible";
import NameLogo from "components/name/name";
import Button from "components/button/button";
import Link from "next/link";
import SkillItem from "components/skill-item/skillItem";

import HtmlIcon from "public/svg/html.svg";
import CSSIcon from "public/svg/css.svg";
import MongoIcon from "public/svg/mongo.svg";
import NextIcon from "public/svg/next.svg";
import PsqlIcon from "public/svg/psql.svg";
import ReactIcon from "public/svg/react.svg";
import TSIcon from "public/svg/typescript.svg";
import JSIcon from "public/svg/js.svg";

export default function Skills() {
  return (
    <div className={s.container}>
      <NameLogo />
      <MotionVisible duration={0.2} delay={0}>
        <div className={s.title}>
          <h1>Skills I`m focusing on</h1>
        </div>
        <div className={s.body}>
          <div className={s.skillContainer}>
            <SkillItem name={"HTML"}>
              <HtmlIcon />
            </SkillItem>
            <SkillItem name={"Javascript"}>
              <JSIcon />
            </SkillItem>
            <SkillItem name={"CSS"}>
              <CSSIcon />
            </SkillItem>
            <SkillItem name={"Typescript"}>
              <TSIcon />
            </SkillItem>
          </div>
          <div className={s.skillContainer}>
            <SkillItem name={"React"}>
              <ReactIcon />
            </SkillItem>
            <SkillItem name={"Next"}>
              <NextIcon />
            </SkillItem>
          </div>
          <div className={s.skillContainer}>
            <SkillItem name={"postGre"}>
              <PsqlIcon />
            </SkillItem>
            <SkillItem name={"mongoDb"}>
              <MongoIcon />
            </SkillItem>
          </div>
        </div>
      </MotionVisible>
    </div>
  );
}
