"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    href: "/",
    hasDropdown: true,
    dropdown: ["Sub 1", "Sub 2", "Sub 3"],
  },
  { name: "News", href: "/news" },
  { name: "Politics", href: "/politics" },
  { name: "Business", href: "/business" },
  { name: "National", href: "/national" },
  { name: "Culture", href: "/culture" },
  { name: "Opinion", href: "/opinion" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Sports", href: "/sports" },
];

const NavItem = ({
  item,
  isActive,
}: {
  item: (typeof navItems)[0];
  isActive?: boolean;
}) => (
  <div className="relative uppercase flex flex-col items-center group py-1">
    <Link href={item.href || "#"} className="flex items-center cursor-pointer">
      {item.name}
      {item.hasDropdown && (
        <MdKeyboardArrowDown className="ml-1 text-neutral-500 text-base" />
      )}
    </Link>

    <span
      className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
        isActive ? "w-full bg-black" : "w-0 bg-black group-hover:w-full"
      }`}
    />

    {item.hasDropdown && item.dropdown && (
      <div className="absolute top-full left-0 mt-1 w-32 bg-white shadow-lg border border-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
        {item.dropdown.map((sub) => (
          <div
            key={sub}
            className="px-4 py-2 hover:bg-neutral-100 text-sm border-b last:border-b-0"
          >
            {sub}
          </div>
        ))}
      </div>
    )}
  </div>
);

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-[9999] w-full bg-white border-b border-neutral-600">
      <div className="flex items-center justify-between px-4  py-2.5">
        <div className="flex cursor-pointer flex-col gap-1 hover:gap-px transition-all duration-300">
          <div className="rounded-full w-[18px] h-0.5 bg-neutral-800"></div>
          <div className="rounded-full w-[18px] h-0.5 bg-neutral-800"></div>
          <div className="rounded-full w-[18px] h-0.5 bg-neutral-800"></div>
        </div>

        <nav className="hidden md:flex gap-5 text-[15px] font-condensed font-semibold">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </nav>
        <IoSearch className="text-xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;
