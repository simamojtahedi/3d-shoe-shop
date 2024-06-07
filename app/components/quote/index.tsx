"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import QuoteIcon from "../../assets/icons/Quote.svg";
import DotsIcon from "../../assets/shapes/dots.png";
import OverlayShape from "../../assets/shapes/quote_overlay.svg";

const Quote = () => {
  return (
    <div className="relative">
      <Image
        alt="آیکون"
        src={DotsIcon}
        className="absolute w-[220px] opacity-[.3] right-[3%] top-[-13%] rotate-180"
      />
      <div className="relative my-12 xl:my-16 bg-[var(--color-primary)] xl:mr-32 py-14 p-5 xl:px-20 xl:rounded-[50px] xl:rounded-bl-none xl:rounded-tl-none overflow-hidden">
        <Image
          alt="طرح"
          src={OverlayShape}
          className="absolute left-0 top-0 hidden xl:block"
        />
        <Image
          alt="آیکون"
          src={QuoteIcon}
          className="absolute w-[95px] opacity-[0.7] left-[6%] top-[4%] rotate-180"
        />
        <motion.h1
          initial={{ transform: "translateY(-30px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-justify text-xl xl:text-3xl mx-auto px-8 xl:px-0 mb-8"
        >
          چرا کفشت؟
        </motion.h1>
        <motion.p
          initial={{ transform: "translateY(-60px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-justify text-sm xl:text-lg mx-auto px-8 xl:px-0"
        >
          خرید کفش ورزشی مناسب و مورد علاقه، یک وظیفه چالش‌برانگیز است که باید
          در میان انواع زیاد آنها گزینه‌ی مناسب را پیدا کرد. برای لذت بردن از
          ورزش و فعالیت‌های خود، باید اطمینان حاصل کرد که تمام جزئیات از بدنه تا
          زیره کفش، حداکثر راحتی و دوام را دارند. قبل از خرید، مطمئن شوید که
          کفشی مناسب نوع ورزش شما است. کفش‌های پیاده‌روی، باشگاه، کوهنوردی،
          فوتسال و دیگر ورزش‌ها، برای هر نوع فعالیت طراحی شده‌اند. قبل از خرید،
          حتماً مطمئن شوید که کفش مورد علاقه‌تان، علاوه بر زیبایی، راحتی و دوام
          نیز دارد. فضای پنجه کفش باید به اندازه‌ای باشد که انگشتان پایتان به
          راحتی در آن حرکت کنند. <br /> مشاوران ما در "کفشت" برای کمک به شما
          آماده هستند.
        </motion.p>
      </div>
    </div>
  );
};

export default Quote;
