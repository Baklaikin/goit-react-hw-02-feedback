// import logo from './logo.svg';
import "./App.css";
import Title from "components/FeedbackTitle/FeedbackTitle";
import Buttons from "components/FeedbackButons/FeedbackButtons";

const options = ["Good", "Neutral", "Bad"];

function App() {
  return (
    <>
      <Title text="Please leave feedback" />
      <Buttons options={options} />
    </>
  );
}

export default App;

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>
