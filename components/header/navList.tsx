import s from "./navList.module.scss";

import Button from "components/button/button";
import Link from "next/link";

import { useRouter } from "next/router";

const NavList = () => {
  const { pathname } = useRouter();

  return (
    <>
      <li className={pathname === "/" ? s.active : undefined}>
        <Button width={114} height={32}>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
        </Button>
      </li>
      <li className={pathname === "/about" ? s.active : undefined}>
        <Button width={114} height={32}>
          <Link href={"/about"}>
            <p>About</p>
          </Link>
        </Button>
      </li>
      <li className={pathname === "/skills" ? s.active : undefined}>
        <Button width={114} height={32}>
          <Link href={"/skills"}>
            <p>Skills</p>
          </Link>
        </Button>
      </li>
      <li className={pathname === "/projects" ? s.active : undefined}>
        <Button width={114} height={32}>
          <Link href={"/projects"}>
            <p>Projects</p>
          </Link>
        </Button>
      </li>
      <li className={pathname === "/contact" ? s.active : undefined}>
        <Button width={114} height={32}>
          <Link href={"/contact"}>
            <p>Contact</p>
          </Link>
        </Button>
      </li>
    </>
  );
};

export default NavList;
