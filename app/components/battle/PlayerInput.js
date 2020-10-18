import React, { useState } from "react";

export default ({ setPlayer, label }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayer(username);
  };

  return (
    <form onSubmit={handleSubmit} className="player-input-container">
      <label htmlFor="username">{label}</label>
      <input name="username" onChange={handleInputChange} />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};
