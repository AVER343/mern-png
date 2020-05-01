const mongoose = require('mongoose')
const ImageSchema = new mongoose.Schema({
    list:[
        {   id:String,
            author:String,
            width:Number,
            height:Number,
            url:String,
            download_url:String}
    ]
})
module.exports = mongoose.model('Image',ImageSchema)

// {
//     "id":"0",
//     "author":"Alejandro Escamilla",
//     "width":5616,
//     "height":3744,
//     "url":"https://unsplash.com/photos/yC-Yzbqy7PY",
//     "download_url":"https://picsum.photos/id/0/5616/3744"
//  }