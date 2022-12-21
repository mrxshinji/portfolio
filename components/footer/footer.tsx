import s from "./footer.module.scss";

import { motion } from "framer-motion";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Button from "components/button/button";

type Props = {
  isHeaderVisible: boolean;
};

const Footer = ({ isHeaderVisible }: Props) => {
  const { pathname } = useRouter();
  const [selectLink, setSelectLink] = useState(0);

  useEffect(() => {
    const list = ["/", "/about", "/skills", "/projects", "/contact"];
    let linkNumber = list.indexOf(pathname);
    setSelectLink(linkNumber);
  }, [pathname]);

  const linkList = {
    "/": "Home",
    "/about": "About",
    "/skills": "Skills",
    "/projects": "Works",
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
      if (prev === 4) {
        return 4;
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
          >
            <Button width={100} height={42}>
              <p>{Object.values(linkList)[selectLink - 1]}</p>
            </Button>
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
          >
            <Button width={100} height={42}>
              <p>{Object.values(linkList)[selectLink + 1]}</p>
            </Button>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Footer;
