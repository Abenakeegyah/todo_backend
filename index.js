import express from "express";
import  mongoose  from "mongoose";
import nodemon from "nodemon";
import cors from 'cors';

const app = express();

//assigning port number to server
const port = process.env.PORT || 7000;

app.listen(port,()=>{console.log('server is running')});
const db = process.env.DB_URL;

