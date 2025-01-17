import mongoose from 'mongoose';

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/db_car_rental_system';  // Update with your MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Exit if MongoDB connection fails
  }
};

export default connectDB;
