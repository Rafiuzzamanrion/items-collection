"use server";

import connectToDatabase from "@/lib/mongoose";
import { itemSchema } from "@/lib/validation";
import item from "@/models/item";
import {revalidatePath} from "next/cache";


export const createItem = async (formData) => {
  const name = formData.name;
  const description = formData.description;
  const data = { name,description};

  try {

    // verified with zod and throw an error
    const parsed = itemSchema.safeParse(data);
    console.log(parsed);
    if (!parsed.success) {
      return { errors: parsed.error.errors };
    }
    await connectToDatabase();
    await item.create(parsed.data);
    return { status: "successfully created item" };
  } catch (error) {
    return { error: "Failed to create item" };
  }
  finally{
    revalidatePath('/')
  }
};
