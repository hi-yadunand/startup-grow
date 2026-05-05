const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema(
  {
    startupName: {
      type: String,
      required: true,
      trim: true
    },
    founderName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    stage: {
      type: String,
      required: true,
      trim: true
    },
    service: {
      type: String,
      required: true,
      trim: true
    },
    budget: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "In progress", "Closed"],
      default: "New"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.models.ServiceRequest || mongoose.model("ServiceRequest", serviceRequestSchema);
