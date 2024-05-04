"use client";
import useActiveTab from "@/hook/use-active-tab";
import clsx from "clsx";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const sesseion = useSession();
  const { activeTab } = useActiveTab();
  return (
    <div
      className={clsx(
        `fixed top-0 left-[100px]`,
        sesseion.status === "unauthenticated" ? "hidden" : "block"
      )}
    >
      {activeTab}
    </div>
  );
};

export default Sidebar;
