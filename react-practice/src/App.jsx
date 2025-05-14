import React, { useState } from "react";
import "./App.css";

function App() {
  const [theNumber, setTheNumber] = useState(0);
  return <PropMutator theNumber={theNumber} setTheNumber={setTheNumber} />;
}

function PropMutator(props) {
  let myNumber = props.theNumber;

  const changeProps = () => {
    myNumber = myNumber + 1;
    console.log("my Number is:", myNumber);
  };

  return (
    <>
      <h1>My Number is: {myNumber}</h1>
      <h1>props.theNumber is:{props.theNumber}</h1>
      <button onClick={changeProps}>changeProp</button>
      <br />
      <button
        onClick={() => {
          props.setTheNumber(props.theNumber + 1);
        }}>
        use SetTheNumber
      </button>
    </>
  );
}

export default App;
