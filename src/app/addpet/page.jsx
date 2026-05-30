"use client";

import { authClient } from "@/lib/auth-client";
import { PawPrint, MapPin, BadgeInfo, CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";

const AddPetForm = () => {
  const router = useRouter();
  const {data: session} = authClient.useSession();
  const token = session?.user?.token;
  //console.log(token, "token");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const addpet = Object.fromEntries(formData.entries());
    //console.log(addpet, "addpet");

    const res = await fetch("http://localhost:8000/addpetDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addpet),
    });
    const data = await res.json();
    //console.log(data, "data");

    if (res.ok) {
      alert("Pet Added Successfully");
      router.push("/allpets");
    }
  };

  return (
    <div className="w-11/12 mx-auto bg-gradient-to-br from-orange-50 via-white to-amber-100 py-14 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-2">
        <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 p-10 lg:p-14 text-white flex flex-col justify-between">
          <div className="pt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                <PawPrint size={30} />
              </div>

              <h1 className="text-3xl font-bold">Pet Adoption</h1>
            </div>

            <h2 className="text-5xl font-extrabold leading-tight">
              Give a Pet <br /> a Loving Home 🐾
            </h2>

            <p className="mt-6 text-lg leading-8 text-orange-100">
              Add adorable pets for adoption and help them find caring families.
              A small step from you can change a pet’s whole life.
            </p>
          </div>

          <div className="absolute top-0 right-0 w-60 h-60 bg-white/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full"></div>
        </div>

        <div className="p-8 lg:p-14">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-800">Add New Pet</h2>

            <p className="text-gray-500 mt-2">
              Fill all the details carefully 🧡
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Pet Name
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500 transition">
                <PawPrint className="text-orange-500" size={20} />

                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter pet name"
                  className="w-full px-3 py-4 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Category
                </label>

                <select
                  required
                  name="category"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
                >
                  <option>Select Category</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Rabbit</option>
                  <option>Bird</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                  Age
                </label>

                <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                  <CalendarDays className="text-orange-500" size={20} />

                  <input
                    required
                    type="number"
                    name="age"
                    placeholder="2 years"
                    className="w-full px-3 py-4 outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Vaccinated
              </label>

              <select
                required
                name="vaccinated"
                className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
              >
                <option value="">Select Option</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Adoption Date
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                <CalendarDays className="text-orange-500" size={20} />

                <input
                  required
                  type="date"
                  name="date"
                  className="w-full px-3 py-4 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Rating
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                <BadgeInfo className="text-orange-500" size={20} />

                <input
                  required
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  name="rating"
                  placeholder="4.5"
                  className="w-full px-3 py-4 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Location
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                <MapPin className="text-orange-500" size={20} />

                <input
                  required
                  type="text"
                  name="location"
                  placeholder="Dhaka, Bangladesh"
                  className="w-full px-3 py-4 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Image URL
              </label>

              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                <input
                  required
                  type="text"
                  name="image"
                  placeholder="Paste image URL here..."
                  className="w-full mt-4 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-orange-500"
                />
              </label>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Adoption Price
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                <BadgeInfo className="text-orange-500" size={20} />

                <input
                  required
                  type="number"
                  name="price"
                  placeholder="$120"
                  className="w-full px-3 py-4 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Description
              </label>

              <div className="border border-gray-200 rounded-3xl px-4 py-3 focus-within:border-orange-500">
                <div className="flex gap-3">
                  <textarea
                    required
                    rows="5"
                    name="description"
                    placeholder="Write something about the pet..."
                    className="w-full outline-none resize-none bg-transparent"
                    spellCheck="false"
                    autoComplete="off"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-[1.02] duration-300 text-white py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              Add Pet Now 🐶
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPetForm;
