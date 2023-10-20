import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    setCounter(counter - 1);
  };

  const handleResetCounter = () => {
    setCounter(value);
  };

  return (
    <>
      <div className="card">
        <div className="header">
          <h1>CounterApp</h1>
          <h2> {counter} </h2>
        </div>
        <div className="button-container">
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleRemove}>-1</button>
          <button onClick={handleResetCounter}>Resetear</button>
        </div>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
