
const express = require('express');
var express = require('express');
var port = process.env.PORT || 9000;
var unfurled = require('unfurled');
var cors = require('cors');
var app = express();



app.use(cors());
app.use(express.json())
app.get('/', function (req, res) {
    res.send(JSON.stringify({ message: 'This is bookmarkslog' }));
});
app.post('/url', function (req, res) {
    var urlgot = req.body.urlgot
        unfurled(urlgot)
            .then(resp => {
                console.log(resp);
                res.json(resp)
            })
            .catch(err => {
                console.log(err)
                res.json({
                    msg: "enter valid Url"
                })
            })
    }
);


app.get('/url', function (req, res) {
    res.send(JSON.stringify({ message: 'enter url' }));
});



app.listen(process.env.PORT || 9000, function(){
    console.log('Your node js server is running');
});
