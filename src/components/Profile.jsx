import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = props => {
  const profileObj = props.profileData;
  return (
    <div>
      <div className="profileImg">
        <img
          alt="presentation"
          className="rounded-circle center-block"
          src={require("../assets/profile.jpg")}
          width="200"
        />
      </div>
      <h1 className="text-center">{profileObj.name}</h1>
      <h2 className="text-center">{profileObj.label}</h2>
      <div className="divider" />
      <ul className="list-unstyled contact-links text-center">
        <li>
          <FontAwesomeIcon icon="location-arrow" /> {profileObj.location.city},{" "}
          {profileObj.location.region},{profileObj.location.countryCode}
        </li>
        <li>
          <FontAwesomeIcon icon="envelope" />{" "}
          <a href={`mailto:${profileObj.email}`}>{profileObj.email}</a>
        </li>
        <li>
          <FontAwesomeIcon icon="mobile" /> {profileObj.phone}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
