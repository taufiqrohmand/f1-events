"use server";

import { revalidatePath } from "next/cache";

export async function AddEventAction(_, formData) {
  const title = formData.get("title");
  const date = formData.get("date");
  const session = formData.get("session");
  const lenght = formData.get("length");
  const circuit = formData.get("circuit");

  await fetch("https://v1.appbackend.io/v1/rows/81n23oKED5XU", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ title, date, session, lenght, circuit }]),
  });

  revalidatePath("/");
}
