const app = require('express')();
const client = require('./client.js');
const json2xml = require('./json2xml.js');

app.get('/',function(request,response){
    response.send('<h1>Confucius say....</h1>');
});


app.listen(3100, function () {
	console.log('Server running on port number 3100');
});


