"use server";

import { revalidatePath } from "next/cache";

export async function UpdateEventAction(_, formData) {
  const _id = formData.get("id");
  const title = formData.get("title");
  const date = formData.get("date");
  const session = formData.get("session");
  const country = formData.get("country");
  const length = Number(formData.get("length"));
  const circuit = formData.get("circuit");

  await fetch("https://v1.appbackend.io/v1/rows/81n23oKED5XU", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id,
      title,
      date,
      session,
      country,
      length,
      circuit,
    }),
  });

  revalidatePath("/");
}
