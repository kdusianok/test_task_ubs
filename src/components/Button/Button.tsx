import React, { CSSProperties } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  style?: CSSProperties;
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ style, children, onClick }) => {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
