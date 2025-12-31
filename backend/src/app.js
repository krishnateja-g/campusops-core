import express from "express";

const app = express();

// middleware to read JSON
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("CampusOps Backend is running 🚀");
});

export default app;
