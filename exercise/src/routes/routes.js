import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ message: "Welcome!" });
});

router.get("/hello", (req, res) => {
  return res.json({ message: "Hello!" });
});

router.get("/hello/world", (req, res) => {
  return res.json({ message: "Hello world!" });
});

router.post("/hello", (req, res) => {
  return res.json({ message: "Hello world!" });
});

router.get("/api/people", (req, res) => {
  const firstName = req.query.firstName;

  const lastName = req.query.lastName;

  res.send(`Hello ${firstName} ${lastName}`);
});

router.post("/api/people", (req, res) => {
  const { firstName, lastName, email } = req.body;

  console.log(`Received new person: ${firstName} ${lastName}, Email: ${email}`);

  // Send the response back to the client
  return res.status(201).json({
    message: `Person ${firstName} ${lastName} created successfully!`,
  });
});

router.get("/api/people/lookup", (req, res) => {
  const firstName = req.query.firstName;

  const lastName = req.query.lastName;

  return res.json({ message: `Hello ${firstName} ${lastName}!` });
});

router.get("/test/:param1", (req, res) => {
  const param1 = req.params.param1;

  // string interpolation: use tilde (`) to create a string with embedded expressions
  res.send(`You've accessed resource via path parameter ${param1}`);
});

router.post("/test2", (req, res) => {
  // request body is not allowed in certain requests (e.g. GET) but is allowed in POST requests.
  console.log("This is the data from the client:", req.body);
  return res.sendStatus(201);
});

export default router;
