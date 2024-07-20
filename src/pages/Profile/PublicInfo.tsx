function PublicInfo() {
  const userProfileImg = null;

  return (
    <>
      <h2 className="heading">Public Info</h2>
      <p>This info is also available for other to see</p>
      <div className="data-value">
        <h4>Profile Image</h4>
        {userProfileImg ? (
          userProfileImg
        ) : (
          <img
            className="profile-page-img"
            src="/default-profile.svg"
            alt="user profile image"
          />
        )}

        <div className="action-btns">
          <button className="tag">Upload New</button>
          {userProfileImg && (
            <button className="tag" data-type="outline">
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="data-value">
        <h4>Full Name</h4>
        <p className="data-str">Kevin Williams</p>
      </div>
      <div className="data-value">
        <h4>Username</h4>
        <p className="data-str">@SharkyRoader</p>
      </div>
    </>
  );
}

export default PublicInfo;
