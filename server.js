require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const playerRouter = require("./router/playerRouter")

const PORT = process.env.PORT || 3100;

const app = express();
app.use(express.json());

app.use("/api/v1", playerRouter);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log(`Database is connection is Established`);
    app.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Unable to connect to the Database` + error.message);
  });
