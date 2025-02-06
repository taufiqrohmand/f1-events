"use client";

import { useActionState } from "react";
import { AddEventAction } from "../_actions/action-add";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";

export const AddEventButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [state, formAction, pending] = useActionState(AddEventAction, null);

  const handleSubmit = async (formData) => {
    await formAction(formData);
    onOpenChange(false);
  };

  return (
    <>
      <Button
        color="primary"
        onPress={onOpen}
        className="shadow-sm rounded-lg text-white py-1 px-3 bg-blue-500"
      >
        Add Event
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add new Event</ModalHeader>
              <ModalBody>
                <form
                  id="createForm"
                  action={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      e.currentTarget.requestSubmit();
                    }
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <Input
                      name="title"
                      placeholder="Input event title..."
                      label="Event Title"
                      labelPlacement="outside"
                      size="md"
                      className="w-full border rounded-lg"
                      required
                    />
                    <Input
                      name="date"
                      label="Event Date"
                      placeholder="Input event date..."
                      labelPlacement="outside"
                      type="date"
                      size="md"
                      className="w-full border rounded-lg"
                      required
                    />
                    <Select
                      name="session"
                      placeholder="Select session.."
                      label="Session"
                      labelPlacement="outside"
                      size="md"
                      className="w-full border rounded-lg"
                    >
                      <SelectItem key="test">TEST</SelectItem>
                      <SelectItem key="practice">PRACTICE</SelectItem>
                      <SelectItem key="qualifiying">QUALIFIYING</SelectItem>
                      <SelectItem key="race">RACE</SelectItem>
                    </Select>
                    <Input
                      name="country"
                      placeholder="Input country..."
                      label="Country"
                      labelPlacement="outside"
                      size="md"
                      className="w-full border rounded-lg"
                    />
                    <Input
                      name="length"
                      placeholder="Input circuit length... KM"
                      label="Cicuit Length"
                      labelPlacement="outside"
                      type="number"
                      size="md"
                      className="w-full border rounded-lg"
                    />
                    <Input
                      name="circuit"
                      placeholder="Input image url circuit..."
                      label="Circuit Image"
                      labelPlacement="outside"
                      type="url"
                      size="md"
                      className="w-full border rounded-lg"
                      required
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  form="createForm"
                  disabled={pending}
                  className="shadow-sm rounded-lg text-white py-1 px-3 bg-blue-500"
                >
                  {pending ? "Adding..." : "Add"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
