import { ReactNode, useEffect, useState } from "react";
import Header from "../header/header";
import s from "./layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    setInterval(visibleMain);
    return () => {
      setIsMainVisible(false);
    };
  }, []);

  useEffect(() => {
    setInterval(visibleHeader, 500);
    return () => {
      setIsHeaderVisible(false);
    };
  }, [isMainVisible]);

  const visibleHeader = () => {
    setIsHeaderVisible(true);
  };

  const visibleMain = () => {
    setIsMainVisible(true);
  };

  return (
    <div className={s.container}>
      <header>
        <Header isHeaderVisible={isHeaderVisible} />
      </header>
      {isMainVisible && <main>{children}</main>}
    </div>
  );
};

export default Layout;
