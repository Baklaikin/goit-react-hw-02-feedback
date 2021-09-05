import s from "components/FeedbackOptions/FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.wrapper}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          className={s.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
