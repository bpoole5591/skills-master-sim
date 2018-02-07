require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  { json } = require("body-parser"),
  port = process.env.PORT || 3005,
  app = express(),
  massive = require("massive"),
  controller = require("./controller");

///// Connection to Database /////
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set("db", dbInstance))
  .catch(console.log);

app.use(cors());
app.use(json());
app.use("/", express.static(__dirname));

///// API Endpoints /////
app.post("/api/users/create", controller.createUsers); // Create
app.get("/api/users", controller.getUsers); // Read
app.put("/api/users/update", controller.updateUsers); // Update
app.delete("/api/users/delete", controller.deleteUsers); // Delete
app.get("/api/users/min", controller.getMin); // min query
app.get("/api/users/max", controller.getMax); // max query

///// Listen function /////
app.listen(port, function() {
  console.log("Server listening on port", port);
});
