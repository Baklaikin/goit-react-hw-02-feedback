import React from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";

class Feedback extends React.Component {
  constructor({ options }) {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
    };
    this.options = options;
  }

  onButtonClick = (event) => {
    this.setState((prevState) => {
      const item = event.target.name.toLowerCase();
      return { [item]: prevState[item] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = (event) => {
    this.setState((prevState) => {
      const { good, neutral, bad } = prevState;
      return { total: good + neutral + bad };
    });
  };

  countPositiveFeedbackPercentage = (event) => {
    this.setState((prevState) => {
      const { good, neutral, bad } = prevState;
      const positive = ((good + neutral) / (good + neutral + bad)) * 100;
      return { positiveFeedback: Math.floor(positive) };
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </>
    );
  }
}

export default Feedback;
