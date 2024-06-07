import React from "react";

const Information = ({ setStep }: { setStep: any }) => {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <div className="w-full flex justify-between flex-col xl:flex-row">
          <input
            type="text"
            placeholder="نام"
            className="input input-bordered input-sm py-5 mb-3 xl:mb-5 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            className="input input-bordered input-sm py-5 mb-3 xl:mb-5 w-full max-w-xs"
          />
        </div>

        <div className="w-full flex justify-between flex-col xl:flex-row">
          <input
            type="text"
            placeholder="استان"
            className="input input-bordered input-sm py-5 mb-3 xl:mb-5 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="شهر"
            className="input input-bordered input-sm py-5 mb-3 xl:mb-5 w-full max-w-xs"
          />
        </div>

        <textarea
          className="w-full textarea textarea-bordered py-3 mb-3 xl:mb-5"
          rows={3}
          placeholder="آدرس"
        ></textarea>

        <input
          type="text"
          placeholder="کدپستی"
          className="input input-bordered input-sm py-5 mb-3 xl:mb-5 w-full max-w-xs"
        />

        <div className="w-full flex justify-between flex-col xl:flex-row">
          <input
            type="email"
            placeholder="ایمیل"
            className="input input-bordered input-sm py-5 mb-3 xl:mb-5 w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="شماره همراه"
            className="input input-bordered input-sm py-5 mb-5 w-full max-w-xs"
          />
        </div>

        <div>
          <h6 className="border-b-2 pb-2 mt-6">روش پرداخت:</h6>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio radio-sm checked:bg-[var(--color-secondary)]"
                checked
              />
              <span className="label-text text-right w-full mr-3">
                بانک پارسیان
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio radio-sm checked:bg-[var(--color-secondary)]"
                checked
              />
              <span className="label-text text-right w-full mr-3">
                بانک ملت
              </span>
            </label>
          </div>
        </div>

        <button
          className="btn w-full bg-[var(--color-secondary)] text-white text-xl mt-6"
          onClick={() => setStep(3)}
        >
          ثبت اطلاعات
        </button>
      </div>

      <div className="hidden xl:block w-2/6 relative border-2 mr-4 mt-0 p-4 rounded-xl bg-[var(--color-primary)]">
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
      </div>
    </div>
  );
};

export default Information;
