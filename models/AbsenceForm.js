const{Schema , model} = require('mongoose');

const AbsenceFormSchema = new Schema({

    studentname:{
        type:'String',
        required:true
    },

    studentId:{
        type:'Number',
        required :true
    },

    moduleName:{
        type:'String',
        required:true
    },

    moduleCode:{
        type:'String',
        required:true
    },

    reason:{
        type:'String',
        required:true
    },

    reasonVal:{

        data: Buffer, 
        contentType: String 

    }

});