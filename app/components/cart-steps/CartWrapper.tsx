"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data";
import CartItems from "./steps/CartItems";
import Information from "./steps/Information";
import Pay from "./steps/Pay";
import ArrowBottom from "../../assets/icons/Arrow-Bottom-light.svg";

const CartWrapper = () => {
  const [step, setStep] = useState(1);

  const cart_items = [
    { id: "nike_1", count: 1 },
    { id: "zara_5", count: 3 },
  ];

  const getProductData = (product_id: string) => {
    const selected_product = products.find(
      (product_item) => product_item.id == product_id
    );
    return selected_product;
  };

  const empty_message = () => {
    return (
      <div className="h-[400px]">
        <h2 className="text-2xl text-center pt-24"> سبد خرید خالی است</h2>
        <div className="mt-6">
          <Link
            href="/products"
            className="mx-auto btn px-7 w-64 h-14 text-lg flex items-center justify-between relative bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:shadow-lg"
            style={{ color: "#fff" }}
          >
            ادامه خـــــرید
            <Image
              alt="آیکون"
              src={ArrowBottom}
              className=" w-[28px] h-[28px] mr-16 rotate-[90deg]"
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-3 xl:pt-5 xl:pb-10 xl:px-10 relative min-h-[500px]">
      <ul className="steps w-full lg:w-2/4 my-10 duration-300">
        <li
          className={`step duration-300 text-xs xl:text-md ${
            step >= 1 && "step-success"
          }`}
        >
          سبد خرید
        </li>
        <li
          className={`step duration-300 text-xs xl:text-md ${
            step >= 2 && "step-success"
          }`}
        >
          اطلاعات کاربر
        </li>
        <li
          className={`step duration-300 text-xs xl:text-md ${
            step >= 3 && "step-success"
          }`}
        >
          پرداخت
        </li>
      </ul>

      <h4 className="text-2xl text-center xl:my-10 my-3 text-[var(--color-secondary)]">
        {step == 1
          ? " سبد خـــــرید"
          : step == 2
          ? " اطلاعات کاربـــــر"
          : "پرداخـــــت"}
      </h4>

      <div className="xl:w-9/12 w-full mx-auto xl:p-5 p-2 border-2 rounded-xl">
        {step == 1 ? (
          <CartItems
            cart_items={cart_items}
            getProductData={getProductData}
            setStep={setStep}
          />
        ) : step == 2 ? (
          <Information setStep={setStep} />
        ) : (
          <Pay />
        )}
      </div>
    </div>
  );
};

export default CartWrapper;
