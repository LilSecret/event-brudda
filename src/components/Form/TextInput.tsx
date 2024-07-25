import { ComponentProps } from "react";

function TextInput({
  label,
  name,
  inputProps,
}: {
  label: string;
  name: string;
  inputProps: ComponentProps<"input">;
}) {
  return (
    <div className="text-input">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input className="input" name={name} {...inputProps} required />
    </div>
  );
}

export default TextInput;
