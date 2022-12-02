const{Schema , model} = require('mongoose');

const StudentSchema = new Schema({

    name:{
        type:'String',
        required:true
    },

    id:{
        type:'Number',
        required :true
    },
    email:{

        type:'String',
        required:true
    },

    module:{

        modulename:{
            type:'String',
            required:true
        },
    
        moduleCode:{
            type:'Number',
            required :true
        }
    
    }

});

const StudentModel=model('student',StudentSchema);
module.exports=StudentModel;