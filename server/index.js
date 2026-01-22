import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
dotenv.config();

if (!process.env.CONNECTION_URL) {
  console.error('FATAL ERROR: CONNECTION_URL is not defined.');
  console.error(
    "Please create a .env file in the 'server' directory with the following content:"
  );
  console.error('CONNECTION_URL=<YOUR_MONGODB_CONNECTION_URL>');
  process.exit(1);
}

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts',postRoutes)
app.use('/user',userRoutes)



const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.log('MongoDB connection error:', error.message);
  });

