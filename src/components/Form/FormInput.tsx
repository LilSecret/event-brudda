import { ComponentProps } from "react";
import styles from "./form.module.css";

function FormInput({
  label,
  id,
  inputProps,
}: {
  id: string;
  label: string;
  inputProps: ComponentProps<"input">;
}) {
  return (
    <div className={styles["text-input"]}>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} name={id} {...inputProps} required />
    </div>
  );
}

export default FormInput;
