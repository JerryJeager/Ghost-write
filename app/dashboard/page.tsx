"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      sessionStorage.getItem("token") === "" ||
      sessionStorage.getItem("user_id") === ""
    ) {
      router.push("/auth/login");
    }
  }, []);
  return <div>dashboard...</div>;
};

export default page;
