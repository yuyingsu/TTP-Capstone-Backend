import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  URI: process.env.MONGODB_URI ||'mongodb+srv://Yuying:gamerbackend@gamer.4dbbj.mongodb.net/test',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/gamerdotcom',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
