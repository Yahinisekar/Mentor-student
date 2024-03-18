import express from 'express';
import cors from 'cors';
import connectDB from './Database/config.js';
import studentrouter from './Routers/studentRouter.js';
import mentorrouter from './Routers/mentorRouter.js';

import dotenv from 'dotenv';
 
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
const port = process.env.PORT;

app.use('/api', studentrouter);
app.use('/api/mentor',mentorrouter );

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})