import s from "components/Statistics/Statistics.module.css";

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  const renderFeedback = () => {
    return (
      <>
        <p className={s.paragraph}>Good: {good}</p>
        <p className={s.paragraph}>Neutral: {neutral}</p>
        <p className={s.paragraph}>Bad: {bad}</p>
        <p className={s.paragraph}>Total: {total}</p>
        <p className={s.paragraph}>Positive feedback: {positiveFeedback}%</p>
      </>
    );
  };
  return (
    <div className={s.container}>
      <div className={s.values}>
        {total === 0 ? (
          <h3 className={s.negativeTitle}>No feedback given</h3>
        ) : (
          renderFeedback()
        )}
      </div>
    </div>
  );
}

export default Statistics;
