import express from "express";

const app = express();
import { PORT } from "./config/env.js";
app.get("/", (req, res) => {
  res.send("Welcome to the Subscription tracker API!");
});

app.listen(PORT, () => {
  console.log(`Subscription tracker API listening on port ${PORT}!`);
});

export default app;
