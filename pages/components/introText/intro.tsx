import s from "./intro.module.scss";

import { motion } from "framer-motion";
import Link from "next/link";

const Intro = () => {
  return (
    <motion.div
      layout
      className={s.frontContainer}
      initial={{ right: "-400px", opacity: 0 }}
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
      <motion.div
        className={s.linkContainer}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ul>
          <li>
            <Link href='/'>About Me</Link>
          </li>
          <li>
            <Link href='/'>My Work</Link>
          </li>
          <li>
            <Link href='/'>Contact Me</Link>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
