import React from "react";
// import { useState } from "react";
import { ItemArrTypes } from "../App";


type ComponentProp = {
    obj: ItemArrTypes,
    handleChange: (id: number) => void,
    deleteItem: (id: number) => void,

}

export default function Item({ obj, handleChange, deleteItem }: ComponentProp) {
  return (
    <li>
      <input
        type="checkbox"
        // onChange={handle}
        onChange={() => handleChange(obj.id)}
        name={obj.description}
        id={obj.description}
        value={obj.packed.toString()}
      />
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button onClick={() => deleteItem(obj.id)}>❌</button>
    </li>
  );
}