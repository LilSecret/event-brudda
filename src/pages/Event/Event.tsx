import { useParams } from "react-router-dom";
import "./styles.css";

function Event() {
  const { id } = useParams();

  return <div>Event {id}</div>;
}

export default Event;
