import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [initialItems, setInitialItems] = useState([]);

  function handleChange(id) {
    setInitialItems((prev) => {
      return prev.map((obj) => {
        return obj.id === id ? { ...obj, packed: !obj.packed } : obj;
      });
    });
  }

  function deleteItem(id) {
    setInitialItems((prev) => {
      return prev.filter((obj) => {
        return obj.id !== id;
      });
    });
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete them all"
    );

    confirmed && setInitialItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form setInitialItems={setInitialItems} />
      <PackingList
        handleChange={handleChange}
        initialItems={initialItems}
        deleteItem={deleteItem}
        handleClear={handleClear}
      />
      <Stats initialItems={initialItems} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "XBOX", quantity: 1, packed: true },
// ];
