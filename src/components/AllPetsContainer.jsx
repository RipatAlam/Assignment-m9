"use client";

import React, { useState } from "react";
import AllPetsCard from "./AllPetsCard";
import CategoryLeftCard from "./CategoryLeftCard";

const AllPetsContainer = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPets =
    selectedCategory === "All"
      ? data
      : data.filter((pet) => pet.category === selectedCategory);

  return (
    <div className="w-11/12 mx-auto bg-gradient-to-br from-orange-50 via-white to-amber-100 py-14 px-4">
      <h1 className="text-4xl font-bold mb-8">All Pets</h1>

      <div className="flex flex-col lg:flex-row gap-4">
        <CategoryLeftCard
          data={data}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {filteredPets.map((pet) => (
            <div key={pet._id}>
              <AllPetsCard pet={pet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPetsContainer;
