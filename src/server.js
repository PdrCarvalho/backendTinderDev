const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
mongoose.connect(
  "mongodb+srv://user:userpassword@cluster0-pkwlt.mongodb.net/omnistack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
