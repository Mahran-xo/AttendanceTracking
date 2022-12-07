const { Schema, model } = require('mongoose');

const AbsenceFormSchema = new Schema({



    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },

    module:

    {
        type: Schema.Types.ObjectId,
        ref: 'module',
        required: true
    },


    reason: {
        type: 'String'
    }

});