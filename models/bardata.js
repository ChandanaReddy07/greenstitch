const mongoose = require("mongoose");
// const { Number } = require("twilio/lib/twiml/VoiceResponse");


const  data= mongoose.Schema({
    month:{
        type: Number
    },
  
    values:{
        type: [Number],
        default:[]
    }
});
module.exports = mongoose.model('Data1', data);
