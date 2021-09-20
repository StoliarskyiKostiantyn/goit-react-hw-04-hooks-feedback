import "./App.css";
import { useState } from "react";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleClick = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };
  const total = good + bad + neutral;
  const percentage = ((good / total) * 100).toFixed();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={good}
          bad={bad}
          neutral={neutral}
          onClick={handleClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={percentage}
        />
      </Section>
    </>
  );
}
