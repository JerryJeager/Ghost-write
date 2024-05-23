"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderBtn = () => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes("dashboard") && (
        <Link href={"/auth/login"}>
          <button className="bg-primary p-1 lg:p-2 rounded-md text-white w-20">
          Login
        </button>
        </Link>
      )}
    </>
  );
};

export default HeaderBtn;
