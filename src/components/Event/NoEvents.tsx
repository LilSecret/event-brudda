import styles from "./event.module.css";

function NoEvents() {
  return (
    <a className={styles["event-card"]} data-type="empty-events">
      <img className={styles["event-thumbnail"]} src="/no-events.png" alt="event thumbnail" />
      <hr className={styles["event-line"]} />
      <div className={styles["event-content"]}>
        <div className="event-upper">
          <h3 className={`heading ${styles["event-title"]}`}>No Events</h3>
        </div>
        <div className="event-lower">
          <p>Unfortunately there are no events happening on this day.</p>
        </div>
      </div>
    </a>
  );
}

export default NoEvents;
