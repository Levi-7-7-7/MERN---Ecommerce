// server/removeDuplicates.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js';

dotenv.config();

const removeDuplicates = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const allProducts = await Product.find();
    const seen = new Set();
    const duplicates = [];

    allProducts.forEach((product) => {
      const key = product.name.trim().toLowerCase(); // You can also include price/type for stricter check
      if (seen.has(key)) {
        duplicates.push(product._id);
      } else {
        seen.add(key);
      }
    });

    if (duplicates.length > 0) {
      await Product.deleteMany({ _id: { $in: duplicates } });
      console.log(`🗑️ Removed ${duplicates.length} duplicate products`);
    } else {
      console.log('🎉 No duplicates found');
    }

    process.exit();
  } catch (error) {
    console.error('❌ Error removing duplicates:', error);
    process.exit(1);
  }
};

removeDuplicates();
