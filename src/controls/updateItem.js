"use server";

import connectToDatabase from "@/lib/mongoose";
import { itemSchema } from "@/lib/validation";
import item from "@/models/item";
import { revalidatePath } from "next/cache";

export const updateItem = async (updatedData) => {
  const id = updatedData.upId;
  const name = updatedData.updateName;
  const description = updatedData.updateDescription;
  const data = { name, description };
  console.log(data);
  try {
    // ==== check with zod and send error =====
    const parsed = itemSchema.safeParse(data);
    if (!parsed.success) {
      return { error: parsed.error.errors };
    }
    await connectToDatabase();
    await item.findByIdAndUpdate(id, parsed.data, { new: true });
    return { status: "updated successful" };
  } catch (error) {
    return { error: "could not updated" };
  } finally {
    revalidatePath("/");
  }
};
