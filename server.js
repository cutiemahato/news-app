const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/news", async (req, res) => {
  const { query } = req.query;
  const apiKey = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
