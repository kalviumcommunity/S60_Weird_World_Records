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

app.put('/put/:id', (req, res) => {
    res.send("Updated successfully !!")
})

app.delete('/delete/:id', (req, res) => {
    res.send("Deleted data.")
})

module.exports = app;