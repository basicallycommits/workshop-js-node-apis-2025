import express from "express";
import peopleRoutes from "./people-routes.js";
import testRoutes from "./test-routes.js";

const router = express.Router();

router.use("/api/people", peopleRoutes); // all /api/people requests go here
router.use("/api/test", testRoutes); // all /api/test requests go here

export default router;
