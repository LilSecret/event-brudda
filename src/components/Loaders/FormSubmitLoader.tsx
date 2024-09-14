import { PropagateLoader } from "react-spinners";

function FormBtnLoader({ loading }: { loading: boolean }) {
  return (
    <PropagateLoader
      loading={loading}
      color={"#00294d"}
      size={8}
      cssOverride={{ position: "relative", bottom: "5px" }}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default FormBtnLoader;
