import React from "react";

export default function Card({
  header,
  avatar_url,
  score,
  username,
  children,
  href,
}) {
  return (
    <div className="card">
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
