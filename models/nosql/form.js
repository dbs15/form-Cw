const mongoose = require('mongoose')

const FormScheme = new mongoose.Schema(
    {
        havePc:{
            type:String
        },
        workModality:{
            type: String
            
        },
        productiveAtHome:{
            type: String
        },
        internetConnection:{
            type: String
        },
        requireVpn:{
            type: String
        },
        doYouHavePersonalPc:{
            type: String
        },
        wouldYouWorkYourPc:{
            type: String
        }

    },
    {
        timestamps: true,
        versioKey: false
    }
    
)


module.exports = mongoose.model("form", FormScheme)