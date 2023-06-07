import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true, // mandatory fields otherwise temp folder not created
  })
);
app.use(cors());

//
import userRouter from "./routers/userRouter.js";

app.use("/api/v1", userRouter);
