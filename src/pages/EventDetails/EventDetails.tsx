import { useParams } from "react-router-dom";
import styles from "./event.module.css";

function EventDetailsPage() {
  const { id } = useParams();

  return <div>Event {id}</div>;
}

export default EventDetailsPage;
