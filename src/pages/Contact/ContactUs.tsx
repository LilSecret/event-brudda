import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/Form/TextInput";
import Navbar from "../../components/Navbar/Navbar";

import "./styles.css";

function ContactUs() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main even-columns main-inline-mw">
        <div className="content">
          <h2 className="heading">Your Feedback matters to us</h2>
          <div className="content-text">
            <p>
              Thank you for helping us improve our experience with Event Brudda!
            </p>
            <p>
              Your feedback will be carefully reviewed by our team to identify
              areas where we can make your experience better.
            </p>
          </div>
          <div className="contact-img"></div>
        </div>
        <form action="#" className="form">
          <h2 className="heading">Contact Us</h2>
          <div className="form-inputs">
            <TextInput name="fullname" type="text" label="Full Name" />
            <TextInput name="Email" type="email" label="Email" />
            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <select name="subject" id="subject" className="input">
                <option value="defaultValue" disabled>
                  Select a Subject
                </option>
                <option value="events">Events</option>
                <option value="account">Account</option>
                <option value="hosting">Hosting</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="input"
                name="message"
                id="message"
                maxLength={20}
              ></textarea>
              <p className="clr-accent-400">0 of 200 Characters</p>
            </div>
          </div>
          <div className="form-actions">
            <button className="tag" data-size="full-bleed" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
