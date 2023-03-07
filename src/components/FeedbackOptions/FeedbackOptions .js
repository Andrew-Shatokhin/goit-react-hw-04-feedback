// import React from 'react';
import PropTypes from 'prop-types';
import { ListBtn, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ListBtn>
        {options.map(button => (
          <li key={button}>
            <Button type="button" name={button} onClick={onLeaveFeedback}>
              {button}
            </Button>
          </li>
        ))}
      </ListBtn>
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
