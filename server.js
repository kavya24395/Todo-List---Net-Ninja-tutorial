var express = require('express')

var app = express()

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.listen(3000)
console.log('listening on 3000 port');