import s from "components/FeedbackTitle/FeedbackTitle.module.css";

function Title({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}

export default Title;
