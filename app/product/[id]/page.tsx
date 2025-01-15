//@ts-nocheck
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StarRating } from "@/components/stars";
import Services from "@/components/services";
import { brandConvertor } from "@/utils/functions";
import { products } from "../../data/index";
import ShoeSlide from "../../assets/images/banners/shoes.png";
import ArrowBottom from "../../assets/icons/Arrow-Bottom-light.svg";
import DotsShape from "../../assets/shapes/dots.png";
import QuoteShape from "../../assets/icons/Quote.svg";

const Page = ({ params }: { params: { id: string } }) => {
  const product = products.find((product) => product?.id == params.id);
  const [defaultSize, setDefaultSize] = useState(product?.sizes[0]);

  const comments = [
    {
      name: "سارا معصومی",
      date: "1403-01-14",
      text: "کفش ورزشی اینجا واقعا عالیه! من هر روز باهاشون ورزش می‌کنم و هیچ وقت درد پا ندارم. به شدت توصیه می‌کنم!",
    },
    {
      name: "مهدی مهاجر",
      date: "1402-12-23",
      text: "این کفش‌های ورزشی فوق‌العاده راحت و سبک هستند. من همیشه با این کفش‌ها به باشگاه می‌روم و هیچ مشکلی ندارم. عاشقشان شده‌ام!",
    },
    {
      name: "حسین علیزاده",
      date: "1402-09-08",
      text: "خرید کفش ورزشی از اینجا بهترین تصمیم من بود. کفش‌ها با کیفیت بالا هستند و طراحی زیبایی دارند. حتما دوباره از اینجا خرید خواهم کرد.",
    },
  ];

  return (
    <>
      <div className="text-sm breadcrumbs px-3 xl:px-10 mt-4">
        <ul>
          <li>
            <a href="/products">محصولات</a>
          </li>
          <li>{product?.name}</li>
        </ul>
      </div>

      <div className="p-3 xl:pt-5 xl:pb-10 xl:px-10 relative">
        <Image
          alt="طرح"
          src={DotsShape}
          className="hidden xl:block absolute left-0 top-[20%] opacity-35"
        />

        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
          <Image
            alt={product?.name}
            src={product?.image}
            className="w-full xl:w-1/3 bg-base-200 rounded-3xl shadow-lg object-top"
          />
          <div className="w-full xl:w-2/3 xl:pr-10">
            <div className="flex flex-col xl:flex-row items-start mt-5 w-full xl:mt-0 xl:items-center justify-between">
              <h1 className="text-lg xl:text-3xl">{product?.name}</h1>

              <div className="xl:rating-md flex items-center">
                {StarRating(product?.rating)}
                <span className="text-xs xl:text-lg mr-2">
                  ({product?.sold})
                </span>
              </div>
            </div>
            <h6 className="text-gray-500 text-sm xl:text-lg mb-5 mt-1">
              {brandConvertor(product?.brand)}
            </h6>

            <p className="text-sm xl:text-lg mb-9">
              خرید کفش ورزشی مناسب و مورد علاقه، یک وظیفه چالش‌برانگیز است که
              باید در میان انواع زیاد آنها گزینه‌ی مناسب را پیدا کرد. برای لذت
              بردن از ورزش و فعالیت‌های خود، باید اطمینان حاصل کرد که تمام
              جزئیات از بدنه تا زیره کفش، حداکثر راحتی و دوام را دارند. قبل از
              خرید، مطمئن شوید که کفشی مناسب نوع ورزش شما است.
            </p>

            <div className="mt-1 flex flex-row lg:flex-col xl:flex-row items-center">
              <h4 className="ml-7">رنگ:</h4>
              <div
                className="lg:h-6 h-5 lg:w-6 w-5 rounded-full shadow-md"
                style={{ background: product?.color_hex }}
              ></div>
              <h4 className="text-sm lg:text-md mr-2">{product?.color}</h4>
            </div>

            <div className="mt-5 flex items-center xl:flex-row">
              سایز:
              <div className="flex align-center mr-5 mt-1 xl:mt-0">
                {product?.sizes.map((size) => (
                  <div
                    onClick={() => setDefaultSize(size)}
                    key={size}
                    className="duration-300 cursor-pointer w-10 xl:w-14 h-10 xl:h-14 ml-1 xl:ml-3 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        size == defaultSize
                          ? "var(--color-secondary)"
                          : "var(--color-primary)",
                      color:
                        size == defaultSize ? "#fff" : "var(--color-secondary)",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-md lg:text-lg line-through">
                {product?.price.toLocaleString()} تومان
              </h3>
              <h2 className="text-xl lg:text-2xl">
                {(
                  product?.price -
                  product?.price * (product?.off_percent / 100)
                ).toLocaleString()}{" "}
                تومان
              </h2>
            </div>

            <div className="mt-4">
              <button
                className="mr-0 btn px-10 xl:px-4 text-xl flex items-center justify-start relative bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:shadow-lg"
                style={{ color: "#fff" }}
              >
                خـــــرید
                <Image
                  alt="آیکون"
                  src={ArrowBottom}
                  className="w-[25px] h-[25px] mr-16 rotate-[90deg]"
                />
              </button>
            </div>
          </div>
        </div>

        <h4 className="mb-4 mt-16 text-xl text-[var(--color-secondary)]">
          ویـــــژگی‌ها
        </h4>
        <div className="overflow-x-auto mb-16 border-2 rounded-lg xl:w-1/2 w-full">
          <table className="table ">
            <thead>
              <tr>
                <th className="text-lg">عنوان</th>
                <th className="text-lg">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>برنـــد</th>
                <td> {brandConvertor(product?.brand)}</td>
              </tr>
              <tr>
                <th>جنـــس</th>
                <td>ترکیبی</td>
              </tr>
              <tr>
                <th>جنـــسیت</th>
                <td>زنانه</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="my-16 text-sm xl:text-lg">
          کفش کتانی{" "}
          <strong className="text-lg text-[var(--color-secondary)]">
            {product?.color}
          </strong>{" "}
          مردانه و زنانه |{" "}
          <strong className="text-lg text-[var(--color-secondary)]">
            {product?.name}
          </strong>{" "}
          از محصولات تولیدی برند{" "}
          <strong className="text-lg text-[var(--color-secondary)]">
            {brandConvertor(product?.brand)}
          </strong>{" "}
          است که تبدیل به یکی از محبوب‌ترین کفش‌های انتخابی توسط آقایان و بانوان
          شده است. <br />
          این کتانی به راحتی در پا فیت می‌شود و با توجه به وزن سبک خود به سهولت
          می‌توان از آن به منظور پیاده‌روی‌های روزانه استفاده کرد. <br />
          از بارزترین مشخصات این محصول که بیش از هر چیزی توجه خریداران را جلب
          می‌کند می‌توان به ترکیب رنگی جذاب{" "}
          <strong className="text-lg text-[var(--color-secondary)]">
            {product?.color}
          </strong>{" "}
          آن اشاره کرد. <br />
          این محصول توسط کشور تایوان تولید شده و در سراسر دنیا توزیع می‌شود تا
          یک گزینه بسیار مناسب برای ورزشکاران و استفاده روزمره باشد.
          <br />
          از دیگر مشخصات این کفش می‌توان به قابلیت نفوذ و تهویه، ضدآب بودن، نوع
          باز و بسته شدن کشی، کپسول فعال در قسمت پاشنه و نوع کفی طبی آن اشاره
          کرد. <br />
          جنس رویه این کفش همچنین از پارچه و جنس زیره آن از EVA تهیه شده است که
          به راحتی می‌توانید آن در لباسشویی قرار داده و شست‌وشو دهید.
        </p>

        <Services />

        <p className="my-16 text-sm xl:text-lg">
          با ما در دنیای کفش‌های مدرن و راحتی بی‌نظیر آشنا شوید! <br /> در
          فروشگاه ما، تنوع بی‌نظیری از کفش‌های ورزشی مردانه و زنانه با کیفیت
          بالا و طراحی‌های جذاب را پیدا خواهید کرد. <br /> هر یک از محصولات ما
          با دقت بالایی انتخاب شده‌اند تا به شما تجربه‌ای بی‌نظیر از راحتی و
          استایل را هدیه دهند.
          <br />
          کفش‌های ما با استفاده از بهترین مواد اولیه و فناوری‌های پیشرفته تولید
          می‌شوند، به طوری که هر گامی که با آن‌ها بردارید، احساس راحتی و ثبات
          خواهید کرد. <br />
          همچنین، ما به شما ضمانت اصالت کامل محصولات ارائه می‌دهیم تا از خرید
          خود با اطمینان بالایی لذت ببرید.
          <br />
          با محصولات متنوع از کفش‌های ورزشی همواره به دنبال جدیدترین روند‌های مد
          روز دنیا هستیم تا به شما امکان پوشیدن استایلی منحصر به فرد و جذاب را
          بدهیم.
          <br />
          بپوشید. <br />
          راحت باشید.
          <br />
          استایل خود را بسازید.
          <br />
          با ما همراه باشید و تجربه خرید لذت‌بخش کفش‌های با کیفیت را تجربه کنید.
        </p>

        <Image src={ShoeSlide} alt="Shoe" className="mx-auto" />

        <Image
          alt="طرح"
          src={DotsShape}
          className="absolute right-0 bottom-[25%] opacity-35"
        />

        <div className="mt-10 border-2 p-4 rounded-md relative">
          <h4 className="text-2xl xl:text-3xl pb-2 mb-6 text-center text-[var(--color-secondary)]">
            نظـــرات
          </h4>
          {comments.map((comment, idx) => (
            <div
              className="relative border-2 p-3 rounded-lg my-4 bg-white z-10"
              key={idx}
            >
              <div className="mb-5">
                <h6 className="text-sm xl:text-md">{comment.name}</h6>
                <span className="text-xs xl:text-sm opacity-[.6]">
                  {comment.date}
                </span>
              </div>
              <p className="text-sm xl:text-md">{comment.text}</p>
            </div>
          ))}

          <Image
            alt="طرح"
            src={QuoteShape}
            className="absolute right-[14px] top-0 w-20 opacity-35 z-0"
          />
          <Image
            alt="طرح"
            src={QuoteShape}
            className="absolute left-[14px] top-0 w-20 opacity-35 z-0 rotate-180"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
