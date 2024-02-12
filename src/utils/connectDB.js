import mongoose from "mongoose";

async function connectDB (){
     if (mongoose.connections[0].readyState) return 
     mongoose.set("strictQuery",false)
     await mongoose.connect(process.env.MONGO_URI)
}

export default connectDB;
