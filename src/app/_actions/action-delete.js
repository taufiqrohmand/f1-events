"use server";

import { revalidatePath } from "next/cache";

export async function DeleteEventAction(_, formData) {
  const id = formData.get("id");

  await fetch("https://v1.appbackend.io/v1/rows/81n23oKED5XU", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]),
  });

  revalidatePath("/");
}
