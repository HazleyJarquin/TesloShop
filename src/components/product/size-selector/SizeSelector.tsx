import type { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: Size;
  aviailableSizes: Size[];
}
export const SizeSelector = ({ selectedSize, aviailableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {aviailableSizes.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline text-lg", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
