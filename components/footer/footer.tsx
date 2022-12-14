import s from "./footer.module.scss";

import { motion } from "framer-motion";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  isHeaderVisible: boolean;
};

const Footer = ({ isHeaderVisible }: Props) => {
  const { pathname } = useRouter();
  const [selectLink, setSelectLink] = useState(0);

  useEffect(() => {
    const list = ["/", "/projects", "/skills", "/contact"];
    let linkNumber = list.indexOf(pathname);
    setSelectLink(linkNumber);
  }, [pathname]);

  const linkList = {
    "/": "Home",
    "/projects": "Works",
    "/skills": "Skills",
    "/contact": "Contact",
  };

  const hiddenStyle = {
    opacity: 0,
  };

  const handleBackLink = (): void => {
    setSelectLink((prev) => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  const handleNextLink = (): void => {
    setSelectLink((prev) => {
      if (prev === 3) {
        return 3;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: isHeaderVisible ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <ul>
        <li
          onClick={handleBackLink}
          style={pathname === "/" ? hiddenStyle : undefined}
        >
          <Link
            href={
              Object.keys(linkList)[selectLink - 1] ||
              Object.keys(linkList)[selectLink]
            }
            className={s.linkContainer}
          >
            <div>
              <p>{Object.values(linkList)[selectLink - 1] || "disabled button"}</p>
            </div>
          </Link>
        </li>
        <li className={s.linkActive}>
          <p>{Object.values(linkList)[selectLink]}</p>
        </li>
        <li
          onClick={handleNextLink}
          style={pathname === "/contact" ? hiddenStyle : undefined}
        >
          {" "}
          <Link
            href={
              Object.keys(linkList)[selectLink + 1] ||
              Object.keys(linkList)[selectLink]
            }
            className={s.linkContainer}
          >
            <p>{Object.values(linkList)[selectLink + 1]}</p>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Footer;
