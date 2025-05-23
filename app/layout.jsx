import "./globals.css";

import Link from "next/link";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";

import { SmallNavigationDrawer } from "@/components/sidebar/smallNavbar";
import { Slide, ToastContainer } from "react-toastify";
import Sidebar from "@/components/sidebar/Sidebar";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { UserDataFetcher } from "@/components/custom/DataFetcher";

export const metadata = {
  title: "Shoppify || shop anything anytime",
  description: "An unique and versitile platform for good quality shopping",
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const ttTrailer = localFont({
  src: "./fonts/TT_Trailer/TT Trailers Trial ExtraBold Italic.ttf",
  display: "swap",
  weight: "800",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="true"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${nunito.className} h-screen`}>
        <UserDataFetcher />

        <header className="header z-10 w-full h-[70px] px-4 md:px-8 bg-inherit flex items-center justify-between text-black">
          <Link href="/">
            <h1
              className={`${ttTrailer.className} -tracking-tight text-3xl font-bold text-buttonSecondary`}
            >
              Shoppify 🛒
            </h1>
          </Link>
          <div>
            <span className="block lg:hidden">
              <SmallNavigationDrawer />
            </span>
          </div>
        </header>
        <section className="sidebar hidden lg:flex overflow-hidden">
          <Sidebar />
        </section>
        <main className="main overflow-y-auto overflow-x-hidden">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          theme="light"
          transition={Slide}
        />
      </body>
    </html>
  );
}
