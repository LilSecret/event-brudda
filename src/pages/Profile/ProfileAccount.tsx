const user = {
  firstName: "Greg",
  lastName: "Johnson",
  state: "California",
};

function ProfileAccount() {
  const { firstName, lastName, state } = user;

  return (
    <>
      <h2 className="heading">Account</h2>
      <div className="data-value">
        <h4>First Name</h4>
        <input type="text" className="input" value={firstName} />
      </div>

      <div className="data-value">
        <h4>Last Name</h4>
        <input type="text" className="input" value={lastName} />
      </div>

      <div className="data-value">
        <h4>State</h4>
        <p>{state}</p>
      </div>
    </>
  );
}

export default ProfileAccount;
