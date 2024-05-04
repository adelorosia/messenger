import { create } from "zustand";

interface Props {
  activeForm: number;
  setActiveForm: (val: number) => void;
}

// 0 is login form and 1 is register form

const useActiveForm = create<Props>((set) => ({
  activeForm: 0,
  setActiveForm: (val: number) => set({ activeForm: val }),
}));

export default useActiveForm;
