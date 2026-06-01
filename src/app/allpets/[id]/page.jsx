import Image from "next/image";
import { FaDog, FaMapMarkerAlt, FaShieldAlt, FaPaw } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GiFemale } from "react-icons/gi";
import Link from "next/link";
import EditDetails from "@/components/EditDetails";
import DeletePet from "@/components/DeletePet";
import AdoptCard from "@/components/AdoptCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  //console.log(id, "id");

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  //console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,},
  });
  const data = await res.json();
  //console.log(data, "data");

  return (
    <div className="w-11/12 mx-auto px-4 py-10 bg-gradient-to-br from-orange-50 via-white to-amber-100">
      <div className="bg-white rounded-3xl shadow-sm border p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Image
              src={data.image}
              alt="Dog"
              width={600}
              height={800}
              className="w-full h-[700px] object-cover rounded-3xl"
            />
          </div>

          <div>
            <div className="flex justify-end gap-4 mb-6">
              <EditDetails data={data} />
              <DeletePet data={data} />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {data.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-5">
              <div className="flex items-center gap-2 bg-purple-100 px-4 py-1 rounded-full">
                <FaDog className="text-purple-600" />
                {data.category}
              </div>

              <span>•</span>
              <p>{data.age} years</p>

              <span>•</span>

              <div className="flex items-center gap-1">
                <GiFemale />
                <p>{data.gender}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-8">
              <FaShieldAlt />
              <p>$ {data.price}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-8">
              <FaMapMarkerAlt />
              <p>{data.location}</p>
            </div>

            <hr className="mb-8" />

            <div>
              <h2 className="text-2xl font-semibold mb-4">About {data.name}</h2>

              <p className="text-gray-600 leading-8">{data.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaPaw className="text-2xl text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Breed</h4>
                    <p className="text-gray-600">{data.breed}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaShieldAlt className="text-2xl text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">
                      {data.vaccinated ? "Vaccinated" : "Not Vaccinated"}
                    </h4>
                    <p className="text-gray-600">
                      {data.vaccinated ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaPaw className="text-2xl text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Good with Kids</h4>
                    <p className="text-gray-600">Yes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPaw className="text-2xl text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Good with Pets</h4>
                    <p className="text-gray-600">Yes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-3xl p-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Want to give Bella a loving home?
                </h2>

                <p className="text-gray-600">
                  Submit an adoption request and wait for the owner's response.
                </p>
              </div>

              <Link href="/myrequests">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-2xl text-lg font-medium duration-300">
                  Adopt Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AdoptCard pet={data} />
    </div>
  );
};

export default PetDetailsPage;
