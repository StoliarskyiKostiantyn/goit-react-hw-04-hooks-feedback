import React from "react";
import PropTypes from "prop-types";
export default function FeedbackOptions({ good, bad, neutral, onClick }) {
  return (
    <>
      <button key={"good"} type="button" name={"good"} onClick={onClick}>
        {"good"}
      </button>
      <button key={"bad"} type="button" name={"bad"} onClick={onClick}>
        {"bad"}
      </button>
      <button key={"neutral"} type="button" name={"neutral"} onClick={onClick}>
        {"neutral"}
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
