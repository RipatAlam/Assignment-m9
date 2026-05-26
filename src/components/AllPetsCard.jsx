import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllPetsCard = ({ pet }) => {
  return (
    <div className="space-y-4 border-2 p-3 rounded-2xl">
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
          <p className="text-gray-600 font-semibold text-sm">({pet.rating})</p>
        </div>
      </div>
      <Link href={`/allpets/${pet._id}`}>
        <button className="border-2 border-amber-500 hover:text-amber-600 hover:bg-amber-100 text-amber-500 font-bold w-full text-xl py-2 rounded-2xl transition-all">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AllPetsCard;
