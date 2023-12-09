import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export type ItemArrTypes = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

const App = () => {
  const [initialItems, setInitialItems] = useState<ItemArrTypes[]>([]);

  function handleChange(id: number) {
    setInitialItems((prev) => {
      return prev.map((obj) => {
        return obj.id === id ? { ...obj, packed: !obj.packed } : obj;
      });
    });
  }

  function deleteItem(id: number) {
    setInitialItems((prev) => {
      return prev.filter((obj) => {
        return obj.id !== id;
      });
    });
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete them all",
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
};

export default App;
