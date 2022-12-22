import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

import s from "./visible.module.scss";

type Props = {
  canAnimate?: boolean;
  duration: number;
  delay: number;
  children: ReactNode;
};

const MotionVisible = ({ canAnimate = true, duration, delay, children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={canAnimate}
        animate={{ opacity: [0, 1] }}
        transition={{ duration, delay}}
        className={s.container}
      >
        {children}
      </motion.div>
      </AnimatePresence>
  );
};

export default MotionVisible;
