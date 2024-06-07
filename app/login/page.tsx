"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HandImage from "../assets/shapes/login_hand.png";
import GoogleIcon from "../assets/icons/google.png";

const Login = () => {
  return (
    <div className="p-5 xl:p-10 w-full xl:w-7/12 mx-auto flex flex-col xl:flex-row justify-around items-center mt-10 xl:mt-0">
      <div className="flex-1 relative">
        <div className="z-0 absolute xl:-right-[150px] right-0 bottom-0 bg-purple-100 xl:w-[450px] xl:h-[450px] w-[180px] h-[180px] rounded-full blur-2xl"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, transform: "translateY(40px)" }}
          animate={{ opacity: 1, scale: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt="طرح"
            src={HandImage}
            className="h-[200px] xl:h-[550px] w-auto relative z-1"
          />
        </motion.div>
      </div>

      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.3 }}
          className="text-3xl xl:text-5xl mb-7 xl:mb-14 xl:mt-6 mt-16 text-center"
        >
          ورود به کفشـــ
          <strong className="text-[var(--color-secondary)] text-4xl xl:text-6xl">
            ت
          </strong>
        </motion.h1>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(-20px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.6 }}
          >
            <label
              className="input input-bordered flex items-center gap-2 mb-5"
              style={{ direction: "ltr" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(-20px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.9 }}
          >
            <label
              className="input input-bordered flex items-center gap-2"
              style={{ direction: "ltr" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" value="password" />
            </label>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1.2 }}
          className="divider divider-start mt-10 opacity-50"
        >
          ادامه با
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1.5 }}
          className="w-full flex justify-end"
        >
          <button className="btn rounded-lg bg-white w-40 text-lg flex items-center py-4">
            <span className="leading-none">Google</span>
            <Image src={GoogleIcon} width={20} alt="Google" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1.8 }}
          className="w-full flex justify-end"
        >
          <button className="btn  w-full mt-10 text-xl bg-[var(--color-secondary)] text-white">
            ورود
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
