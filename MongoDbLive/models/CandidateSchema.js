const mongoose = require('mongoose');

const CandidatSchema = new mongoose.Schema({
    accountAddress:{
        type:String,
        required:true,
    },
    imageName:{
        type:String,
        required:true
    }

})

const CandidateModel = mongoose.model("candidates", CandidatSchema)
module.exports = CandidateModel;