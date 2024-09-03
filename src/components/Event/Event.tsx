import { TEvent } from "../../types";
import { getWeekday } from "../../utils";
import styles from "./event.module.css";

function Event({ event }: { event: TEvent }) {
  const weekday = getWeekday(event.date);

  return (
    <a className={styles["event-card"]}>
      <img className={styles["event-thumbnail"]} src={event.thumbnail} alt="event thumbnail" />
      <hr className={styles["event-line"]} />
      <div className={styles["event-content"]}>
        <div className="event-upper">
          <h3 className={`heading ${styles["event-title"]}`}>{event.title}</h3>
          <p className="event-location">
            {event.place} - {event.city}
          </p>
        </div>
        <div className="event-lower">
          <p>{event.summary}</p>
          <h6 className={styles["event-date"]}>
            {weekday} {event.date.slice(0, -5)} ~ {event.time}
          </h6>
        </div>
      </div>
      <div className={styles["event-attendees"]}>Attendees: {event.attendees}</div>
    </a>
  );
}

export default Event;
