const mongoose = require('mongoose')
const {Schema} = mongoose

const listSchema = new Schema({
    title:{
        type:String,
        requied:true,
    },
    note:{
        type:String,
    },
})

const List = mongoose.model('List',listSchema)
module.exports = List