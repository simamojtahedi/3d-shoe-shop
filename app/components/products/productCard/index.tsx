import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StarRating } from "@/components/stars";
import { brandConvertor } from "@/utils/functions";
import { ProductCardProps } from "@/components/interfaces";
import ArrowBottom from "../../../assets/icons/Arrow-Bottom-light.svg";

const ProductCard = ({ product }: { product: ProductCardProps }) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-base-100 border-solid border-[var(--color-primary)] border-2">
      <Link href={`/product/${product.id}`}>
        <figure>
          <Image
            src={product.image}
            alt="Shoe"
            className={`w-full h-[250px] object-cover ${
              product.brand == "Nike" ? "object-bottom" : "object-center"
            }`}
            style={{
              transform: product.brand == "Nike" ? "scaleX(-1)" : "scaleX(1)",
            }}
          />
        </figure>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-xs">
              {brandConvertor(product.brand)}
            </span>
            <div className="flex items-center">
              {StarRating(product.rating)}
              <span className="text-xs text-mute mr-1">({product?.sold})</span>
            </div>
          </div>
          <h6 className="text-md xl:text-lg mb-4 mt-2">{product.name}</h6>

          <div className="flex justify-between items-end">
            <div>
              <span className="text-sm xl:text-md line-through">
                {product.price.toLocaleString()} تومان
              </span>
              <div className="flex items-center justify-between">
                <h6 className="text-md xl:text-lg ">
                  {(
                    product.price -
                    product.price * (product.off_percent / 100)
                  ).toLocaleString()}{" "}
                  تومان
                </h6>
              </div>
            </div>

            {product.color_hex && (
              <div
                className="lg:w-7 lg:h-7 w-5 h-5 rounded-full shadow-md"
                style={{ background: product.color_hex }}
              ></div>
            )}
          </div>

          <div className="mt-5">
            <button
              className="btn pr-4 w-full text-xl flex items-center justify-start relative bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:shadow-lg"
              style={{ color: "#fff" }}
            >
              <Image
                alt="آیکون"
                src={ArrowBottom}
                className="absolute w-[25px] h-[25px] left-3 top-[11px] rotate-[90deg]"
              />
              سفـــارش
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
