import express, { json } from "express";
import cors from "cors";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// TODO Create the Express server

const app = express();

// TODO Configure middleware with app.use() (CORS support, JSON parsing support, static files support)

app.use(cors());
app.use(express.json());

// TODO Your application routes here

app.get("/", (req, res) => {
  return res.json({ message: "Hello world!" });
});

// TODO Start the server

app.listen(3000, () => {
    console.log("Express server listening on port 3000");
});
