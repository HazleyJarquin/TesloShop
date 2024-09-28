import { Gender } from "@/interfaces";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
interface Props {
  category?: Gender;
}

export const MobileCategoriesButtons = ({ category }: Props) => {
  return (
    <div className="sm:hidden block mb-10">
      <Link
        className={clsx("m-2 p-2 rounded-md transition-all hover:bg-gray-100", {
          "bg-blue-500": category === "men",
        })}
        href="/category/men"
      >
        Hombres
      </Link>
      <Link
        className={clsx("m-2 p-2 rounded-md transition-all hover:bg-gray-100", {
          "bg-blue-500": category === "women",
        })}
        href="/category/women"
      >
        Mujeres
      </Link>
      <Link
        className={clsx("m-2 p-2 rounded-md transition-all hover:bg-gray-100", {
          "bg-blue-500": category === "kid",
        })}
        href="/category/kid"
      >
        Niños
      </Link>
    </div>
  );
};
