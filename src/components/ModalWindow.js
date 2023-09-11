import "./ModalWindow.css";
import classes from "./ModalWindow.css";

function ModalWindow(props) {
  function buttonHandler() {
    props.onButtonReset();
  }

  return (
    <div>
      <div className="backdrop" onClick={buttonHandler} />
      <div className="parent">
        <div className="container">
          <h2>Invalid Input</h2>
          <p>Please enter a valid name and age (non-empty values)</p>
          <div className="button-container">
            <button onClick={buttonHandler}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
