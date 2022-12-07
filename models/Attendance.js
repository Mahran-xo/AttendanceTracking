const { Schema, model, SchemaType } = require('mongoose');

const AttendanceSchema = new Schema({

    moduleName: {
        type: 'String',
        required: true
    },

    moduleCode: {
        type: 'String',
        required: true
    },
    student: [{

        isAttended: {
            type: 'Boolean',
            default: false
        },

        studentId: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        }
    }],

    Date: {
        type: 'Date',
        required: true
    },

    lectureHall: {
        type: 'String',
        required: true
    }
});


const AttendanceModel = model('Attendance', AttendanceSchema);
module.exports = AttendanceModel;