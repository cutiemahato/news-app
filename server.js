const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://your-allowed-origin.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// Enable CORS with options
app.use(cors(corsOptions));

// ... your routes and other middleware ...

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
