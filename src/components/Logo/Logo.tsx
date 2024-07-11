type TLogoType = "light" | "dark";

function Logo({ type }: { type: TLogoType }) {
  return (
    <a href="/">
      {type === "dark" ? (
        <img src="/logo-dark.svg" alt="event brudda logo" />
      ) : (
        <img src="/logo-light.svg" alt="event brudda logo" />
      )}
    </a>
  );
}

export default Logo;
