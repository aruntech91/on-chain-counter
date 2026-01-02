import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { exec } from "child_process";

const app = express();

/* ✅ ALLOW FRONTEND (LOCAL + RENDER) */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://on-chain-counter-ecru.vercel.app/"
  ],
  methods: ["GET", "POST"],
}));

/* 🔢 SIMPLE COUNTER STATE (DEMO PURPOSE) */
let counter = 0;

/* ✅ READ COUNTER */
app.get("/read", (req, res) => {
  res.json({ counter });
});

/* ✅ INCREMENT COUNTER */
app.post("/increment", (req, res) => {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: "Address required" });
  }

  console.log("Increment request from:", address);

  exec("node scripts/incrementCounter.js", (error) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "TX failed" });
    }

    counter += 1;

    console.log("Counter incremented successfully");

    res.json({
      success: true,
      counter,
    });
  });
});

/* ✅ RENDER-SAFE PORT (THIS IS THE MAIN FIX) */
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
