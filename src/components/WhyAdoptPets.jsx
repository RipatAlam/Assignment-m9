import Image from "next/image";
import React from "react";
import { CheckCircle } from "lucide-react";
import WhyAdoptImage from "../../public/images/whyadoptpets.png";

const WhyAdoptSection = () => {
  return (
    <section className="w-11/12 mx-auto px-4 py-10 bg-gradient-to-br from-orange-50 via-white to-amber-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 lg:p-14">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            Why Adopt Pets?
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Adopting a pet helps reduce the number of homeless animals and gives
            them a second chance at life.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-gray-700 text-lg">Save a life</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-gray-700 text-lg">Reduce overpopulation</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-gray-700 text-lg">Get loyal companionship</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              <p className="text-gray-700 text-lg">Improve mental health</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-lg h-[600px] overflow-hidden rounded-t-[220px] rounded-b-3xl">
            <Image
              src={WhyAdoptImage}
              alt="Adopt Pet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptSection;
