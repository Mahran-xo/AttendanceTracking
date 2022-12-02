const StudentModel = require('../models/Student');
var readline = require('readline');



module.exports.AddStudent=async(StudentInfo)=>{

    const Student = new StudentModel({ name: StudentInfo.name,
        id: StudentInfo.id,
         email: StudentInfo.email });

    try{
        const addedStudent = await Student.save();
        return Student;
    }catch(error){
        console.log(error);
        throw new Error('Could not add student');
    }

   
}


