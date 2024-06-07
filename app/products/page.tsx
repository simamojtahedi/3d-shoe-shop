"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/products/productCard/index";
import ProductFilters from "@/components/product-filters";
import { products } from "../data/index";
import { sortingNameConvertor } from "@/utils/functions";

const sort_items = ["newest", "selling", "price_des", "price_asc"];

const Products = () => {
  const items_count = 9;
  const [page, setPage] = useState(1);
  const [activeSort, setActiveSort] = useState("newest");
  const [loading, setLoading] = useState(true);
  const pages = Math.round(products.length / items_count);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const Pagination = () => {
    const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

    return (
      <div className="join flex justify-center mt-5 mb-20">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className="join-item btn btn-md px-5 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]"
            style={{
              background:
                page == pageNumber
                  ? "var(--color-secondary)"
                  : "var(--color-primary)",
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  const Skeleton = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 w-full xl:w-[360px] rounded-3xl bg-base-100 border-solid border-base-200 border-2 "
          >
            <div className="skeleton h-52 w-full rounded-b-none"></div>
            <div className="flex items-center justify-between px-3">
              <div className="skeleton h-5 w-16"></div>
              <div className="skeleton h-5 w-28"></div>
            </div>
            <div className="px-3">
              <div className="skeleton h-5 w-full mt-3 mb-5"></div>
              <div className="skeleton h-5 w-[150px] mb-2"></div>
              <div className="skeleton h-5 w-[150px]"></div>
              <div className="skeleton h-8 w-full my-5"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="p-5 xl:p-10 flex w-full">
        <ProductFilters />

        <div className="flex-1 lg:mr-5">
          <div className="mb-5 hidden xl:flex justify-between items-center">
            <div className="flex items-center">
              {sort_items.map((sort: string) => (
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setActiveSort(sort)}
                >
                  <div
                    className={`${
                      sort == activeSort
                        ? "w-2 h-2 p-0 rounded-full ml-1 mt-1 bg-[var(--color-secondary)]"
                        : "w-0 h-0 p-0 rounded-full"
                    } duration-300`}
                  ></div>
                  <span className={`ml-4 inline-block ${sort}`} key={sort}>
                    {sortingNameConvertor(sort)}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="w-full input-sm"
                  placeholder="جستجوی محصول"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-7 h-7 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>

          {loading ? (
            <Skeleton />
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {products
                  .slice(
                    items_count * (page - 1),
                    items_count * (page - 1) + items_count
                  )
                  .map((product, idx) => (
                    <div key={idx}>
                      <ProductCard product={product} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default Products;
