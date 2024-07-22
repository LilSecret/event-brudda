import { TUser } from "../../types";
import "./styles.css";

function Testimonial({ user, feedback }: { user: TUser; feedback: string }) {
  const { firstName, lastName, username } = user;
  const fullName = firstName + " " + lastName;

  return (
    <div className="testimonial-card">
      <header className="testimonial-header">
        <img
          className="testimonial-user-img"
          src="/sad-dog.png"
          alt="user profile img"
        />
        <div className="testimonial-titles">
          <h4 className="heading">{fullName}</h4>
          <p className="testimonial-username">@{username}</p>
        </div>
      </header>
      <p>"{feedback}"</p>
      <img
        className="testimonial-rating"
        src="/five-star-rating.png"
        alt="5 star rating"
      />
    </div>
  );
}

export default Testimonial;
