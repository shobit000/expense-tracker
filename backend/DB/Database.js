import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = process.env.MONGO_URL;
        console.log('Attempting to connect to MongoDB...');
        if (!db) {
            throw new Error('MONGO_URL is not defined in environment variables');
        }
        const { connection } = await mongoose.connect(db);
        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}