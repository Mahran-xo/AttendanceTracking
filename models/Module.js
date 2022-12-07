const { Schema, model } = require('mongoose');

const ModuleSchema = new Schema({

    moduleName: {
        type: 'String',
        required: true
    },

    moduleCode: {
        type: 'String',
        required: true
    },

    assignedProfessor: {
        type: 'String',
        required: true
    },

    student: [{
        studentId:
        {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        },

        limit: {

            type: "Number",
            default: 0
        }
    }]


});

const ModuleModel = model('module', ModuleSchema);
module.exports = ModuleModel;