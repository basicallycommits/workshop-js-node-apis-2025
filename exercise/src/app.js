import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
const PORT = process.env.PORT ?? 3000;

// TODO Create the Express server

const app = express();

// TODO Configure middleware with app.use() (CORS support, JSON parsing support, static files support)

app.use(cors());
app.use(express.json()); // middleware: tells express to activate json parsing standard(?)
app.use("/assets", express.static("public"));
app.use(morgan("dev")); // tracks the api requests that your frontend (or postman!) sends to your server by logging them in the console.

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

app.post("/api/people", (req, res) => {
  const { firstName, lastName, email } = req.body;

  console.log(`Received new person: ${firstName} ${lastName}, Email: ${email}`);

  // Send the response back to the client
  return res.status(201).json({
    message: `Person ${firstName} ${lastName} created successfully!`,
  });
});

app.get("/api/people/lookup", (req, res) => {
  const firstName = req.query.firstName;

  const lastName = req.query.lastName;

  return res.json({ message: `Hello ${firstName} ${lastName}!` });
});

app.get("/test/:param1", (req, res) => {
  const param1 = req.params.param1;

  // string interpolation: use tilde (`) to create a string with embedded expressions
  res.send(`You've accessed resource via path parameter ${param1}`);
});

app.post("/test2", (req, res) => {
  // request body is not allowed in certain requests (e.g. GET) but is allowed in POST requests.
  console.log("This is the data from the client:", req.body);
  return res.sendStatus(201);
});

// TODO Start the server

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
