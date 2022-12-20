import { FC, ButtonHTMLAttributes } from "react";
import s from "./button.module.scss";

export type ButtonProps = {
  width: number;
  height: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  width,
  height,
  children,
  ...otherProps
}) => {
  const size = {
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <button className={s.buttonContainer} {...otherProps} style={{ ...size }}>
      {children}{" "}
    </button>
  );
};

export default Button;
