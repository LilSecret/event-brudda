import { useParams } from "react-router-dom";

function Event() {
  const { id } = useParams();

  return <div>Event {id}</div>;
}

export default Event;
