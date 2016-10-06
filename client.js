const twilio = require('twilio')('AC263d89a2492cdc7a15e169077d32ecbf','debb2063f4f6de94098a05f631cd9722');
const json2xml = require('./json2xml.js');
const quotes = require('./quotes');


var client = {

    getQuote: function () {
        var index = Math.floor((Math.random() * 10) + 1);
        return quotes[index];
    },

    getTwiML:function(){
        var quote = this.getQuote();
        var quoteinjson = {
            response:{
                say:quote
            }
        };
        var TwiML = json2xml(quoteinjson,"");
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+TwiML;
    }

}


module.exports=client;