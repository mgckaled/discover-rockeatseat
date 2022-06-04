const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// Rota index
app.get('/', function (req, res) {
	res.render("pages/index")
})

app.get('/sobre', function (req, res) {
	res.render("pages/about")
})

// método de linkagem para a porta 8080
app.listen(8080)
console.log('Servidor Funcionando')
