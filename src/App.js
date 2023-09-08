import React from "react";
import Entry from "./components/Entry";
import InputForm from "./components/InputForm";
import ModalWindow from "./components/ModalWindow";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);

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

  console.log(entries);

  return (
    <div>
      <Entry onDataSubmit={passData} />
      <InputForm users={entries} />
    </div>
  );
}

export default App;
