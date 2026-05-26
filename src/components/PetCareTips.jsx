import { Stethoscope, Utensils, Dumbbell, Heart } from "lucide-react";

const PetCareTips = () => {
  const tips = [
    {
      icon: <Utensils className="w-8 h-8 text-orange-400" />,
      title: "Healthy Food",
      desc: "Provide balanced and nutritious food.",
      border: "border-orange-100",
      bg: "bg-orange-50",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-blue-400" />,
      title: "Regular Exercise",
      desc: "Daily exercise keeps them happy.",
      border: "border-blue-100",
      bg: "bg-blue-50",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-pink-400" />,
      title: "Regular Checkup",
      desc: "Vaccinations and checkups are important.",
      border: "border-pink-100",
      bg: "bg-pink-50",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-300" />,
      title: "Love & Care",
      desc: "Give them love and they will love you more.",
      border: "border-orange-100",
      bg: "bg-orange-50",
    },
  ];

  return (
    <section className="w-11/12 mx-auto px-4 py-15 bg-gradient-to-br from-orange-50 via-white to-amber-100">
      <div className="px-6 md:px-12 lg:px-20 xl:px-24 mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Pet Care Tips
        </h2>

        <p className="text-gray-500 mt-3 text-lg">
          Take care, show love, repeat.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="group p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div
              className={`w-20 h-20 rounded-full border ${tip.border} ${tip.bg} flex items-center justify-center mb-6`}
            >
              {tip.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {tip.title}
            </h3>

            <p className="text-gray-500 leading-relaxed text-lg">
              {tip.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetCareTips;