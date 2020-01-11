const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const PORT = 80;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Invalid API POINT");
});
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log("server started at port " + PORT);
});
