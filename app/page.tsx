"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
const session=useSession()
const router=useRouter()
  useEffect(()=>{
    if(session.status==="unauthenticated"){
      router.push("/authentication")
      return
    }
  },[session])
  return (
    <div className=" bg-white">
      Page
    </div>
  );
}

export default page;