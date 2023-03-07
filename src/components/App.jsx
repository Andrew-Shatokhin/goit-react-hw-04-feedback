import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';


export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const countTotalFeedback = good + neutral + bad;

    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100);


    const onLeaveFeedback = (event) => {
      const { name } = event.target;
      switch (name) {
        case 'good':
          setGood(good + 1);
          break;

        case 'neutral':
          setNeutral(neutral + 1);
          break;

        case 'bad':
          setBad(bad + 1);
          break;

        default:
          break;
      }


    }

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}

            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>

        <GlobalStyle />
      </Layout>
    );
  }

