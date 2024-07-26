import "./styles.css";
import { TEvent } from "../../types";

function Event({ event }: { event: TEvent }) {
  console.log(event);
  return (
    <div className="event-card">
      <img
        className="event-thumbnail"
        src="https://www.aleitevents.com/wp-content/uploads/2019/02/ABCF1-19-scaled.jpg"
        alt="event thumbnail"
      />
      <div className="event-line"></div>
      <div className="event-content">
        <header>
          <h3 className="heading">Magic Music Show</h3>
          <p className="event-location">Maverick Center - West Valley</p>
        </header>
      </div>
    </div>
  );
}

export default Event;
