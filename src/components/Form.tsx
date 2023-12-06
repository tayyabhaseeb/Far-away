import React from "react";
import { useState } from "react";
import { ItemArrTypes } from "../App";



type ComponentProp = {
    setInitialItems :React.Dispatch<React.SetStateAction<ItemArrTypes[]>>,
}

export default function Form({ setInitialItems }: ComponentProp) {
  const [description, setDescription] = useState<string>("");
  const [select, setSelect] = useState<number>(1);
  // const [initialItems, setInitialItems] = useState([]);

  function handleSubmit(e: React. FormEvent<HTMLFormElement>) {
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
