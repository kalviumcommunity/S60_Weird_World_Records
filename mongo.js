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
    Record_Details : String
})
console.log(recordData)

const collection = mongodb.model('newdata', newmongo)
module.exports = {modelVar : collection, connectVar : connecting}