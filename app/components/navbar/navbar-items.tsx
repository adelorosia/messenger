"use client";

import useActiveTab from "@/hook/use-active-tab";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
interface Props {
  title: string;
  Icon: LucideIcon;
}
const NavbarItems: React.FC<Props> = ({ Icon, title }) => {
  const { activeTab, setActivetab } = useActiveTab();
  return (
    <li className={clsx(`hover:text-indigo-500 transition-all cursor-pointer lg:py-7`,activeTab===title?"text-indigo-500":"text-[#a7a6a8]",title==="Settings" && "hidden lg:block")}>
      <Icon size={24} onClick={()=>setActivetab(title)}/>
    </li>
  );
};

export default NavbarItems;
