const {modelVar, usermodelVar} = require('./mongo')
const express = require('express')
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
// const cookie = require("cookie-parser")

const app = express()
dotenv.config()
// app.use(cookie())

const Schema = require("./Schema")

// Get Record
app.get('/get', (req, res) => {
    modelVar.find({})
    .then((arrOfdata) => {res.json({arrOfdata})})
    .catch((error) => {res.json({error})})
})

// Post Record
app.post('/post', (req, res) => {
    const {error, value} = Schema.validate(req.body)
    if(error){
        res.json({message : "Invalid input", error : error.message})
    }

    modelVar.create(req.body)
    .then(elements => res.json(elements))
    .catch(err => res.json(err))
})

// Get Record By Id
app.get('/getid/:id', (req, res) => {
    const id = req.params.id
    modelVar.findById({_id:id})
    .then(record => res.json(record))
    .catch(error => console.log(error))
})

// Update Record
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

// Delete Record
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    modelVar.findByIdAndDelete({_id:id})
    .then(record => res.json(record))
    .catch(error => res.json({error}))
})

// USERS

// Signup Post
app.post('/signup', (req, res) => {
    usermodelVar.create(req.body)
    .then(output => res.json(output))
    .catch(error => res.json(error))
})

// Get Users
app.get("/signup", (req, res) => {
    usermodelVar.find({})
    .then((arrOfUsers) => {res.json({arrOfUsers})})
    .catch((error) => {res.json({error})})
})

// Login Post
app.post("/login", (req, res) => {
    const {email, password, username} = req.body
    usermodelVar.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password && user.username === username){
                const webToken= jwt.sign({email : user.email, password : user.password}, process.env.PASSWORD)
                // res.cookie("webToken", webToken)
                res.json({success : "Login successful", webToken : webToken})
                console.log(webToken)
            }else{
                res.json("User detail did not match")
            }
        }else{
            res.json("login failed")
        }
    })
})

module.exports = app;