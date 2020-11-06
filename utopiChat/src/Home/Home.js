import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home () {
  const [channel, setChannel] = React.useState("");

  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Channel"
        value={channel}
        onChange={handleChannelChange}
        className="text-input-field"
      />
      <Link to={`/${channel}`} className="enter-room-button">
        Join Channel
      </Link>
    </div>
  );
};
