import { useParams } from "react-router-dom";

import "./styles.css";

function User() {
  const { id } = useParams();

  return <div>User {id}</div>;
}

export default User;
