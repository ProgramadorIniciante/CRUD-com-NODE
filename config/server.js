const express = require("express");
const app = express();

const consign = require("consign");

app.set("views engine","ejs");
app.set("views","./src/views");

consign()
.then("./src/controlles/controlles.js")
.include("./src/rotas")
.into(app);

app.listen(8080,()=>console.log("SERVER ON!!!"));