import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `cryptoSearcher-${label}`;

  const Dropdown = () => {
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        {/* <option />
        {options.map(el => (
          <option key={el.id} value={el.nameid}>
            {el.nameid}
          </option>
        ))} */}
      </select>
    </label>;
  };
  return [state, Dropdown, updateState];
};

export default useDropdown;
