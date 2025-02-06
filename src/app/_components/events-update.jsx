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
                  action={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      e.currentTarget.requestSubmit();
                    }
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <Input type="hidden" name="id" defaultValue={id} />
                    <Input
                      name="title"
                      placeholder="Input event title..."
                      label="Event Title"
                      labelPlacement="outside"
                      defaultValue={title}
                      size="md"
                      className="w-full border rounded-lg"
                      required
                    />
                    <Input
                      name="date"
                      placeholder="Input event date..."
                      label="Event Date"
                      labelPlacement="outside"
                      defaultValue={date}
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
                      defaultSelectedKeys={[session]}
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
                      defaultValue={country}
                      size="md"
                      className="w-full border rounded-lg"
                    />
                    <Input
                      name="length"
                      placeholder="Input circuit lengh... KM"
                      label="Circuit Length"
                      labelPlacement="outside"
                      defaultValue={length}
                      type="number"
                      size="md"
                      className="w-full border rounded-lg"
                    />
                    <Input
                      name="circuit"
                      placeholder="Input image url circuite..."
                      label="Circuit Image"
                      labelPlacement="outside"
                      defaultValue={circuit}
                      type="url"
                      size="md"
                      className="w-full border rounded-lg"
                    />
                  </div>
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
