import { ItemArrTypes } from "../App";

type ComponentProp = {
  initialItems: ItemArrTypes[];
};

export default function Stats({ initialItems }: ComponentProp) {
  const listItems = initialItems.length;
  const packedItems = initialItems.filter((obj) => obj.packed).length;
  const percentagePacked = Math.round((packedItems / listItems) * 100);

  if (!initialItems.length) {
    return (
      <div className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </div>
    );
  }

  return (
    <footer className="stats">
      {percentagePacked === 100 ? (
        <p>
          <em> All Packed ready to go</em> 🚁
        </p>
      ) : (
        <em>
          💼 You have {listItems} items on your list and you have packed{" "}
          {packedItems} items {listItems ? `${percentagePacked} %` : `0 %`}
        </em>
      )}
    </footer>
  );
}
