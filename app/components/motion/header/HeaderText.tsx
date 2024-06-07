"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowBottom from "../../../assets/icons/Arrow-Bottom.svg";

const HeaderText = () => {
  return (
    <div className="flex flex-col pt-0 xl:pt-20 pr-0 xl:pr-20">
      <motion.h2
        initial={{ transform: "translateY(-30px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-3xl xl:text-8xl font-bold drop-shadow-2xl "
      >
        کفشت رو
      </motion.h2>
      <motion.h2
        initial={{ transform: "translateY(-60px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white text-3xl xl:text-8xl font-bold drop-shadow-2xl "
      >
        خودت طراحی کن
      </motion.h2>
      <motion.h2
        initial={{ transform: "translateY(-90px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-white text-3xl xl:text-8xl font-bold drop-shadow-2xl "
      >
        و بسازش!
      </motion.h2>

      <motion.div
        initial={{ transform: "translateY(-120px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 2 }}
        className="xl:absolute xl:right-[120px] xl:bottom-[70px]"
      >
        <Link
          href="/custom-shoe"
          className="btn flex items-center mt-8 width-full xl:mt-0  text-md xl:text-xl  btn-xl xl:btn-wide hover:bg-[var(--color-primary)] "
        >
          طراحی کفش اختصاصی
          <Image
            alt="آیکون"
            src={ArrowBottom}
            className="hidden xl:block rotate-90 mr-5 w-[30px]"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default HeaderText;
