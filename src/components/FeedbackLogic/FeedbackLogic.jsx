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
    };
    this.options = options;
  }

  onButtonClick = (event) => {
    this.setState((prevState) => {
      const item = event.target.name.toLowerCase();
      return { [item]: prevState[item] + 1 };
    });
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
            <p className={s.paragraph}>Good: {this.state.good}</p>
            <p className={s.paragraph}>Neutral: {this.state.neutral}</p>
            <p className={s.paragraph}>Bad: {this.state.bad}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
