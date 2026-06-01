"use client";

import { Button, Modal, Surface } from "@heroui/react";
import { BadgeInfo, CalendarDays, MapPin, PawPrint } from "lucide-react";
import { MdEdit } from "react-icons/md";

const EditDetails = ({ data }) => {
  // UPDATE DATA
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedPet = Object.fromEntries(formData.entries());
    //console.log(updatedPet, "updatedPet");

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPet),
    });

    const result = await res.json();
    //console.log(result, "result");

    if (res.ok) {
      alert("Pet Updated Successfully");
      window.location.reload();
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="flex items-center gap-2 border border-purple-500 text-purple-500 px-5 py-2 rounded-xl hover:bg-purple-50 duration-300">
          <MdEdit size={20} />
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Pet Details</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update your pet information carefully to keep the adoption
                details accurate and up to date 🐾
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form id="editForm" onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Pet Name
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500 transition">
                      <PawPrint className="text-orange-500" size={20} />

                      <input
                        defaultValue={data.name}
                        required
                        type="text"
                        name="name"
                        placeholder="Enter pet name"
                        className="w-full px-3 py-4 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Category
                      </label>

                      <select
                        defaultValue={data.category}
                        required
                        name="category"
                        className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
                      >
                        <option>Select Category</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Rabbit</option>
                        <option>Bird</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Age
                      </label>

                      <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                        <CalendarDays className="text-orange-500" size={20} />

                        <input
                          defaultValue={data.age}
                          required
                          type="number"
                          name="age"
                          placeholder="2 years"
                          className="w-full px-3 py-4 outline-none bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Vaccinated
                    </label>

                    <select
                      defaultValue={data.vaccinated}
                      required
                      name="vaccinated"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-orange-500"
                    >
                      <option value="">Select Option</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Adoption Date
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                      <CalendarDays className="text-orange-500" size={20} />

                      <input
                        defaultValue={
                          data.date
                            ? new Date(data.date).toISOString().split("T")[0]
                            : ""
                        }
                        required
                        type="date"
                        name="date"
                        className="w-full px-3 py-4 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Rating
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                      <BadgeInfo className="text-orange-500" size={20} />

                      <input
                        defaultValue={data.rating}
                        required
                        type="number"
                        step="0.1"
                        min="1"
                        max="5"
                        name="rating"
                        placeholder="4.5"
                        className="w-full px-3 py-4 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Location
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                      <MapPin className="text-orange-500" size={20} />

                      <input
                        defaultValue={data.location}
                        required
                        type="text"
                        name="location"
                        placeholder="Dhaka, Bangladesh"
                        className="w-full px-3 py-4 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Image URL
                    </label>

                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      <input
                        defaultValue={data.image}
                        required
                        type="text"
                        name="image"
                        placeholder="Paste image URL here..."
                        className="w-full mt-4 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-orange-500"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Adoption Price
                    </label>

                    <div className="flex items-center border border-gray-200 rounded-2xl px-4 focus-within:border-orange-500">
                      <BadgeInfo className="text-orange-500" size={20} />

                      <input
                        defaultValue={data.price}
                        required
                        type="number"
                        name="price"
                        placeholder="$120"
                        className="w-full px-3 py-4 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      Description
                    </label>

                    <div className="border border-gray-200 rounded-3xl px-4 py-3 focus-within:border-orange-500">
                      <div className="flex gap-3">
                        <textarea
                          defaultValue={data.description}
                          required
                          rows="5"
                          name="description"
                          placeholder="Write something about the pet..."
                          className="w-full outline-none resize-none bg-transparent"
                          spellCheck="false"
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                form="editForm"
                className="bg-orange-500 hover:bg-orange-600"
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditDetails;
