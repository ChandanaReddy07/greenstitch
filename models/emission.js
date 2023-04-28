const mongoose = require("mongoose");
// const { Number } = require("twilio/lib/twiml/VoiceResponse");


const  data2= mongoose.Schema({
    name:{
        type: String
    },
    value:{
        type: Number,
    },
    color:{
        type:String
    }
});
module.exports = mongoose.model('Data2', data2);
