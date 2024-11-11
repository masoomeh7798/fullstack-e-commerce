import express from "express";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import HandleError from "./Utils/handleError.js";
import catchError from "./Utils/catchError.js";
import categoryRouter from "./Routes/Category.js";
import uploadRouter from "./Routes/Upload.js";
import productRouter from "./Routes/Product.js";


const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static("Public"));

app.use('/api/upload',uploadRouter)
app.use('/api/category',categoryRouter)
app.use('/api/product',productRouter)


app.use("*", (req, res, next) => {
  return next(new HandleError("Route not found", 404));
});
app.use(catchError);
export default app;
