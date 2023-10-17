import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  initialItems,
  handleChange,
  deleteItem,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedArr;

  if (sortBy === "input") sortedArr = initialItems;

  if (sortBy === "description")
    sortedArr = initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedArr = initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(a.packed));

  const packingList = sortedArr.map((obj) => (
    <Item
      obj={obj}
      key={obj.id}
      handleChange={handleChange}
      deleteItem={deleteItem}
    />
  ));

  return (
    <div className="list">
      <ul>{packingList}</ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Delete All</button>
      </div>
    </div>
  );
}
