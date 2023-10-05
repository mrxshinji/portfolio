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
        right: ["-80%", "0%"],
        opacity: [1],
      }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className={s.introTextContainer}>
        <p>Hello, I`m ZH Wong, with an alias of mrxshinji”.</p>
        <br />
        <p>I`m a front-end web developer based in Kuala Lumpur, Malaysia.</p>
      </div>
      <div className={s.linkContainer}>
        <MotionVisible canAnimate={canAnimate} duration={1} delay={2}>
          <p>
            I was a Project Engineer who manage multi-million projects and
            ensuring project meeting deadlines. Now working as CRM Developer. (Project RUBIK, CIMB)
          </p>
          <br />
          <p>
            I am aspiring Developer pursuing I would like to do. I may
            not have much experience and yet manage to write{" "}
            <Link className={s.linkToWork} href='/projects'>
              these
            </Link>{" "}
            sites after first few month of self-studying.
          </p>
          <br />
        </MotionVisible>
      </div>
    </motion.div>
  );
};

export default Intro;
