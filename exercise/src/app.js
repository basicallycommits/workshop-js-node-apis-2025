import express, { json } from "express";
import cors from "cors";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// TODO Create the Express server

const app = express();

// TODO Configure middleware with app.use() (CORS support, JSON parsing support, static files support)

app.use(cors());
app.use(express.json()); // middleware: tells express to activate json parsing standard(?)
app.use("/assets", express.static("public"))

// TODO Your application routes here

app.get("/", (req, res) => {
  return res.json({ message: "Welcome!" });
});

app.get("/hello", (req, res) => {
  return res.json({ message: "Hello!" });
});

app.get("/hello/world", (req, res) => {
  return res.json({ message: "Hello world!" });
});

app.post("/hello", (req, res) => {
  return res.json({ message: "Hello world!" });
});

app.get("/api/people", (req, res) => {
    const firstName = req.query.firstName;

    const lastName = req.query.lastName;

    res.send(`Hello ${firstName} ${lastName}`);
});

app.get("/api/people/lookup", (req, res) => {
    const firstName = req.query.firstName;

    const lastName = req.query.lastName;

    return res.json({message : `Hello ${firstName} ${lastName}!`});
});

app.get("/test/:param1", (req, res) => {

    const param1 = req.params.param1;

    // string interpolation: use tilde (`) to create a string with embedded expressions
    res.send(`You've accessed resource via path parameter ${param1}`);
});

app.post("/test2", (req, res) => {
    console.log("This is the data from the client:", req.body);
    return res.sendStatus(201);
})

// TODO Start the server

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
