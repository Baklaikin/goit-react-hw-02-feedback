import S from "components/FeedbackButons/FeedbackButtons/module.css";

function Buttons({ options }) {
  return options.map((option) => <button type="button">{option.value}</button>);
}

export default Buttons;
