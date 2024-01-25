export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li className="border hover:bg-gray-200 py-2 px-2 min-w-60 rounded flex justify-between items-center">
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span  className={`${item.packed ? 'line-through text-gray-400' : ''} `} >
          {item.quantity} {item.description}
        </span>
        <button className="text-red-500 " onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    );
  }