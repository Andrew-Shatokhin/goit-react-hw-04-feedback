import React from 'react';
import PropTypes from 'prop-types';
import { ListStat, Text } from './Statistics.styled';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total() > 0 ? (
        <ListStat>
          <li>
            <Text>Good: {good}</Text>
          </li>
          <li>
            <Text>Neutral: {neutral}</Text>
          </li>
          <li>
            <Text>Bad: {bad}</Text>
          </li>
          <li>
            <Text>Total: {total()} </Text>
          </li>
          <li>
            <Text>Positive feedback: {positivePercentage()}%</Text>
          </li>
        </ListStat>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
