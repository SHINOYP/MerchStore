const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required:true,
    },
    anime: {
      type: mongoose.ObjectId,
      ref: "Anime",
    },
    quantity: [
      {
        s: {
          type: Number,
         
        },
        m: {
          type: Number,
       
        },
        l: {
          type: Number,
        
        },
        xl: {
          type: Number,
         
        },
      },
    ],
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
