import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="section"></section>
      </main>
    </>
  );
}
