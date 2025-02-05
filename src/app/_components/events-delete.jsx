"use client";

import { DeleteEventAction } from "../_actions/action-delete";
import { useActionState } from "react";
import { Button, Input } from "@heroui/react";
import { DeleteIcon } from "../_icon/icon";

export default function DeleteEvenetButton({ id }) {
  const [state, formAction, pending] = useActionState(DeleteEventAction, null);
  return (
    <form action={formAction}>
      <Input name="id" defaultValue={id} type="hidden"></Input>
      <Button isIconOnly type="submit" size="sm" color="danger" variant="ghost">
        <DeleteIcon />
      </Button>
    </form>
  );
}
