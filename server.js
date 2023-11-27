const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:5501",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.listen(5501, () => {
  console.log("Server is running on port 5501");
});
S;
