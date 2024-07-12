import "./styles.css";

function TextSeparator({ text }: { text: string }) {
  return (
    <div className="text-separator">
      <hr className="line" />
      <p className="separator-text">{text}</p>
      <hr className="line" />
    </div>
  );
}

export default TextSeparator;
