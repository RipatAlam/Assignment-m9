import Link from "next/link";
import React from "react";

const BannerPage = () => {
  return (
    <div className="relative min-h-screen w-11/12 mx-auto flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/HeroSection.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-2xl px-6 md:px-12 lg:px-20 xl:px-24">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leanding-tight tracking-tight">
          Find Your <br /> New <br /> <span className="text-amber-400">Furry Best Friend</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl mt-6 max-w-lg ">
          Discover Your ideal furry friend and bring joy to your life. Explore
          loving pets waiting to become your perfect companion
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/allpets" className="bg-amber-500 hover:bg-amber-600 text-white text-xl font-bold py-4 px-8 rounded-2xl transition-all">Adopt Now</Link>
            <button className="border-2 border-white text-white text-xl hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition-all">Browse Pets</button>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
