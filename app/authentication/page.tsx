"use client";

import useActiveForm from "@/hook/use-active-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Register from "../components/auth-forms/register";
import Login from "../components/auth-forms/login";

const page = () => {
  const session = useSession();
  const router = useRouter();
  const { activeForm, setActiveForm } = useActiveForm();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
      return;
    }
  }, [session]);
  return (
    <div className=" bg-[#1a1d21] h-screen flex items-center justify-center text-white">
      {activeForm === 0 && <Login />}
      {activeForm === 1 && <Register />}
    </div>
  );
};

export default page;
