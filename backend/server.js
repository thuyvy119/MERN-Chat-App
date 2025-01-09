import express from "express";
// const express = require("express");
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoute.js";

import connectToMongoDB from "./DB/connectMongo.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")))

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
// });


server.listen(PORT, () => 
{   connectToMongoDB();
    console.log(`Server Running on port ${PORT}`) 
});
