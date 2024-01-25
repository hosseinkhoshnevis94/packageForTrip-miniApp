import { useState } from "react";
import { useItem } from "../context/itemContext";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const{handleAddItems} = useItem()

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className=" flex flex-col md:flex-row gap-3 justify-between items-center py-[20px] px-[25px] border-b-2 border-red-100 border-solid " onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
      className="border-solid border-2  px-4  rounded-lg border-black-100"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
       className="border-solid border-2  px-4 py-1  rounded-lg border-black-100"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="border-solid border-2 w-[70px]  px-1  rounded-lg py-1 	hover:bg-green-600 border-green-300">Add</button>
    </form>
  );
}
