const express = require('express')
const app = express()

app.get('/get', (req, res) => {
    res.send('Get request successful')
})

app.post('/post', (req, res) => {
    res.status(201).send("Posted successfully")
})

app.put('/put/:id', (req, res) => {
    res.send("Updated successfully !!")
})

app.delete('/delete/:id', (req, res) => {
    res.send("Deleted data.")
})

module.exports = app;