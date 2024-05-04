import { create } from "zustand";

interface Props {
  activeTab: string;
  setActivetab: (val: string) => void;
}

const useActiveTab = create<Props>((set) => ({
  activeTab: "Chats",
  setActivetab: (val: string) => set({ activeTab: val }),
}));

export default useActiveTab;
