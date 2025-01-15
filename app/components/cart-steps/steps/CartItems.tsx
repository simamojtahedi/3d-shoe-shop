import Image from "next/image";
import React from "react";

const CartItems = ({
  cart_items,
  getProductData,
  setStep,
}: {
  cart_items: any;
  getProductData: any;
  setStep: any;
}) => {
  return (
    <div className="flex flex-col xl:flex-row items-start justify-between">
      <div className="flex-1">
        {cart_items.map((item: any) => (
          <div className="p-3 border-2 rounded-2xl mt-4 flex flex-col xl:flex-row items-start justify-between">
            <div className="flex-1">
              <div className="flex flex-col xl:flex-row items-start">
                <Image
                  alt="Image"
                  src={getProductData(item.id)?.image}
                  className="rounded-xl xl:ml-4 xl:w-[120px] w-full"
                />
                <div className="flex flex-col justify-between xl:h-[118px] h-auto">
                  <div>
                    <h6 className="whitespace-nowrap xl:mt-0 mt-3">
                      {getProductData(item.id)?.name}
                    </h6>
                    <span className="opacity-[.5]">
                      {getProductData(item.id)?.color}
                    </span>
                  </div>
                  <div className="text-sm flex items-center hidden xl:block">
                    <div className="badge badge-primary ml-2 mt-1 p-0 w-3 h-3 bg-success border-success shadow-md"></div>
                    <span>موجود در انبار</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse mt-7 xl:mt-0 xl:flex-col items-center xl:items-end justify-between flex-1 h-[118px] xl:w-auto w-full">
              <input
                value={item.count}
                type="number"
                className="input input-bordered input-sm w-16 p-0 pr-3"
                contentEditable
              />

              <h6 className="text-left">
                {(
                  getProductData(item.id).price -
                  getProductData(item.id).price *
                    (getProductData(item.id).off_percent / 100)
                ).toLocaleString()}{" "}
                تومان
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full xl:w-2/6 relative border-2 xl:mr-4 mt-4 p-4 rounded-xl bg-[var(--color-primary)]">
        <h4 className="text-center text-[var(--color-secondary)] text-xl mb-5 pb-2 border-b-2">
          سفارش
        </h4>
        <div className="flex items-center mb-5">
          <h6 className="flex-1"> قیمت کل: </h6>
          <h4>120000 تومان</h4>
        </div>
        <div className="flex items-center mb-5">
          <h6 className="flex-1"> هزینه ارسال: </h6>
          <h4>100000 تومان</h4>
        </div>
        <div className="flex items-center mb-5">
          <h6 className="flex-1"> مالیات: </h6>
          <h4>23000 تومان</h4>
        </div>
        <button
          className="btn w-full bg-[var(--color-secondary)] text-white text-xl mt-6"
          onClick={() => setStep(2)}
        >
          ثبت سفـــارش
        </button>
      </div>
    </div>
  );
};

export default CartItems;
