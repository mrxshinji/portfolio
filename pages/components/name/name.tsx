import s from "./name.module.scss";

import { motion } from "framer-motion";

const NameLogo = () => {
  return (
    <motion.div
      className={s.container}
      initial={{ top: "-200px", opacity: 1 }}
      animate={{
        top: ["0px", "320px"],
        opacity: [1, 1, 0.5, 0.2],
      }}
      transition={{ duration: 1 }}
    >
      <span className={s.nameLogo}>mrxshinji</span>
    </motion.div>
  );
};

export default NameLogo;
