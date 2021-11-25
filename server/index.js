import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { setupApiRoutes } from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

setupApiRoutes(app);

const server = app.listen(PORT, () => {
  console.log("LISTENING ON PORT: " + PORT);
});
