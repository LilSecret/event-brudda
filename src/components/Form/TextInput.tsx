import { ComponentProps } from "react";

function TextInput({
  label,
  id,
  inputProps,
}: {
  id: string;
  label: string;
  inputProps: ComponentProps<"input">;
}) {
  return (
    <div className="text-input">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} name={id} {...inputProps} required />
    </div>
  );
}

export default TextInput;
