"use server";

import connectToDatabase from "@/lib/mongoose";
import item from "@/models/item";
import { revalidatePath } from "next/cache";

export const deleteItem = async (id) => {
  try {
    await connectToDatabase();
    await item.findByIdAndDelete(id);
    return { status: "deleted successfully" };
  } catch (error) {
    return { error: "failed to delete" };
  } finally {
    revalidatePath("/");
  }
};
