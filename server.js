import { app } from "./app.js";
import { config } from "dotenv";
import { dbConnect } from "./config/database.js";
import cloudinary from "cloudinary";

config({
  path: "./config/config.env",
});

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
