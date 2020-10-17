//LIB IMPORT
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//START EXPRESS
const server = express();

//ROUTE CREATION
server
  .use(express.static("public"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);

//START SERVER
server.listen(5500);
