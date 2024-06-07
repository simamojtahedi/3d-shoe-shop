"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./productCard/index";
import Arrow from "../../assets/icons/Arrow-Bottom.svg";

interface ProductsProps {
  title: string;
  title_brand: string;
  en_title: string;
  productsList: any;
}

const Products: React.FC<ProductsProps> = ({
  title,
  title_brand,
  en_title,
  productsList,
}) => {
  return (
    <div className="p-5 xl:p-10">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-right text-md xl:text-2xl">
          {title}{" "}
          <strong className="text-md xl:text-3xl text-[var(--color-secondary)]">
            {title_brand}
          </strong>
        </h3>
        <Link
          href={`/products?category=${en_title}`}
          className="btn btn-outline btn-sm rounded-[10px] px-3 h-[46px] text-[17px] flex items-center xl:pr-4 hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"
        >
          <span className="hidden xl:block"> مشاهده </span>
          <Image
            src={Arrow}
            className="rotate-90 w-[23px] xl:mr-5"
            alt="آیکون"
          />
        </Link>
      </div>
      <Swiper
        spaceBetween={10}
        dir="rtl"
        className="cursor-grab"
        breakpoints={{
          100: {
            slidesPerView: 1.1,
          },
          700: {
            slidesPerView: 2.1,
          },
          1200: {
            slidesPerView: 4.2,
          },
        }}
      >
        {productsList.map((product: any, idx: number) => (
          <SwiperSlide key={idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
