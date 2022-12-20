import s from "../styles/Contact.module.scss";

import MotionVisible from "../components/motion/motionVisible";
import NameLogo from "components/name/name";
import Link from "next/link";
import Button from "components/button/button";

export default function About() {
  const mailTo = () => {
    window.location.href = "mailto:zshinjiz39@gmail.com";
  };
  return (
    <div className={s.container}>
      <NameLogo />
      <MotionVisible duration={0.2} delay={0}>
        <div className={s.title}>
          <h1>Get In Touch</h1>
        </div>
        <div className={s.body}>
          <p>
            I`m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I`ll try
            my best to get back to you!
          </p>
          <br />
          <Button width={114} height={54} onClick={mailTo}>Say Hello</Button>
        </div>
      </MotionVisible>
    </div>
  );
}
