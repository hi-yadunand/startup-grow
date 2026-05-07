const mongoose = require("mongoose");

const contactLeadSchema = new mongoose.Schema(
  {
    name: {
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
    subject: {
      type: String,
      required: true,
      trim: true
    },
    service: {
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

module.exports = mongoose.models.ContactLead || mongoose.model("ContactLead", contactLeadSchema);

