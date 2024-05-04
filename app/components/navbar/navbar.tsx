"use client";
import Image from "next/image";
import items from "@/config/navbar-item-details";
import NavbarItems from "./navbar-items";
import { useSession } from "next-auth/react";
import clsx from "clsx";

const Navbar = () => {
    const sesseion=useSession()
  return (
    <nav className={clsx(`flex flex-col justify-between w-screen lg:w-[100px] h-[86px] lg:h-screen fixed bottom-0 left-0 lg:top-0 py-1 lg:py-7 px-0 bg-[#16191c] text-white  items-center`,sesseion.status==="unauthenticated"?"hidden":"flex")}>
      <Image
        className="hidden lg:block"
        src={"/images/logo.png"}
        width={46}
        height={46}
        alt="Messenger"
      />
      <ul className=" flex lg:flex-col items-center justify-between lg:justify-end w-full h-full px-6 lg:px-0">
        {items.map((item) => {
          return (
            <NavbarItems Icon={item.icon} title={item.title} key={item.title} />
          );
        })}
        <li className="lg:pt-7">
          <div className=" w-11 h-11 rounded-full bg-indigo-500 flex justify-center text-xl items-center font-semibold">
            M
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
