import mongoose from 'mongoose';

const ListingSchema = new mongoose.Schema(
  {
    userRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 62,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
      enum: ['petrol', 'diesel', 'electric'],
    },
    carManufacturer: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    regularPrice: {
      type: Number,
      required: true,
      min: 50,
    },
    discountPrice: {
      type: Number,
      min: 0,
    },
    offer: {
      type: Boolean,
      default: false,
    },
    parking: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
      enum: ['rent'],
    },
    driveType: {
      type: String,
      required: true,
      enum: ['2wd', '4wd'],
    },
    seatingCapacity: {
      type: Number,
      required: true,
      min: 1,
      max: 15,
    },
    imageUrls: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', ListingSchema);

export default Listing; 
