"use client";

import { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdoptCard = ({ pet }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //console.log(pet, "pet");

  const { data: session } = authClient.useSession();
  const user = session?.user;
  //console.log(user, "user");
  const [date, setDate] = useState(null);
  //console.log(new Date(date), "date");

  const handleAdopting = async () => {
    if (!user) {
      return alert("Please login first");
    }

    const adoptingData = {
      userId: user?.id,
      petId: pet._id,
      petName: pet.name,
      petCategory: pet.category,
      petAge: pet.age,
      image: pet.image,
      status: "pending",
      date: date
        ? `${date.year}-${String(date.month).padStart(2, "0")}-${String(
        date.day).padStart(2, "0")}`
        : null,
      };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adopting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify(adoptingData),
    });

    const data = await res.json();
    //console.log(data, "data");

    if (res.ok) {
      toast.success("Adopting request submitted successfully");
      router.push("/myrequests");
    }
  };

  return (
    <div className="mt-12 bg-white border rounded-3xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Adopt {pet.name}</h2>

        <p className="text-gray-500 mt-2">
          Submit a pet adopting request and bring {pet.name} home 🐾
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="bg-orange-100 px-3 py-1 rounded-full">
            {pet.category}
          </span>

          <span className="bg-blue-100 px-3 py-1 rounded-full">
            {pet.age} years
          </span>

          <span className="bg-green-100 px-3 py-1 rounded-full">
            {pet.location}
          </span>
        </div>
        <br />
        <DateField onChange={setDate} className="w-[256px]" name="date">
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>
      </div>

      
        <button
          onClick={handleAdopting}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-md transition"
        >
          {loading ? "Booking..." : "Adopt / Book Now"}
        </button>
      
    </div>
  );
};

export default AdoptCard;
