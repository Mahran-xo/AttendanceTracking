const { Schema, model } = require('mongoose');

const AbsenceFormSchema = new Schema({



    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },

    module:

    {
        type: "String",
        required: true
    },


    reason: {
        type: 'String',
        required:false
    }

});

const AbsenceModel = model('Absence', AbsenceFormSchema);
module.exports =AbsenceModel;