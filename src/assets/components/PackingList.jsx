import { useState } from "react";
import Item from "./Item";
import { useItem } from "../context/itemContext";

export default function PackingList() {
  const [sortBy, setSortBy] = useState("input");
  const{ items,
    handleDeleteItem,
    handleToggleItem,
    handleClearList} = useItem()

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <section className="min-h-[60vh] flex flex-col justify-between items-center">
      <ul className=" w-full grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-10">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="py-2 flex gap-2">
        <select className="border border-gray-400 rounded" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="text-red-500 border  hover:bg-red-600 hover:text-white border-red-400 py-1 px-2 rounded" onClick={handleClearList}>Clear list</button>
      </div>
    </section>
  );
}
