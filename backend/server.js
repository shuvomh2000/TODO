const mongoose = require('mongoose')
const express = require('express')
var cors = require('cors')
const List  =require('./Model/listModel.js')
const app = express()

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://shuvomh:01738622011@cluster0.onlmngs.mongodb.net/trali2?retryWrites=true&w=majority',()=>{
    console.log("DB Connected")
});


app.post('/', (req,res)=>{
    let listInfo ={
        title:req.body.title,
        note:req.body.note
    }
    const list = new List(listInfo)
    list.save()
})

app.get('/',async (req,res)=>{
    let data = await List.find({})
    console.log(data)
    res.send(data)
})

app.listen(8000,()=>{
    console.log("server running on port 8000")
})