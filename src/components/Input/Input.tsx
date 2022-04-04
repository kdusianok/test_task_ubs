import React, { useCallback } from "react";
import styles from "./Input.module.css";

interface InputProps {
  value?: string;
  defaultValue?: string;
  endAdornment?: JSX.Element;
  onChange: (value: string) => void;
  onEnter?: () => void;
}

const Input: React.FC<InputProps> = ({
  value,
  defaultValue,
  endAdornment,
  onChange,
  onEnter
}) => {
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const onEnterHandler = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") onEnter();
    },
    [onEnter]
  );

  return (
    <div className={styles.wrapper}>
      <div></div>
      <input
        type="text"
        className={styles.input}
        value={value}
        defaultValue={defaultValue}
        onChange={onChangeHandler}
        onKeyUp={onEnterHandler}
      />
      <div>{endAdornment}</div>
    </div>
  );
};

export default React.memo(Input);
