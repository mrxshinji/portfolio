import s from "../styles/Home.module.scss";

import NameLogo from "./components/name/name";
import Intro from "./components/introText/intro";

export default function Home() {
  return (
    <div className={s.container}>
      <NameLogo />
      <Intro />
    </div>
  );
}
