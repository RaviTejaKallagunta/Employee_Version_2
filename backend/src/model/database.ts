import mongoose from "mongoose";

const connection=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/MERN').then(()=>console.log("DB Connected successfully"))
}
export default connection;