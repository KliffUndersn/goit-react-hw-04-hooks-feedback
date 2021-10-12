import React from "react";
import { useState } from "react";

import RenderButtons from "./RenderButtons/RenderButtons";
import Statistic from "./RenderStatistic/RenderStatistic";

const Feedback  = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClick = (value) => {
    switch (value){
    case "good": 
      setGood(good +1)
    break;
    case "neutral":
      setNeutral(neutral +1)
    break;
    case "bad":
      setBad(bad +1)
    break;
    default:
      break;

}
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  
    return (
      <div>
        <h1>Please Leave feedback</h1>
        <RenderButtons name={{good,neutral,bad}} 
        clickHandler={onClick} 
        />
        <h2>Statistics</h2>

        {countTotalFeedback() ? (
          <Statistic
            value={{good,neutral,bad}}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  
}

export default Feedback 