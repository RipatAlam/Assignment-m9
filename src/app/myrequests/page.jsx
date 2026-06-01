import { MyRequestsDataDelete } from "@/components/MyRequestsDataDelete";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyRequestsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adopting/${user?.id}`);
  const petadopting = await res.json();
  //console.log(petadopting, "petadopting");

  return (
    <div className="w-11/12 mx-auto px-4 py-10 bg-gradient-to-br from-orange-50 via-white to-amber-100 min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">My Requests</h1>

        <p className="text-gray-500 mt-2">
          Track all your pet adoption requests 🐾
        </p>
      </div>

      <div className="space-y-6">
        {petadopting.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-3xl shadow-md border border-orange-100 p-5 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition duration-300"
          >
            <div className="w-full md:w-52">
              <Image
                src={pet.image}
                alt={pet.petName}
                width={300}
                height={300}
                className="w-full h-52 object-cover rounded-2xl"
              />
            </div>

            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {pet.petName}
                  </h2>

                  <div className="flex flex-wrap gap-3 mt-3 text-sm">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {pet.petCategory}
                    </span>

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {pet.petAge} years
                    </span>

                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      {pet.status}
                    </span>
                  </div>

                  <p className="text-gray-500 mt-4">
                    Adoption Date:{" "}
                    <span className="font-medium">{pet.date}</span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <MyRequestsDataDelete pet={pet} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRequestsPage;
