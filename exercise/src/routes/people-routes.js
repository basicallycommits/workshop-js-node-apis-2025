import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const firstName = req.query.firstName;

  const lastName = req.query.lastName;

  res.send(`Hello ${firstName} ${lastName}`);
});

router.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;

  console.log(`Received new person: ${firstName} ${lastName}, Email: ${email}`);

  // Send the response back to the client
  return res.status(201).json({
    message: `Person ${firstName} ${lastName} created successfully!`,
  });
});

router.get("/lookup", (req, res) => {
  const firstName = req.query.firstName;

  const lastName = req.query.lastName;

  return res.json({ message: `Hello ${firstName} ${lastName}!` });
});

export default router;
