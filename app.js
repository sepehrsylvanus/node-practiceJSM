import express from "express";

const app = express();
import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongodb.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription tracker API!");
});

app.listen(PORT, async () => {
  console.log(`Subscription tracker API listening on port ${PORT}!`);

  await connectToDatabase();
});

export default app;
