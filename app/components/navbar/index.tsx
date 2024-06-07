"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import HeaderNavbar from "./HeaderNavbar";
import UserIcon from "../../assets/icons/User.svg";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="navbar px-5 xl:px-10 pt-4">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-2xl hover:bg-transparent inline"
          href="/"
        >
          کفشـــ
          <strong className="inline text-[var(--color-secondary)]">ت</strong>
        </a>
      </div>
      {path !== "/" && (
        <motion.div
          initial={{ opacity: 0, transform: "translateY(10px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.5 }}
          className="hidden xl:flex"
        >
          <HeaderNavbar />
        </motion.div>
      )}
      <div className="flex flex-1 justify-end">
        <Link
          href="/login"
          className="btn btn-ghost w-12 h-12 ml-4 hover:bg-[var(--color-primary)]"
        >
          <Image src={UserIcon} />
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn w-12 h-12 hover:bg-[var(--color-primary)]"
          >
            <div className="indicator relative p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item w-[23px] h-[23px] p-0 -mt-[10px] mx-[30px]">
                0
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-56 bg-base-100 shadow py-2"
          >
            <div className="card-body ">
              <span className="font-bold text-lg text-center">
                سبد خرید خالی است
              </span>
              <div className="card-actions">
                <Link
                  href="/cart"
                  className="btn btn-primary btn-block text-lg mt-2"
                >
                  نمایـــش سبد خرید
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
