import { Link } from "react-router-dom";

type TLogoType = "light" | "dark";

function Logo({ type }: { type: TLogoType }) {
  return (
    <Link title="Event Brudda" to="/">
      {type === "dark" ? (
        <img src="/logo-dark.svg" alt="event brudda logo" />
      ) : (
        <img src="/logo-light.svg" alt="event brudda logo" />
      )}
    </Link>
  );
}

export default Logo;
