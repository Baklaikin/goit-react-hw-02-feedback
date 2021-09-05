// import Buttons from "components/FeedbackButons/FeedbackButtons";
import React from "react";
import s from "components/FeedbackLogic/FeedbackLogic.module.css";

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
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };

  countPositiveFeedbackPercentage = (event) => {
    this.setState((prevState) => {
      const positive =
        ((prevState.good + prevState.neutral) /
          (prevState.good + prevState.neutral + prevState.bad)) *
        100;
      return { positiveFeedback: Math.floor(positive) };
    });
  };

  renderFeedback = () => {
    return (
      <>
        <p className={s.paragraph}>Good: {this.state.good}</p>
        <p className={s.paragraph}>Neutral: {this.state.neutral}</p>
        <p className={s.paragraph}>Bad: {this.state.bad}</p>
        <p className={s.paragraph}>Total: {this.state.total}</p>
        <p className={s.paragraph}>
          {" "}
          Positive feedback: {this.state.positiveFeedback}%
        </p>
      </>
    );
  };

  render() {
    return (
      <>
        <div className={s.wrapper}>
          {this.options.map((option) => (
            <button
              key={option}
              type="button"
              name={option}
              className={s.button}
              onClick={this.onButtonClick}
            >
              {option}
            </button>
          ))}
        </div>

        <div className={s.container}>
          <h2 className={s.title}>Statistics</h2>
          <div className={s.values}>
            {this.state.total === 0 ? (
              <h3 className={s.negativeTitle}>Feedback never given</h3>
            ) : (
              this.renderFeedback()
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
