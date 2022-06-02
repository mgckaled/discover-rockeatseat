const express = require('express')
const app = express()

app.set("view emgine", "ejs")

// Rota index
app.get("/", function(req, res){
  res.render("index")
})

