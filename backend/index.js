import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import projectRoutes from './Routes/project.route.js';
import clientRoutes from './Routes/client.route.js';
import contactRoutes from './Routes/contact.route.js';
import subsriptionRoutes from './Routes/subscribed.route.js';
import adminRoutes from './Routes/admin.route.js';
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from 'cloudinary';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const DB_URI = process.env.MONGO_URI;

app.use(express.json());

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    
}))

app.use('/api/v1/project', projectRoutes);
app.use('/api/v1/client', clientRoutes);
app.use('/api/v1/user', contactRoutes);
app.use('/api/v1/subscriptions', subsriptionRoutes);
app.use('/api/v1/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Cloudinary Configuration
 cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
});

try {
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error)
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
