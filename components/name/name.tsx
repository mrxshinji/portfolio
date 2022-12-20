import s from "./name.module.scss";

import { motion } from "framer-motion";
import useIntro from "utils/useIntro";

const NameLogo = () => {
  const canAnimate = useIntro();

  return (
    <motion.div
      className={s.container}
      initial={canAnimate}
      animate={{
        top: ["0px", "320px"],
        opacity: [1, 1, 0.5, 0.2, 0.1],
      }}
      transition={{ duration: 1 }}
    >
      <span className={s.nameLogo}>mrxshinji</span>
    </motion.div>
  );
};

export default NameLogo;
