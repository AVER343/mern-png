const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    id:{
        type:String,
        required : true,
        trim: true
    },
    author:{
        type:String,
        required : true,
        trim: true
    },
    width:{
        type:Number,
        required : true,
        trim: true
    },
    height:{
        type:Number,
        required : true,
        trim: true
    },
    url:{
        type:String,
        required : true,
        trim: true
    },
    download_url:{
        type:String,
        required:true
    }
})
module.exports = TaskSchema
