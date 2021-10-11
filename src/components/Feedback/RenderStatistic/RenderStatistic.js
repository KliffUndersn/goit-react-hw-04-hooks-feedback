import React from "react";
import PropTypes from 'prop-types'

const Statistic = ({
  value,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li>Good: {value.good}</li>
      <li>Neutral: {value.neutral}</li>
      <li>Bad: {value.bad}</li>
      <li>Total: {countTotalFeedback}</li>
      <li>
        Positive feedback:
        {countPositiveFeedbackPercentage || 0} %
      </li>
    </ul>
  );
};

export default Statistic;

Statistic.propTypes={
  value:PropTypes.object.isRequired,
  countTotalFeedback:PropTypes.number.isRequired,
  countPositiveFeedbackPercentage:PropTypes.number.isRequired,
}