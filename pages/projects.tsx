import s from "../styles/Projects.module.scss";

import MotionVisible from "../components/motion/motionVisible";
import NameLogo from "components/name/name";
import ProjectCard from "components/projectCard/projectCard";
import Button from "components/button/button";

import BackArrow from "public/images/back.svg";
import FrontArrow from "public/images/front.svg";

import { useEffect, useState } from "react";

import projects from "lib/pastWorkToUse.json";

export default function Projects() {
  const [projectId, setProjectId] = useState(0);
  const [isOugi, setIsOugi] = useState(false);

  useEffect(() => {
    setIsOugi(true);
    setTimeout(closeOugi, 1000);
  }, []);

  const nextProject = () => {
    setProjectId((prev) => {
      if (prev === 4) {
        return 0;
      } else {
        return prev + 1;
      }
    });
    openCloseOugi();
  };

  const backProject = () => {
    setProjectId((prev) => {
      if (prev === 0) {
        return 4;
      } else {
        return prev - 1;
      }
    });
    openCloseOugi();
  };

  const closeOugi = (): void => {
    setIsOugi(false);
  };

  const openCloseOugi = () => {
    setIsOugi(true);
    setTimeout(closeOugi, 1000);
  };

  return (
    <div className={s.container}>
      <NameLogo />
      <MotionVisible duration={0.7} delay={0}>
        <div className={s.title}>
          <h1>Recent Work</h1>
        </div>
        <div className={s.body}>
          <div className={s.backBtn}>
            <Button
              width={50}
              height={50}
              onClick={backProject}
              className={s.buttons}
              disabled={isOugi}
            >
              <BackArrow />
            </Button>
          </div>
          <div className={s.frontBtn}>
            <Button
              width={50}
              height={50}
              onClick={nextProject}
              className={s.buttons}
              disabled={isOugi}
            >
              <FrontArrow />
            </Button>
          </div>
          {projects
            .filter((el) => el.id === projectId)
            .map((el, idx) => {
              return (
                <ProjectCard
                  key={idx}
                  imgUrl={el.link}
                  webLink={el.url}
                  repoLink={el.repo}
                  name={el.name}
                  isOugi={isOugi}
                />
              );
            })}
        </div>
      </MotionVisible>
    </div>
  );
}
