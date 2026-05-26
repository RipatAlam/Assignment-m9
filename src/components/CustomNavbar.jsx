"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "../../public/images/NavLeftSide.jpg";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { authClient, signUp } from "@/lib/auth-client";

const CustomNavbar = () => {
  const [openDashboard, setOpenDashboard] = useState(false);
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  //DashBoard dropdown set
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDashboard(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Mobile Menu set
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { data: session } = authClient.useSession();

  const user = session?.user;
  //console.log(user, "user");

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <div className="w-11/12 mx-auto border-b bg-amber-50 shadow-sm z-50">
      <main className="flex items-center justify-between py-2">
      
        <div className="flex justify-center items-center gap-2">
          <button
            className="block md:hidden pl-5"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <CiMenuFries size={25} />
          </button>
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="cursor-pointer mx-5 rounded-full"
          />

          <Link href="/" className="text-3xl font-bold">
            <span className="text-amber-600">Pets</span> House
          </Link>
        </div>

      
        {openMenu ? (
          <div
            ref={mobileMenuRef}
            className="absolute z-10 top-16 right-0 w-full pl-15 p-4 shadow-lg md:hidden animate-in slide-in-from-top duration-500"
          >
            <Link
              href="/"
              className="block rounded-lg hover:bg-gray-100 text-lg hover:font-semibold hover:text-amber-600 px-4 py-2"
            >
              Home
            </Link>
            <Link
              href="/allpets"
              className="block rounded-lg hover:bg-gray-100 text-lg hover:font-semibold hover:text-amber-600 px-4 py-2"
            >
              All Pets
            </Link>
            <Link
              href="/myrequests"
              className="block rounded-lg hover:bg-gray-100 text-lg hover:font-semibold hover:text-amber-600 px-4 py-2"
            >
              My Requests
            </Link>
            <Link
              href="/addpet"
              className="block rounded-lg hover:bg-gray-100 text-lg hover:font-semibold hover:text-amber-600 px-4 py-2"
            >
              Add Pet
            </Link>
          </div>
        ) : (
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className={`block text-lg border-b-2 pb-1 transition-all ${
                  pathname === "/"
                    ? "border-amber-600 text-amber-600"
                    : "border-transparent hover:border-amber-600 hover:text-amber-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/allpets"
                className={`block text-lg border-b-2 pb-1 transition-all ${
                  pathname === "/allpets"
                    ? "border-amber-600 text-amber-600"
                    : "border-transparent hover:border-amber-600 hover:text-amber-600"
                }`}
              >
                All Pets
              </Link>
              <Link
                href="/myrequests"
                className={`block text-lg border-b-2 pb-1 transition-all ${
                  pathname === "/myrequests"
                    ? "border-amber-600 text-amber-600"
                    : "border-transparent hover:border-amber-600 hover:text-amber-600"
                }`}
              >
                My Requests
              </Link>
              <Link
                href="/addpet"
                className={`block text-lg border-b-2 pb-1 transition-all ${
                  pathname === "/addpet"
                    ? "border-amber-600 text-amber-600"
                    : "border-transparent hover:border-amber-600 hover:text-amber-600"
                }`}
              >
                Add Pet
              </Link>
            </div>
          </div>
        )}

        <div className="relative pr-5" ref={dropdownRef}>
          <button
            onClick={() => setOpenDashboard(!openDashboard)}
            className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-2"
          >
            <Image
              src={user?.image || logo}
              alt="User"
              width={35}
              height={35}
              className="rounded-full w-[35px] h-[35px] object-cover"
            />

            <span className="flex items-center gap-2">
              {user?.name || "Dashboard"}
              <IoIosArrowDown />
            </span>
          </button>

          {openDashboard && (
            <div
              ref={dropdownRef}
              className="absolute z-10 top-16 right-0 w-full px-2 p- shadow-lg animate-in slide-in-from-top duration-500 rounded-2xl"
            >
              <Link
                href="/addpet"
                className="block rounded-lg px-4 py-2 hover:bg-gray-100  text-lg hover:font-semibold hover:text-amber-600"
              >
                Add Pet
              </Link>

              <Link
                href="/myrequests"
                className="block rounded-lg px-4 py-2 hover:bg-gray-100  text-lg hover:font-semibold hover:text-amber-600"
              >
                My Requests
              </Link>

              <div className="my-2 border-t"></div>

              {user ? (
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left rounded-lg px-4 py-2 hover:bg-gray-100 text-lg hover:font-semibold hover:text-red-500"
                >
                  Sign Out
                </button>
              ) : pathname === "/signin" ? (
                <Link
                  href="/signup"
                  className="block rounded-lg px-4 py-2 hover:bg-gray-100 text-lg hover:font-semibold hover:text-amber-600"
                >
                  Sign Up
                </Link>
              ) : (
                <Link
                  href="/signin"
                  className="block rounded-lg px-4 py-2 hover:bg-gray-100 text-lg hover:font-semibold hover:text-amber-600"
                >
                  Sign In
                </Link>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CustomNavbar;
