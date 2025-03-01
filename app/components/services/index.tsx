"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ShoppingCart from "../../assets/icons/Shopping-cart.svg";
import Award from "../../assets/icons/Award.svg";
import GPS from "../../assets/icons/GPS.svg";
import Calling from "../../assets/icons/Calling.svg";
import Star from "../../assets/icons/Star.svg";
import { Service } from "../interfaces";

const Services = () => {
  const services_items = [
    {
      title: "تحویل اکسپرس",
      logo: ShoppingCart,
      bgColor: "#FF7D54",
      bgShadow: "#fdc0ab66",
    },
    {
      title: "ضمانت اصالت",
      logo: Award,
      bgColor: "#3BC0C6",
      bgShadow: "#9ddee066",
    },
    {
      title: "ارسال به تمام نقاط",
      logo: GPS,
      bgColor: "#ff6e6e",
      bgShadow: "#fabcbc66",
    },
    {
      title: "بهترین قیمت",
      logo: Star,
      bgColor: "#95DFB2",
      bgShadow: "#a1fec466",
    },
    {
      title: "پشتیبانی 24 ساعته",
      logo: Calling,
      bgColor: "#B3B3E6",
      bgShadow: "#c3c3ff66",
    },
  ];

  return (
    <div className="py-10 xl:px-20 overflow-hidden box-border flex xl:justify-between justify-center items-center flex-col xl:flex-row">
      {services_items.map((item: Service, idx: number) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: idx == 2 ? "3" : idx == 1 || idx == 3 ? "2" : "1",
          }}
          className={`rounded-[40px] h-[150px] w-[150px] xl:w-[170px] xl:h-[170px] rotate-45 shadow-xl ${
            idx == 0 || idx == 4
              ? "xl:-mt-[60px] mt-0"
              : idx == 1 || idx == 3
              ? "xl:mt-[0px] xl:mb-[0px] my-16"
              : "xl:mt-[60px] mt-0"
          }`}
          style={{
            boxShadow: `0 0 20px ${item.bgShadow}`,
            background: item.bgShadow,
          }}
        >
          <div
            className={`h-[150px] w-[150px] xl:w-[170px] xl:h-[170px] z-0 -rotate-45 rounded-[40px] flex flex-col align-center justify-center shadow-md`}
            style={{ background: item.bgColor }}
          >
            <Image
              src={item.logo}
              className="w-[65px] h-[65px] mx-auto"
              alt="آیکون"
            />
            <h6 className="text-md mt-5 mx-auto">{item.title}</h6>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
