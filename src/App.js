import React from "react";
import Entry from "./components/Entry";
import InputForm from "./components/InputForm";
import ModalWindow from "./components/ModalWindow";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  const [modal, setModal] = useState(false);

  function passData(name, age) {
    console.log(name);
    console.log(age);
    // this adds all the previous objects + a new one
    // need state to reload the entire page and re-render the components
    setEntries((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  }

  const errorCheck = (text, age) => {
    if (text == "" || age <= 0) {
      setModal(true);
      return false;
    } else {
      setModal(false);
    }
    return true;
  };

  const buttonReset = () => {
    setModal(false);
  };

  return (
    <div>
      <Entry onDataSubmit={passData} onErrorCheck={errorCheck} />
      <InputForm users={entries} />
      {modal && <ModalWindow onButtonReset={buttonReset} />}
    </div>
  );
}

export default App;
