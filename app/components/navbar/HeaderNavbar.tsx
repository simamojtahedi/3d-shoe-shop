"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNavbar = () => {
  const path = usePathname();

  const headerLinks = [
    {
      title: "محصولات",
      link: "/products",
    },
    {
      title: "کفش اختصاصی",
      link: "/custom-shoe",
    },
    {
      title: "درباره ما",
      link: "/about-us",
    },
    {
      title: "سوالات متداول",
      link: "/faq",
    },
  ];

  return (
    <>
      {headerLinks.map((link) => (
        <Link
          href={link.link}
          className="mx-4 text-lg flex items-center"
          key={link.title}
        >
          <div
            className={`${
              path == link.link
                ? "bg-[var(--color-secondary)]"
                : "bg-[var(--color-primary)]"
            } w-2 h-2 p-0 rounded-full ml-1 mt-1`}
          ></div>
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default HeaderNavbar;
