// @ts-ignore
import express from 'express';
import eventRouter from "./src/routers/event.router";
import database from './src/configs/database';
import authRouter from "./src/routers/auth.router";
import fileUpload from 'express-fileupload'
// const bodyParser = require('body-parser');
import cors from 'cors'
const PORT = 8000;
const app = express();
database.connect();
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.json())
app.use("/event", eventRouter);
app.use("/auth", authRouter);
app.listen(PORT, () => {
    console.log('App running on port: ' + PORT)
})