const mongoose = require("mongoose");
// const { Number } = require("twilio/lib/twiml/VoiceResponse");


const  data3= mongoose.Schema({
    name:{
        type: String
    },
    value:{
        type: Number,
    },
    composition:{
        type:String
    },
    percentage:{
        type:Number
    }

});
module.exports = mongoose.model('Data3', data3);
