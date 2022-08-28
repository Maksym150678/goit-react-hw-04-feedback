import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  

  const countPositiveFeedbackPercentage = () => {
    const PositivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100
    );

    return PositivePercentage;
  };

  const countTotalFeedback = () => {
    const total = good + bad + neutral;
    return total;
  };

  const increment = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
    const total = good + neutral + bad;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            setFeedback={increment}
            good={good}
            neutral={neutral}
            bad={bad}
          />
          {total > 0 ? (
            <Statistics
              setTotal={countTotalFeedback}
              setPercentage={countPositiveFeedbackPercentage}
              good={good}
              neutral={neutral}
              bad={bad}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }

export default App;
