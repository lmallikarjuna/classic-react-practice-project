import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme";
import PropTypes from "prop-types";

Card.propTypes = {
  header: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default function Card({
  header,
  avatar_url,
  score,
  username,
  href,
  children,
}) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`card card-${theme}`}>
      <h1>{header}</h1>
      <a href={href} target="_blank">
        <img src={avatar_url} />
      </a>
      {score && <h3>Score: {score}</h3>}
      <h2>
        <a target={"_blank"} href={href}>
          {username}
        </a>
      </h2>
      {children}
    </div>
  );
}
