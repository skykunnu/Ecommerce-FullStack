import mongoose from 'mongoose';


export  async function connectDB() {
    await mongoose.connect(
      "mongodb+srv://shikharkhandelwal27:48cac0MwaFYt0zYs@cluster0.dlqaa.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0"
    );
  }
