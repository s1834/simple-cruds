import mongoose, { Schema } from "mongoose";

const detailSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters."],
    maxLength: [50, "Name must be lesser than 50 characters."],
  },

  phone: {
    type: Number,
    required: [true, "phone number is required."],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  hobbies: {
    type: String,
    required: [true, "Hobbies are required"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Detail = mongoose.models.Detail || mongoose.model("Detail", detailSchema);

export default Detail;
