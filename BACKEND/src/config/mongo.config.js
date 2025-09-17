import mongoose from 'mongoose';

// console.log(process.env.MONGO_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`✅ MongoDB connected: ${mongoose.connection.host}/url-shortener`);
    
    // Drop the username index if it exists
    try {
      await mongoose.connection.db.collection('users').dropIndex('username_1');
      console.log('✅ Removed username index');
    } catch (indexError) {
      // Index might not exist, which is fine
      if (indexError.code !== 27) {  // 27 is the error code for index not found
        console.warn('Warning: Could not remove username index:', indexError.message);
      }
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
