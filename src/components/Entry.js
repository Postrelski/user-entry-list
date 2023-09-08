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
  function errorCheck(text, age) {
    if (text == "") return false;
    if (age <= 0) return false;
    return true;
  }
  function submitHandler(e) {
    e.preventDefault();
    if (errorCheck(text, age)) {
      props.onDataSubmit(text, age);
      setText("");
      setAge("");
    } else {
      console.log("Enter Valid Data");
    }
  }
  return (
    <div className="entry-container">
      <form onSubmit={submitHandler}>
        <div>
          <h2>UserName</h2>
          <input type="text" value={text} onChange={inputNameHanlder}></input>
        </div>
        <div>
          <h2>Age (YEARS)</h2>
          <input type="number" value={age} onChange={inputAgeHanlder}></input>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Entry;
