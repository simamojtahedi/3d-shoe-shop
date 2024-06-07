import React, { useState } from "react";
import Image from "next/image";
import {
  getHighestAndLowestPrice,
  getUniqueHexColors,
} from "@/utils/functions";
import { products } from "../../data";
import { StarRating } from "../stars";
import FilterImage from "../../assets/icons/Filter.svg";

const stars = [1, 2, 3, 4];

const ProductFilters = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const { highestPrice, lowestPrice } = getHighestAndLowestPrice(products);

  const priceRangeSlide = (e: any) => {
    setPrice(e.target.value);
  };

  const colorSelectHandler = (color: string) => {
    const findColor = selectedColors.includes(color);

    if (findColor) {
      const filterSelectedColors = [...selectedColors].filter(
        (col) => col != color
      );
      setSelectedColors(filterSelectedColors);
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="hidden xl:flex min-w-[330px] p-4 border-2 rounded-2xl sticky top-[20px] h-[650px]">
      <div className="flex flex-col items-start justify-start w-full">
        <span className="pb-3 mb-8 text-right w-full flex items-center border-b-2">
          <Image
            src={FilterImage}
            width={16}
            height={16}
            className="ml-2"
            alt="آیکون"
          />
          فیلتـــرها
        </span>

        <div className="w-full">
          <h6 className="text-sm">بـــــرند:</h6>
          <select
            className="select select-bordered px-4 mt-2 w-full"
            defaultValue="-- انتخاب برنـــد --"
          >
            <option disabled>-- انتخاب برنـــد --</option>
            <option>نایک</option>
            <option>آدیداس</option>
            <option>زارا</option>
            <option>برشکا</option>
          </select>
        </div>

        <div className="w-full mt-7">
          <h6 className="text-sm">قیـــــمت:</h6>
          <div className="flex items-center">
            <div style={{ direction: "ltr" }} className="flex-1 mt-3">
              <input
                type="range"
                min={0}
                max="100"
                value={price}
                className="range range-sm"
                step="1"
                onChange={(value) => priceRangeSlide(value)}
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>{lowestPrice.toLocaleString()}</span>
                <span>{highestPrice.toLocaleString()}</span>
              </div>
            </div>
            <span className="text-xs mr-2 -mt-3">(تومان)</span>
          </div>
        </div>

        <div className="w-full mt-7">
          <h6 className="text-sm">رنـــــگ:</h6>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {getUniqueHexColors(products).map((color) => (
              <div
                key={color}
                onClick={() => colorSelectHandler(color)}
                style={{ background: color }}
                className={`h-8 w-8 rounded-full border-2 cursor-pointer duration-300 shadow-md ${
                  selectedColors.includes(color)
                    ? "border-purple-600"
                    : "border-transparent"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full mt-7">
          <h6 className="text-sm">امـــــتیاز:</h6>
          <div className="mt-5 ">
            {stars.map((star) => (
              <div
                key={star}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-sm">{star} به بالا</p>
                {StarRating(star)}
              </div>
            ))}
          </div>
        </div>

        <button className="btn w-full mt-14 bg-[var(--color-secondary)] text-white text-lg">
          فیلتـــر
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
