import React from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";
export default function Statistics({ good, bad, neutral, total, percentage }) {
  return (
    <>
      {total ? (
        <>
          <p key={"good"}>Good:{good}</p>
          <p key={"bad"}>Bad:{bad}</p>
          <p key={"neutral"}>Neutral:{neutral}</p>
          <p>Total: {total}</p>
          <p>Positive Percentage:{percentage}</p>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}

Statistics.propTypes = {
  percentage: PropTypes.number,
  total: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
