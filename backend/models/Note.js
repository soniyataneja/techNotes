const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)

const noteSchema = new mongoose.Schema(
    {
    user:{
        type: mongoose.Schema.Types.ObjectID,
        requied: true,
        ref: 'User'
    },
    title:{
        type: String,
        requied: true
    },
    text:{
        type: String,
        requied: true,
        default: 'Employee'
    },
    completed:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
)

// noteSchema.plugin(autoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq: 500
// })

module.exports = mongoose.model('Note',noteSchema)