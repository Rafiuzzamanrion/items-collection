// models/Item.js

import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted:{
      type: String,
      required: true
      
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
