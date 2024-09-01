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
        <div className="event-upper">
          <h3 className="heading">Magic Music Show</h3>
          <p className="event-location">Maverick Center - West Valley</p>
        </div>
        <div className="event-lower">
          <p>
            A community fundraiser event held in a local park, featuring live
            music, food trucks, and games for families.
          </p>
          <h6 className="">Thur 1/2 ~ 2:00 MST</h6>
        </div>
      </div>
    </div>
  );
}

export default Event;
