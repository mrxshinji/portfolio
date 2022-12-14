import s from "./header.module.scss";
import Link from "next/link";
import GithubIcon from "/public/svg/github.svg";
import HamburgerIcon from "../hamburger/hamburger";
import { motion } from "framer-motion";

type Props = {
  isHeaderVisible: boolean;
};

const Header = ({ isHeaderVisible }: Props) => {
  const gitHubLink = "https://github.com/mrxshinji";

  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: isHeaderVisible ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <ul className={s.navMenu}>
        <li>
          <Link href='/' className={s.homeText}>
            mrxshinji
          </Link>
        </li>
        <li>
          <Link href='/'>
            <span className={s.linkIcon}>
              <GithubIcon />
            </span>
          </Link>
        </li>
      </ul>
      <button className={s.collapsedButton}>
        <HamburgerIcon />
      </button>
    </motion.div>
  );
};

export default Header;
