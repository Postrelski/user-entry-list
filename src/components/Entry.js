import { Children } from "react";
import "./Entry.css";
import { useState } from "react";

function Entry(props) {
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  function inputNameHanlder(e) {
    setText(e.target.value);
  }
  function inputAgeHanlder(e) {
    setAge(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (props.onErrorCheck(text, age)) {
      props.onDataSubmit(text, age);
      setText("");
      setAge("");
    } else {
      console.log("Enter Valid Data");
    }
  }
  return (
    <div className="modal-container">
      <div className="entry-container">
        <form onSubmit={submitHandler}>
          <div>
            <h2>Username</h2>
            <input type="text" value={text} onChange={inputNameHanlder}></input>
          </div>
          <div>
            <h2>Age (Years)</h2>
            <input type="number" value={age} onChange={inputAgeHanlder}></input>
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Entry;
