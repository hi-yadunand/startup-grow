const mongoose = require("mongoose");

let connected = false;

async function connectDatabase() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn("MONGODB_URI is not set. API will use in-memory storage for this run.");
    return false;
  }

  if (connected) {
    return true;
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000
    });
    connected = true;
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.warn(`MongoDB connection failed: ${error.message}`);
    console.warn("API will continue with in-memory storage for this run.");
    return false;
  }
}

function isDatabaseConnected() {
  return connected;
}

module.exports = {
  connectDatabase,
  isDatabaseConnected
};
