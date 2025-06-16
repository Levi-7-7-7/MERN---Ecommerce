// server/models/productModel.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // ✅ Enforce uniqueness
  type: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
