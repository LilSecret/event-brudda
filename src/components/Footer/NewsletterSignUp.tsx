function NewsletterSignUp() {
  return (
    <div className="newsletter-wrapper">
      <h4 className="heading">Sign Up for our Newsletter</h4>
      <p>Get notified on latest updates and features</p>
      <form action="">
        <input type="text" placeholder="Enter you email" />
      </form>
      <button className="btn" data-type="accent">
        Subscribe
      </button>
    </div>
  );
}

export default NewsletterSignUp;
