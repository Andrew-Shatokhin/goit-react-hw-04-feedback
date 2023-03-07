// import React from 'react';
import {
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsCalculator,
} from 'react-icons/bs';
import PropTypes from 'prop-types';
import { ListStat, Text } from './Statistics.styled';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

  return (
    <div>
      {total > 0 ? (
        <ListStat>
          <li>
            <Text>
              Good: {good}
              {good !== 0 && <BsEmojiHeartEyes style={{ color: 'green' }} />}
            </Text>
          </li>
          <li>
            <Text>
              Neutral: {neutral} {neutral !== 0 && <BsEmojiNeutral />}
            </Text>
          </li>
          <li>
            <Text>
              Bad: {bad}
              {bad !== 0 && <BsEmojiFrown style={{ color: 'red' }} />}
            </Text>
          </li>
          <li>
            <Text>
              Total: {total}
              {total !== 0 && <BsCalculator style={{ color: 'blue' }} />}
            </Text>
          </li>
          <li>
            <Text>
              Positive feedback: {positivePercentage}%
              {positivePercentage <= 40 && (
                <BsEmojiFrown style={{ color: 'red' }} />
              )}
              {positivePercentage > 40 && positivePercentage <= 60 && (
                <BsEmojiNeutral />
              )}
              {positivePercentage > 60 && (
                <BsEmojiHeartEyes style={{ color: 'green' }} />
              )}
            </Text>
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
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
