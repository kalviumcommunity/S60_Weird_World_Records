const joi = require("joi")

const joiSchema = joi.object({
    Record_category: joi.string().required(), 
    Record_Name : joi.string().required(),
    Record_Holder_Name : joi.string().required(),
    Record_Picture : joi.string().uri().required(),
    Record_Details : joi.string().required(),
    Added_by : joi.string().required()
})

module.exports = joiSchema;