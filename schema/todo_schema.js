//importing mongoose library to our file
import mongoose from 'mongoose'
import { stringify } from 'nodemon/lib/utils'

const {Schema,model} = mongoose

//creating variable for schema
const todoSchema = Schema({
    title : {
        type : String,
        required: true

    },
    description : {
        type : String,
        required: true

    },   date_time : {
        type : String,
        required: true

    },

})

const todoModel = model('todos', todoSchema)

export default todoModel