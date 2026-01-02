import express from "express";
import cors from "cors";

const app = express();

/* ✅ ALLOW YOUR VERCEL FRONTEND */
app.use(cors({
  origin: "https://on-chain-counter-ecru.vercel.app",
}));

app.use(express.json());

/* 🔢 IN-MEMORY COUNTER (DEMO) */
let counter = 0;

/* ✅ READ COUNTER */
app.get("/read", (req, res) => {
  res.json({ counter });
});

/* ✅ INCREMENT COUNTER (NO BLOCKCHAIN HERE) */
app.post("/increment", (req, res) => {
  const { address } = req.body;

  if (!address) {
    return res.status(400).json({ error: "Address required" });
  }

  console.log("Increment request from:", address);

  counter += 1;

  return res.json({
    success: true,
    counter,
  });
});

/* ✅ RENDER PORT FIX */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
