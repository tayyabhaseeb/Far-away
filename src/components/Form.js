import React from "react";
import { useState } from "react";

export default function Form({ setInitialItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);
  // const [initialItems, setInitialItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      return;
    } else {
      setInitialItems((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          description: description,
          quantity: select,

          packed: false,
        },
      ]);
    }

    setDescription("");
    setSelect(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😋 trip</h3>
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
