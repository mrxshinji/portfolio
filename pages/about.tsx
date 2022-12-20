import s from "../styles/About.module.scss";

import MotionVisible from "../components/motion/motionVisible";
import NameLogo from "components/name/name";


export default function About() {

  return (
    <div className={s.container}>
      <NameLogo />
      <MotionVisible duration={0.2} delay={0}>
        <div className={s.title}>
          <h1>A little bit about myself</h1>
        </div>
        <div className={s.body}>
          <p>
            Based in Malaysia, I was a Project Engineer who manage multi-million
            projects and ensuring project meeting deadlines.
          </p>
          <br />
          <p>
            But now, I am aspiring Developer pursuing I would like to do. I may
            not have much experience, but I still maange to make this sites
            after three month of self-studying.
          </p>
        </div>
      </MotionVisible>
    </div>
  );
}
