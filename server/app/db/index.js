import mongoose from 'mongoose';
import { config } from '../../config.js';
const connectDB = async (url) => {
  try {
    console.log(url);
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log('mongoDB Connected');
  } catch (error) {
    console.log('MongoDB error');
    process.exit(1);
  }
};

export const switchDB = () => {
  const url =
    process.env.NODE_ENV === undefined
      ? config.mongoDB.url
      : process.env.NODE_ENV === 'test'
      ? config.mongoDB_test.url
      : config.mongoDB_dev.url;
  connectDB(url);
};
