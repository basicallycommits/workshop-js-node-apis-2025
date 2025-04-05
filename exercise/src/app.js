import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes/routes.js";

dotenv.config();

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
// const PORT = process.env.PORT ?? 3000;
const PORT = process.env.PORT;

// TODO Create the Express server

const app = express();

// TODO Configure middleware with app.use() (CORS support, JSON parsing support, static files support)

app.use(cors());
app.use(express.json()); // middleware: tells express to activate json parsing standard(?)
app.use("/assets", express.static("public"));
app.use(morgan("dev")); // tracks the api requests that your frontend (or postman!) sends to your server by logging them in the console.

// mount routes after middleware
app.use("/", routes);

// TODO Your application routes here

// TODO Start the server

app.listen(PORT ?? 3000, () => {
  console.log(`Express server listening on port ${PORT ?? 3000}`);
});
