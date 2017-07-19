var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

//creates a new instance of an express app - express = app creator
var app = express()

app.set('view engine', 'ejs')

app.use(express.static('views'))

app.set('views', __dirname + '/views')

app.get('/', function(request, response){
    response.render('home.ejs')
})

var port = process.env.PORT
app.listen(port, function(){
    console.log(`App running on $(port) hamsters.`)
})