"use client";

import { useActionState } from "react";
import { UpdateEventAction } from "../_actions/action-upate";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { EditIcon } from "../_icon/icon";

export const UpdateEventButton = ({
  id,
  title,
  date,
  session,
  country,
  length,
  circuit,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [_, formAction, pending] = useActionState(UpdateEventAction, null);

  const handleSubmit = async (formData) => {
    await formAction(formData);
    onOpenChange(false);
  };

  return (
    <>
      <Button
        isIconOnly
        color="primary"
        size="sm"
        variant="ghost"
        onPress={onOpen}
      >
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edit Event</ModalHeader>
              <ModalBody>
                <form
                  id="updateForm"
                  className="space-y-2"
                  action={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      e.currentTarget.requestSubmit();
                    }
                  }}
                >
                  <Input type="hidden" name="id" defaultValue={id} />
                  <Input
                    name="title"
                    placeholder="Input event title..."
                    defaultValue={title}
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <Input
                    name="date"
                    placeholder="Input event date..."
                    defaultValue={date}
                    type="date"
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                  <Select
                    variant="bordered"
                    name="session"
                    defaultValue={session}
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
                    name="country"
                    placeholder="Input country..."
                    defaultValue={country}
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <Input
                    name="length"
                    placeholder="Input circuit lengh... KM"
                    defaultValue={length}
                    type="number"
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <Input
                    name="circuit"
                    placeholder="Input image url circuite..."
                    defaultValue={circuit}
                    type="url"
                    size="md"
                    color="primary"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  form="updateForm"
                  disabled={pending}
                  className="shadow-sm rounded-lg text-white py-1 px-3 bg-blue-500"
                >
                  {pending ? "Saving..." : "Save"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
