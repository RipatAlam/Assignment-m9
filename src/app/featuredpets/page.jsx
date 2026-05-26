import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPetsPage = async () => {
  const res = await fetch("http://localhost:8000/allpets");
  const data = await res.json();

  const featuredPets = data.slice(0, 4);

  return (
    <div className="w-11/12 mx-auto bg-gradient-to-br from-orange-50 via-white to-amber-100 py-14 px-4">
      <h1 className="text-5xl  font-bold my-8">Featured Pets</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredPets.map((pet) => (
          <div key={pet._id} className="space-y-4 border-2 p-3 rounded-2xl">
            <div className="relative w-80 h-80 md:w-75 md:h-75 mx-auto overflow-hidden">
              <Image
                src={pet.image}
                alt={pet.name}
                fill
                className="object-cover rounded-t-2xl hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <div className="space-y-2 px-4">
              <h1 className="text-3xl font-bold">{pet.name}</h1>
              <div className="flex items-center gap-4">
                <p className="text-2xl">{pet.category}</p>
                <p>{pet.age} year</p>
              </div>
              <div>
                <p className="text-2xl font-bold">$ {pet.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <p>{pet.location}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className={`${
                        star <= pet.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 font-semibold text-sm">
                  ({pet.rating})
                </p>
              </div>
            </div>
            <Link href={`/allpets/${pet._id}`}>
              <button className="border-2 border-amber-500 hover:text-amber-600 hover:bg-amber-100 text-amber-500 font-bold w-full text-xl py-2 rounded-2xl transition-all">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/allpets"
        className="flex justify-center items-center my-15">
        <button className="text-amber-500 border-2 border-amber-500 px-5 py-3 rounded-2xl font-bold text-lg hover:bg-amber-500 hover:text-white transition-all">View All Pets</button>
      </Link>
    </div>
  );
};

export default FeaturedPetsPage;
