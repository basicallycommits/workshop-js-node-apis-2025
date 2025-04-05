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

router.get("/paramtest/:param1", (req, res) => {
  const param1 = req.params.param1;

  // string interpolation: use tilde (`) to create a string with embedded expressions
  res.send(`You've accessed resource via path parameter ${param1}`);
});

router.post("/postjson", (req, res) => {
  // request body is not allowed in certain requests (e.g. GET) but is allowed in POST requests.
  console.log("This is the data from the client:", req.body);
  return res.sendStatus(201);
});

export default router;
