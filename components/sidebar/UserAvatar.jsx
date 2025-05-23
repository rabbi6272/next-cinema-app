"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { motion } from "motion/react";

import { useUserStore } from "@/lib/store/store";

function UserComponent() {
  const user = useUserStore((state) => state.user);
  return (
    <>
      {user ? (
        <div>
          <div className="w-[50px] h-[50px] overflow-hidden rounded-full cursor-pointer">
            {user.image_url ? (
              <CldImage
                crop={"fill"}
                width={50}
                height={50}
                gravity="face"
                src={user.image_id}
                alt="user image"
              />
            ) : (
              <svg
                className="h-[50px] w-[50px] rounded-full p-1 bg-gray-300 text-gray-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </div>
      ) : (
        <svg
          className="h-[50px] w-[50px] rounded-full p-1 bg-gray-300 text-gray-400 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </>
  );
}

export function UserAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { type: "spring", visualDuration: 0.8, bounce: 0.1 },
      }}
    >
      <UserComponent />
    </motion.div>
  );
}

{
  /* <div className="flex items-center gap-8">
        <Link
          className="px-6 py-2 rounded-full hover:bg-gray-200 hover:drop-shadow-xl "
          href="/"
        >
          Home
        </Link>
        <Link
          className="px-6 py-2 rounded-full  hover:bg-gray-200 hover:drop-shadow-xl "
          href="/about"
        >
          About
        </Link>
        {user ? (
          <Link
            className="px-6 py-2 rounded-full  hover:bg-gray-200 hover:drop-shadow-xl "
            href="/admin"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            className="px-6 py-2 rounded-full  hover:bg-gray-200 hover:drop-shadow-xl "
            href="/admin/admin-login"
          >
            Login
          </Link>
        )}
      </div> */
}
