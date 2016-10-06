const app = require('express')();
const client = require('./client.js');
const port = process.env.PORT || 8080;



app.get('/',function(request,response){
    response.send('<h1>Confucius say....</h1>');
});


app.get('/confucius',function(request,response){
    var quote = client.getTwiML();
    response.type('text/xml');
    response.send(quote);
});


app.listen(port, function () {
	console.log('Server running ...');
});
