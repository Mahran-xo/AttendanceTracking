const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({

    name: {
        type: 'String',
        required: true
    },

    id: {
        type: 'Number',
        required: true
    },
    email: {

        type: 'String',
        required: true
    },


    module: [{

        type: Schema.Types.ObjectId,
        ref: 'module'
    }]

});


const StudentModel = model('Student', StudentSchema);
module.exports = StudentModel;