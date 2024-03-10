const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 13
    },
    profilePicture: {
        type: String,
        default: 'https://i.stack.imgur.com/frlIf.png'
    },
    nickname: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)