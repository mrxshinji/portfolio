import s from "./header.module.scss";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

import GithubIcon from "/public/svg/github.svg";
import HamburgerIcon from "../hamburger/hamburger";
import Button from "components/button/button";
import NavList from "./navList";

type Props = {
  isHeaderVisible: boolean;
};

const Header = ({ isHeaderVisible }: Props) => {
  const gitHubLink = "https://github.com/mrxshinji";

  // sidebar
  const [isSidebar, setIsSideBar] = useState(false);
  const sideBarRef = useRef<any>(null);
  // need to check what ref type to use

  // --------------------- Sidebar ---------------------

  const toggleSidebar = () => {
    setIsSideBar((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(ev: MouseEvent) {
      if (sideBarRef.current && !sideBarRef.current.contains(ev.target)) {
        setIsSideBar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebar]);

  // --------------------- Sidebar ---------------------

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
          <Link href={gitHubLink}>
            <span className={s.linkIcon}>
              <GithubIcon />
            </span>
          </Link>
        </li>
      </ul>
      <ul className={s.navMenuList}>
        <NavList />
      </ul>
      <button onClick={toggleSidebar} className={s.collapsedButton}>
        <HamburgerIcon />
      </button>
      {isSidebar && (
        <div className={s.sideBar} ref={sideBarRef}>
          <button onClick={toggleSidebar} className={s.closeButton}>
            <HamburgerIcon />
          </button>
          <ul>
            <NavList />
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Header;
