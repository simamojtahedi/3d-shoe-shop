"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ShoeWrapper from "../shoe/index";
import SideText from "../motion/header/SideText";
import HeaderStar from "../../assets/icons/HeaderStar.svg";
import ArrowBottom from "../../assets/icons/Arrow-Bottom.svg";
import HeaderNavbar from "../navbar/HeaderNavbar";
import HeaderText from "../motion/header/HeaderText";

const Header = () => {
  return (
    <div>
      <div className="relative w-full xl:h-[620px] min-h-[400px] h-fit px-5 xl:px-10 pt-2 pb-5">
        <div
          className="relative flex flex-col xl:flex-row justify-between items-start h-full p-5 xl:p-10 py-10 rounded-3xl relative "
          style={{
            background: "var(--color-secondary)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%238182f0' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%237f80ec' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%237d7ee8' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%237b7ce4' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23797ADF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%237778dd' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%237677da' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%237576d8' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%237374d6' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%237273D3' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "cover",
          }}
        >
          <Image
            alt="آیکون"
            src={HeaderStar}
            className="absolute left-[4%] top-[10%] w-[100px] hidden xl:block"
          />
          <Image
            alt="آیکون"
            src={HeaderStar}
            className="absolute left-[56%] bottom-[15%] w-[90px] hidden xl:block"
          />
          <div className="absolute top-0 left-[26.5%] z-[0] hidden xl:block">
            <svg
              width="670"
              height="27"
              viewBox="0 0 670 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.20975 0.0148611C0.767426 -0.00580165 0.360016 -0.00408724 0 0.0148611H1.20975ZM333 0.0148611H1.20975C4.65796 0.175945 10.2274 1.697 12 7.01486C14 13.0149 18.8333 18.5149 21 20.5149C22.3333 22.3482 28.5 26.5149 36 26.5149C44.7471 26.9125 237.661 26.6843 334.75 26.5179C431.839 26.6843 624.753 26.9125 633.5 26.5149C641 26.5149 647.167 22.3482 648.5 20.5149C650.667 18.5149 655.5 13.0149 657.5 7.01486C659.273 1.697 664.842 0.175945 668.29 0.0148611H669.5C669.14 -0.00408724 668.733 -0.00580165 668.29 0.0148611H336.5H333Z"
                fill="var(--background-app)"
              ></path>
            </svg>

            <motion.div
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center absolute -top-4 left-0 w-full"
            >
              <HeaderNavbar />
            </motion.div>
          </div>
          <HeaderText />

          <div className="h-full flex items-center justify-center mt-10 xl:mt-0 w-full xl:w-auto">
            <div className="rounded-xl">
              <ShoeWrapper />
            </div>
          </div>
          <SideText />
        </div>
        <div className="absolute bottom-[14px] left-[31%] xl:left-[48%] z-[0]">
          <Image
            alt="آیکون"
            src={ArrowBottom}
            className="absolute w-[33px] left-[53px] bottom-[2px]"
          />
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
    </div>
  );
};

export default Header;
