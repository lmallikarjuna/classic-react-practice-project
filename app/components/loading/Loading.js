import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "40px",
    textAlign: "center",
  },
};

export default ({ text = 'Loading', speed = 300}) => {
  const [content, setContent] = useState(text);
  const interval = useRef();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setContent((content) => {
        if(content === `${text}...`)return text;
        else return content + '.';
      })
    }, speed);
    return () => {
      window.clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <h1 className="loading-text" style={styles.content}>
      {content}
    </h1>
  );
};
