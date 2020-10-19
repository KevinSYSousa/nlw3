//LIB IMPORT
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//START EXPRESS
const server = express();

server
  //BODY REQ
  .use(express.urlencoded({ extended: true }))

  //STATIC FILES
  .use(express.static("public"))

  //TEMPLATE ENGINE CONFIG
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //ROUTE CREATION
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

//START SERVER
server.listen(5500);
