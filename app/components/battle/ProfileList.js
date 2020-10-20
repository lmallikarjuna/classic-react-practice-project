import React, { Component } from "react";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser,
} from "react-icons/fa";
import PropTypes from "prop-types";

import Tooltip from "../tooltip/Tooltip";

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default function ProfileList({ profile }) {
  const { name, location, company, followers, following } = profile;
  return (
    <ul className="card-list">
      <li className="card-item">
        <FaUser color="rgb(239, 115, 115)" size={22} />
        <span>{name}</span>
      </li>
      {location && (
        <Tooltip text="User's location">
          <li className="card-item">
            <FaCompass color="rgb(144, 115, 255)" size={22} />
            <span>{location}</span>
          </li>
        </Tooltip>
      )}
      {company && (
        <Tooltip text="User's company">
          <li className="card-item">
            <FaBriefcase color="#795548" size={22} />
            <span>{company}</span>
          </li>
        </Tooltip>
      )}
      <li className="card-item">
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        <span>{followers.toLocaleString()} followers</span>
      </li>
      <li className="card-item">
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        <span>{following.toLocaleString()} following</span>
      </li>
    </ul>
  );
}
