var bodyParser = require('body-parser');
const { json } = require('express');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var data = [{ item: 'a' }]

module.exports = function(app) {
    app.get('/todo', (req, res) => {
        res.render('todo', { tasks: data })
    })

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body)
        console.log(data.length);
        res.json({ tasks: data })
    })

    //not working!!!
    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return (todo.item.trim().replace(/ /g, '-') !== req.params.item)
        })
        console.log(data);
        res.send(JSON.stringify(data))
    })
}