const {modelVar} = require('./mongo')
const express = require('express')
const app = express()

app.get('/get', (req, res) => {
    modelVar.find({})
    .then((arrOfdata) => {res.json({arrOfdata})})
    .catch((error) => {res.json({error})})
})

app.post('/post', (req, res) => {
    modelVar.create(req.body)
    .then(elements => res.json(elements))
    .catch(err => res.json(err))
})

app.get('/getid/:id', (req, res) => {
    const id = req.params.id
    modelVar.findById({_id:id})
    .then(record => res.json(record))
    .catch(error => console.log(error))
})

app.put('/put/:id', (req, res) => {
    const id = req.params.id
    modelVar.findByIdAndUpdate({_id:id}, {
        Record_category : req.body.Record_category, 
        Record_Name : req.body.Record_Name, 
        Record_Holder_Name : req.body.Record_Holder_Name, 
        Record_Picture : req.body.Record_Picture, 
        Record_Details : req.body.Record_Details})
    .then(record => res.send("record"))
    .catch(error => console.log(error))
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    modelVar.findByIdAndDelete({_id:id})
    .then(record => res.json(record))
    .catch(error => res.json({error}))
})

module.exports = app;