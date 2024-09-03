import { ReactNode } from "react";
import styles from "./event.module.css";
import { formDateToStr, getWeekday } from "../../utils";

function EventsDate({ date, children }: { date: string; children: ReactNode }) {
  const today = formDateToStr(new Date());
  const weekday = getWeekday(date);
  let showDate;

  if (today === date) {
    showDate = "Today";
  } else {
    showDate = weekday + ` ${date.slice(0, -3)}`;
  }

  return (
    <div className={styles["event-date-wrapper"]}>
      <h3 className="heading">{showDate}</h3>
      <hr className={styles.line} />
      {children}
    </div>
  );
}

export default EventsDate;
