const twilio = require('twilio')
const quotes = require('./quotes');


var client = {

    getQuote: function () {
        var index = Math.floor((Math.random() * 10) + 1);
        return quotes[index];
    },

    getTwiML:function(){
        var quote = this.getQuote();
        var twiml = new twilio.TwimlResponse();
        twiml.say(quote, { voice: 'man' });
        console.log(twiml.toString());
        return twiml.toString()
    }

}



module.exports=client;