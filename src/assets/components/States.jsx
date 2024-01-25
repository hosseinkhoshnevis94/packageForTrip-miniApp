import { useItem } from "../context/itemContext";

export default function States() {
  const{items} = useItem()
    if (!items.length)
      return (
        <p className="flex py-3 justify-center items-center bg-slate-200">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      );
  
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className=" flex justify-center items-center  bg-slate-200">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }
  