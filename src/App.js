import "./App.css";
import Title from "components/FeedbackTitle/FeedbackTitle";
import Feedback from "components/FeedbackLogic/FeedbackLogic";
const options = ["Good", "Neutral", "Bad"];

function App() {
  return (
    <>
      <Title text="Please leave feedback" />
      <Feedback options={options} />
    </>
  );
}

export default App;
