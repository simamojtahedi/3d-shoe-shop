"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ShoppingCart from "../../../assets/icons/Shopping-cart.svg";

const SideText = () => {
  return (
    <motion.div
      initial={{ transform: "translateY(30px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative hidden xl:block mx-auto xl:mx-0 xl:absolute w-12/12 xl:w-2/12 h-[50px] xl:-left-[12px] bottom-[5%] mt-6 xl:mt-0 flex flex-col justify-around shadow-2xl rounded-md"
      style={{ background: "var(--background-app)" }}
    >
      <div className="flex items-center xl:pl-0 xl:pr-5 px-2 xl:text-lg text-sm h-full">
        <Image src={ShoppingCart} width={36} height={36} alt="آیکون" />
        <h4 className="inline ml-2 mr-6 text-[var(--color-secondary)]">
          1000+
        </h4>
        خرید موفق
      </div>
    </motion.div>
  );
};

export default SideText;
