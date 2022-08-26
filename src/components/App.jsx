import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const PositivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100
    );

    return PositivePercentage;
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  };

  show = () => {
    this.visible = true;
  };

  increment = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            setFeedback={this.increment}
            options={Object.keys(this.state)}
          />
          {total > 0 ? (
            <Statistics
              setTotal={this.countTotalFeedback}
              setPercentage={this.countPositiveFeedbackPercentage}
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
}
export default App;
