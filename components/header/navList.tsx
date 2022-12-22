import s from "./navList.module.scss";

import Link from "next/link";

import { useRouter } from "next/router";

const NavList = () => {
  const { pathname } = useRouter();

  return (
    <>
      <li className={pathname === "/" ? s.active : undefined}>
        <Link href={"/"} className={s.navBtn}>
          <p>Home</p>
        </Link>
      </li>
      <li className={pathname === "/projects" ? s.active : undefined}>
        <Link href={"/projects"} className={s.navBtn}>
          <p>Projects</p>
        </Link>
      </li>
      <li className={pathname === "/skills" ? s.active : undefined}>
        <Link href={"/skills"} className={s.navBtn}>
          <p>Skills</p>
        </Link>
      </li>
      <li className={pathname === "/contact" ? s.active : undefined}>
        <Link href={"/contact"} className={s.navBtn}>
          <p>Contact</p>
        </Link>
      </li>
    </>
  );
};

export default NavList;
