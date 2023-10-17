import React from "react";
// import { useState } from "react";
export default function Item({ obj, handleChange, deleteItem }) {
  return (
    <li>
      <input
        type="checkbox"
        // onChange={handle}
        onChange={() => handleChange(obj.id)}
        name={obj.description}
        id={obj.description}
        value={obj.packed}
      />
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button onClick={() => deleteItem(obj.id)}>❌</button>
    </li>
  );
}

// style={  obj.packed ? { textDecoration: "line-through" } : {} }
