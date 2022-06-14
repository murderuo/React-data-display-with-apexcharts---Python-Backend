import React, { useState } from 'react';

function InputData() {
  const [input, setInput] = useState('');
  const inputChange = e => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div>
      <div className="input-div">
        <label htmlFor="">
          <span>Input data:</span>
          <input type="text" name="inputdata" onChange={inputChange} />
        </label>
      </div>
      <div className="button-div">
        <button>Add Data</button>
      </div>
    </div>
  );
}

export default InputData;
