import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DATABASE CONNECTED");
    } catch (error) {
        console.error("Error database connectio", error);
        process.exit(1);
        
    }
}
