import { HTMLInputTypeAttribute } from "react";

function TextInput({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
}) {
  return (
    <div className="text-input">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input type={type} className="input" required />
    </div>
  );
}

export default TextInput;
