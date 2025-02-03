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
                  className="space-y-2"
                  action={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      e.currentTarget.requestSubmit();
                    }
                  }}
                >
                  <Input
                    name="title"
                    placeholder="Input event title..."
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <Input
                    name="date"
                    placeholder="Input event date..."
                    type="date"
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <Select
                    variant="bordered"
                    name="circuit"
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <SelectItem key="test">TEST</SelectItem>
                    <SelectItem key="practice">PRACTICE</SelectItem>
                    <SelectItem key="qualifiying">QUALIFIYING</SelectItem>
                    <SelectItem key="race">RACE</SelectItem>
                  </Select>
                  <Input
                    name="county"
                    placeholder="Input country..."
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <Input
                    name="length"
                    placeholder="Input circuit lengh... KM"
                    type="number"
                    minLength={1000}
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <Input
                    name="ciruite"
                    placeholder="Input image url circuite..."
                    type="url"
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
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
