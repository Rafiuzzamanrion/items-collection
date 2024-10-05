"use server";

import connectToDatabase from "@/lib/mongoose";
import { itemSchema } from "@/lib/validation";
import item from "@/models/item";
import { NextResponse } from "next/server";

export const createItem = async (formData) => {
  const name = formData.name;
  const description = formData.description;
  const isCompleted = "false";
  const data = { name, description, isCompleted };

  try {
    const parsed = itemSchema.safeParse(data);
    if (!parsed) {
      return { errors: parsed.error.errors };
    }
    await connectToDatabase();
    await item.create(parsed.data);
    return { status: "successfully created item" };
  } catch (error) {
    return { error: "Failed to create item" };
  }
};
