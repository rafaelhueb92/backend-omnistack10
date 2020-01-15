const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv/config");

const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDb conectado"))
  .catch(err => console.error("err", err));

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
