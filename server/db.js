const mongoose = require("mongoose");

let connected = false;
let lastError = "";
let connectionPromise = null;

async function connectDatabase() {
  const mongoUri = String(process.env.MONGODB_URI || "").trim().replace(/^["']|["']$/g, "");

  if (!mongoUri) {
    console.warn("MONGODB_URI is not set. API will use in-memory storage for this run.");
    return false;
  }

  if (connected) {
    return true;
  }

  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = connectWithMongoose(mongoUri).finally(() => {
    connectionPromise = null;
  });

  return connectionPromise;
}

async function connectWithMongoose(mongoUri) {
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000
    });
    connected = true;
    lastError = "";
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    connected = false;
    lastError = error.message;
    console.warn(`MongoDB connection failed: ${error.message}`);
    console.warn("API will continue with in-memory storage for this run.");
    return false;
  }
}

function isDatabaseConnected() {
  return connected;
}

function getDatabaseStatus() {
  return {
    connected,
    lastError
  };
}

module.exports = {
  connectDatabase,
  getDatabaseStatus,
  isDatabaseConnected
};
