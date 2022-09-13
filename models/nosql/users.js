const mongoose = require('mongoose')

const UsersScheme = new mongoose.Schema(
    {
        email:{
            type: String,
            unique: true
        }
    },
    {
        timestamps: true,
        versioKey: false
    }
)


module.exports = mongoose.model("user", UsersScheme)