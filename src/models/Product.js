import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    ram: String,
    storage: String,
    processor: String,
    screen: String,
    type: String, // For accessories like Headphone, Earbuds
    description: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
