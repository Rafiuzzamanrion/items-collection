
// server side rendering (SSR)
"use server";

import item from "@/models/item";
export const fetchALLItem = async () => {
  const data = await item.find({});
  return data;
};
