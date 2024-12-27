import express from "express";
// const express = require("express");
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoute.js";

import connectMongo from "./DB/connectMongo.js";

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })


app.listen(5000, () => 
{   connectMongo();
    console.log(`Server Running on port ${PORT}`) 
});
