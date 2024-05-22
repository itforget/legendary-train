import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import productsRoute from '../routes/products'
import userRoute from '../routes/user'

const app = express()
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(productsRoute, userRoute)

mongoose
  .connect(process.env.MONGO_DB_URL || "")
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });