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
      <div className="main-inline-mw">
        <h1>Home Page!</h1>
        <div className="tooltip">Schedule</div>
        <button className="button">Submit</button>
        <button className="tag">
          Search <FontAwesomeIcon className="btn-icon" icon={faCaretDown} />
        </button>
        <button className="button" data-type="outline">
          Search <FontAwesomeIcon className="btn-icon" icon={faCaretDown} />
        </button>
        <h3>Hello World</h3>
      </div>
    </>
  );
}
