const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebSocket } = require("./websocket");
require("dotenv/config");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDb conectado"))
  .catch(err => console.error("err", err));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
