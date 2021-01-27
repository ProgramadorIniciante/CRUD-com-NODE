const express = require("express");
const app = express();
const body = require("body-parser");

const consign = require("consign");

app.set("views engine","ejs");
app.set("views","./src/views");

app.use(body.urlencoded({extended:true}));

consign()
.then("./src/models/models.js")
.then("./config/db.js")
.then("./src/controlles/controlles.js")
.include("./src/rotas")
.into(app);

app.listen(8080,()=>console.log("SERVER ON!!!"));
