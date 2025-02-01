"use client";

import React from "react";
import Link from "next/link";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import useUserStore from "@/lib/store/store";
import { UserAvatar } from "./UserAvatar";

export function SmallNavigationDrawer() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const user = useUserStore((state) => state.user);

  async function userLogout(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/adminLogout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        setUser({ user: null });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured while logging out");
    }
  }

  return (
    <React.Fragment>
      <button
        onClick={openDrawer}
        className="p-2 text-black text-lg bg-transparent"
      >
        <i className="fa-solid fa-bars" />
      </button>

      <Drawer open={open} onClose={closeDrawer} placement="right">
        <div className="flex items-center justify-between p-4">
          <Link href="/" onClick={closeDrawer}>
            <Typography variant="h5" color="blue-gray">
              Shopping Cart
            </Typography>
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="flex flex-col justify-between">
          <List>
            {user && (
              <Link href="/admin/dashboard" onClick={closeDrawer}>
                {" "}
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </Link>
            )}
            <ListItem>
              <ListItemPrefix>
                <svg
                  class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
              </ListItemPrefix>
              About
            </ListItem>
            {/* <ListItem>
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Sales
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Profile
            </ListItem> */}
            {!user && (
              <Link href="/admin/admin-login" onClick={closeDrawer}>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
                  </ListItemPrefix>
                  Log in
                </ListItem>
              </Link>
            )}
          </List>

          <Link
            onClick={closeDrawer}
            href="/admin/profile"
            className="w-full absolute bottom-2 flex gap-2 items-center p-2 bg-blue-gray-50 cursor-pointer"
          >
            <UserAvatar />

            <span>
              <p className="text-sm font-semibold"> {user?.name}</p>
              <p className="text-xs">{user?.email}</p>
            </span>
          </Link>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   Drawer,
//   Typography,
//   IconButton,
//   List,
//   ListItem,
// } from "@material-tailwind/react";
// import useUserStore from "@/lib/store/store";

// export function SmallNavigationDrawer() {
//   const [open, setOpen] = useState(false);
//   const openDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);
//   const user = useUserStore((state) => state.user);
//   return (
//     <>
//       <IconButton
//         onClick={openDrawer}
//         className="text-black text-lg bg-transparent"
//       >
//         <i className="fa-solid fa-bars" />
//       </IconButton>
//       <Drawer
//         placement="right"
//         open={open}
//         onClose={closeDrawer}
//         className="bg-inherit z-50"
//       >
//         <div className="mb-2 flex items-center justify-between p-4 bg-white">
//           <Typography variant="h5" color="blue-gray">
//             Shopping Cart
//           </Typography>
//           <IconButton variant="text" color="black" onClick={closeDrawer}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <List className="bg-white z-50">
//           <Link onClick={closeDrawer} href="/">
//             <ListItem>Home</ListItem>
//           </Link>
//           <Link onClick={closeDrawer} href="/about">
//             <ListItem>About</ListItem>
//           </Link>
//           {user ? (
//             <Link onClick={closeDrawer} href="/admin">
//               <ListItem>Dashboard</ListItem>
//             </Link>
//           ) : (
//             <Link onClick={closeDrawer} href="/admin/admin-login">
//               <ListItem>Login</ListItem>
//             </Link>
//           )}
//         </List>
//       </Drawer>
//     </>
//   );
// }
