"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (newCount: number) => {
    if (count + newCount > 0) {
      setCount(count + newCount);
    } else {
      setCount(1);
    }
  };
  return (
    <div className="flex">
      <button onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={25} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
        {count}
      </span>
      <button onClick={() => onQuantityChange(+1)}>
        <IoAddCircleOutline size={25} />
      </button>
    </div>
  );
};
