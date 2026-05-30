"use client";

import { AlertDialog, Button } from "@heroui/react";
import { MdDelete } from "react-icons/md";

export function MyRequestsDataDelete({ pet }) {
  //console.log(pet, "pet");

  const handleCancelAdopting = async () => {
      const res = await fetch(`http://localhost:8000/adopting/${pet._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
     window.location.reload();
  };

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <button className="flex items-center gap-2 border border-red-500 text-red-500 px-5 py-2 rounded-xl hover:bg-red-50 duration-300">
          <MdDelete size={20} />
          Cancel
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Delete Pet Permanently?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-gray-600 leading-7">
                This action will permanently delete <strong>{pet.name}</strong>{" "}
                and all related information. This cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button
                slot="close"
                variant="danger"
                onClick={handleCancelAdopting}
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
