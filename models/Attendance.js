const{Schema , model} = require('mongoose');

const AttendanceSchema = new Schema({

    modulename:{
        type:'String',
        required:true
    },

    moduleCode:{
        type:'Number',
        required :true
    },

    studentname:{
        type:'String',
        required:true
    },

    studentId:{
        type:'Number',
        required :true
    },

    Date:{
        type:'Date',
        required:true
    },

    lectureHall:{
        type:'String',
        required:true
    }
});