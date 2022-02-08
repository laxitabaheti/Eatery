import styles from "./Input.module.css";

import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input_whole}>
      <label className={styles.label} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} className={styles.input} {...props.input} />
    </div>
  );
});
export default Input;
