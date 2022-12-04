const{Schema , model, SchemaType} = require('mongoose');

const AttendanceSchema = new Schema({

    modulename:{
        type:'String',
        required:true
    },

    moduleCode:{
        type:'Number',
        required :true
    },
    student:[{
        
        isAttended:{
            type:'Boolean',
            default:false
        },
        
       studentId:{
        type:Schema.Types.ObjectId,
        ref:'student',
        required:true
    }
}],

    Date:{
        type:'Date',
        required:true
    },

    lectureHall:{
        type:'String',
        required:true
    }
});