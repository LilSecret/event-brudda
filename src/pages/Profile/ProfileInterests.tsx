function ProfileInterests() {
  return (
    <>
      <h2 className="heading">Interests</h2>
      <ul>
        <li>
          <button className="tag">movie</button>
        </li>
        <li>
          <button className="tag">drama</button>
        </li>
      </ul>
      <p>Other Catagories</p>
      <ul>
        <li>
          <button className="tag" data-type="outline">
            music
          </button>
        </li>
        <li>
          <button className="tag" data-type="outline">
            visual-arts
          </button>
        </li>
        <li>
          <button className="tag" data-type="outline">
            lecture
          </button>
        </li>
        <li>
          <button className="tag" data-type="outline">
            books
          </button>
        </li>
        <li>
          <button className="tag" data-type="outline">
            sports
          </button>
        </li>
        <li>
          <button className="tag" data-type="outline">
            fashion
          </button>
        </li>
        <li>
          <button className="tag" data-type="outline">
            fashion
          </button>
        </li>
      </ul>
    </>
  );
}

export default ProfileInterests;
