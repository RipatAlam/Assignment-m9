import BannerPage from "@/components/Banner";
import FeaturedPetsPage from "./featuredpets/page";
import WhyAdoptSection from "@/components/WhyAdoptPets";
import PetCareTips from "@/components/PetCareTips";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <FeaturedPetsPage />
      <WhyAdoptSection />
      <PetCareTips />
    </div>
  );
}
