const mongodb = require('mongoose')
const recordData = require('./recordData')
const dotenv = require('dotenv')
dotenv.config()

function connecting(){
mongodb.connect(process.env.CONNECT)
.then(() => {
    console.log('Success')
})
.catch(() => {
    console.log('error')
})
}

const newmongo = mongodb.Schema({
    Record_category : String,
    Record_Name : String,
    Record_Holder_Name : String,
    Record_Picture : String,
    Record_Details : String,
    Added_by : String
})
console.log(recordData)

// users
const userSchema = mongodb.Schema({
    username : String,
    email : String,
    password : String
})

const collection = mongodb.model('newdata', newmongo)
const usercollection = mongodb.model('users database', userSchema)

module.exports = {modelVar : collection, connectVar : connecting, usermodelVar : usercollection}