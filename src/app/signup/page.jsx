"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // Validation
    if (user.password !== user.confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }

    if (user.password.length < 6) {
      return setErrorMessage("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
      });

      if (data) {
        router.push("/signin");
        return;
      }

      if (error) {
        setErrorMessage(error.message || "Something went wrong");
        return;
      }

      //console.log(data);

      alert("Account created successfully");
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 mx-auto min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-orange-500 to-amber-500 p-14 text-white overflow-hidden">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl mb-10 border border-white/20">
              <span className="text-3xl">🐾</span>
              <h1 className="text-2xl font-bold">Pet Adoption</h1>
            </div>

            <h2 className="text-5xl font-extrabold leading-tight">
              Join & Find <br /> Your Perfect Pet
            </h2>

            <p className="mt-8 text-lg leading-8 text-orange-100 max-w-md">
              Create your free account and start exploring adorable pets waiting
              for a loving home.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-6 mt-10">
            <p className="text-lg leading-8">
              “Adopting one pet may not change the world, but for that one pet,
              the world changes forever.”
            </p>
          </div>

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full"></div>
        </div>

        <div className="p-8 md:p-14 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-800">Create Account</h2>

            <p className="text-gray-500 mt-3 text-lg">
              Fill in your details to get started 🧡
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                required
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <input
                required
                name="password"
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <input
                required
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input required type="checkbox" className="accent-orange-500" />
              <span>I agree to the terms & conditions</span>
            </div>


            {errorMessage && (
              <div className="bg-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-[1.02] duration-300 text-white py-4 rounded-2xl text-lg font-bold shadow-lg disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-orange-500 font-semibold hover:underline"
            >
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
