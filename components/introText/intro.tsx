import s from "./intro.module.scss";

import { motion } from "framer-motion";
import Link from "next/link";
import useIntro from "utils/useIntro";
import MotionVisible from "../motion/motionVisible";

const Intro = () => {
  const canAnimate = useIntro();

  return (
    <motion.div
      layout
      className={s.frontContainer}
      initial={canAnimate}
      animate={{
        right: ["-400px", "0px"],
        opacity: [1],
      }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className={s.introTextContainer}>
        <p>
          Hello, I`m Shinji, with an alias of mrxshinji which read as “Mr, X,
          Shinji”.
        </p>
        <br />
        <p>I`m a front-end web developer based in Kuala Lumpur, Malaysia.</p>
      </div>
      <div className={s.linkContainer}>
        <MotionVisible canAnimate={canAnimate} duration={1} delay={2}>
          <ul>
            <li>
              <Link href='/about'>About Me</Link>
            </li>
            <li>
              <Link href='/skills'>My Skills</Link>
            </li>
            <li>
              <Link href='/project'>My Work</Link>
            </li>
            <li>
              <Link href='/'>Contact Me</Link>
            </li>
          </ul>
        </MotionVisible>
      </div>
    </motion.div>
  );
};

export default Intro;
