"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Nike from "../../assets/images/brands/nike.png";
import Adidas from "../../assets/images/brands/adidas.png";
import Converse from "../../assets/images/brands/converse.png";
import Skechers from "../../assets/images/brands/skechers.png";

const Categories = () => {
  return (
    <div className="flex items-center p-5 xl:p-10 flex-col xl:flex-row">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 basis-5/12 p-1 mb-5 xl:mb-0 w-full"
      >
        <div className="relative xl:pr-8 py-12 rounded-xl bg-[var(--color-secondary)]">
          <h4 className="text-center xl:text-right text-xl xl:text-2xl text-white">
            محبوب‌ترین دسته‌بندی‌هـــا
          </h4>

          <div className="hidden xl:block absolute bottom-[5%] -left-[10px] rotate-90 h-[30px] w-[60px]">
            <svg
              width="139"
              height="44"
              viewBox="0 0 139 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.1782 17.8331C37.0708 15.8676 39.0047 13.8378 41.008 11.778C42.1127 10.5246 43.9268 8.87109 46.3403 7.20065C52.7003 2.66686 60.4832 0 68.8889 0C79.8235 0 89.7042 4.513 96.7697 11.778C108.321 23.6556 122.32 38.8889 138.889 38.8889V44H0V38.8889C12.7293 38.8889 23.7961 29.4356 35.1782 17.8331Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 p-1 basis-3/12 w-full mb-5 xl:mb-0"
        initial={{ opacity: 0, transform: "translateY(-20px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 1 }}
      >
        <Link href="/">
          <div className="px-3 py-16 rounded-xl relative bg-[var(--color-secondary)] duration-200 hover:shadow-xl">
            <Image
              src={Nike}
              alt="Nike"
              className="absolute w-[70%] h-[60%] left-[15%] top-[13%] object-cover rounded-xl"
            />
            <h5
              className="text-md text-center absolute py-2 rounded-lg -bottom-4 right-1/4 w-2/4"
              style={{ background: "var(--color-primary)" }}
            >
              نایـــکی
            </h5>
          </div>
        </Link>
      </motion.div>

      <motion.div
        className="flex-1 basis-3/12 w-full p-1 mb-5 xl:mb-0"
        initial={{ opacity: 0, transform: "translateY(-20px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 1.5 }}
      >
        <Link href="/">
          <div className="px-3 py-16 rounded-xl relative bg-[var(--color-secondary)] duration-200 hover:shadow-xl">
            <Image
              src={Adidas}
              alt="Adidas"
              className="absolute w-[40%] h-[40%] left-[30%] top-[25%] object-cover rounded-xl"
            />
            <h5
              className="text-md text-center absolute py-2 rounded-lg -bottom-4 right-1/4 w-2/4"
              style={{ background: "var(--color-primary)" }}
            >
              آدیـــداس
            </h5>
          </div>
        </Link>
      </motion.div>

      <motion.div
        className="flex-1 basis-3/12 w-full p-1 mb-5 xl:mb-0"
        initial={{ opacity: 0, transform: "translateY(-20px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 2 }}
      >
        <Link href="/">
          <div className="px-3 py-16 rounded-xl relative bg-[var(--color-secondary)] duration-200 hover:shadow-xl">
            <Image
              src={Skechers}
              alt="Skechers"
              className="absolute w-[60%] h-[60%] left-[20%] top-[14%] object-cover rounded-xl"
            />
            <h5
              className="text-md text-center absolute py-2 rounded-lg -bottom-4 right-1/4 w-2/4"
              style={{ background: "var(--color-primary)" }}
            >
              اسکچـــرز
            </h5>
          </div>
        </Link>
      </motion.div>

      <motion.div
        className="flex-1 basis-3/12 w-full p-1"
        initial={{ opacity: 0, transform: "translateY(-20px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 2.5 }}
      >
        <Link href="/">
          <div className="px-3 py-16 rounded-xl relative bg-[var(--color-secondary)] duration-200 hover:shadow-xl">
            <Image
              src={Converse}
              alt="Converse"
              className="absolute w-[48%] h-[48%] left-[26%] top-[20%] object-cover rounded-xl"
            />
            <h5
              className="text-md text-center absolute py-2 rounded-lg -bottom-4 right-1/4 w-2/4"
              style={{ background: "var(--color-primary)" }}
            >
              کانـــورس
            </h5>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Categories;
