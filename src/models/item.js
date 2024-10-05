// models/Item.js

import mongoose from "mongoose";


const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
