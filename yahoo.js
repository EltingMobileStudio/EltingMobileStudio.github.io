import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/quote", async (req, res) => {
  const symbol = req.query.symbol;
  const r = await fetch(
    `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`
  );
  const data = await r.json();
  res.json(data);
});

app.listen(3000, () => console.log("Proxy działa na :3000"));
