require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const PORT = 6066;
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const { getHouses, addHouse, deleteHouse } = require("./controller");

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database is Connected");
});

app.get("/api/houses", getHouses);
app.post("/api/house", addHouse);
app.delete("/api/house/:id", deleteHouse);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
