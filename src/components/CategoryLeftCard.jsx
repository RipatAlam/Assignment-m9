"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CategoryLeftCard = ({ data, selectedCategory, setSelectedCategory }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const categories = [...new Set(data.map((pet) => pet.category))];

  return (
    <div className="w-full lg:w-64 border-2 rounded-2xl p-4 h-fit">
      <h2
        onClick={() => setOpenCategory(!openCategory)}
        className="flex items-center justify-between text-2xl font-bold cursor-pointer mb-4"
      >
        Category <IoIosArrowDown />
      </h2>

      {openCategory && (
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all hover:bg-amber-500 hover:text-white ${
              selectedCategory === "All"
                ? "bg-amber-500 text-white"
                : "bg-orange-100 hover:bg-orange-200"
            }`}
          >
            All
          </button>

          {categories.map((category, index) => (
            <button key={index} onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-4 py-3 rounded-xl transition ${
              selectedCategory === category
                ? "bg-amber-500 text-white"
                : "bg-orange-100 hover:bg-orange-200"
            }`}>
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryLeftCard;
