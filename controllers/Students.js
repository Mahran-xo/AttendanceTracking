const StudentService = require('../services/Student');
const Student=require('../models/Student');
const Module = require('../models/Module');



module.exports.postStudent=async(req,res)=>{

    const StudentInfo={
        name: req.body.name,
        id: req.body.id,
        email: req.body.email
    };

    try{
        const addedStudent = await StudentService.AddStudent(StudentInfo);

        
        
        return res.status(201).send({
            msg:'Student Added successfully!',
            studentID : addedStudent._id,
            StudentName: addedStudent.name,
            studentEmail:addedStudent.email,
            studentModules:addedStudent.module
        
        });

        
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }


};

module.exports.AssignToModule =async(req,res)=>{
   
    const StudentInfo={
        id: req.body.id,
        module:req.body.module
    };

    try{
        const addedStudent = await StudentService.AssignStudentToModule(StudentInfo);

        
        
        return res.status(201).send({
            msg:'Student Added successfully!',
        
        });

        
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }


};

module.exports.RemoveStudentFromModule=async(req,res)=>{
   
    const StudentInfo={
        id: req.body.id,
        module:req.body.module
    };

    try{
        const removedStudent = await StudentService.RemoveStudentFromModule(StudentInfo);

        
        
        return res.status(201).send({
            msg:'Student Removed successfully!',
        
        });

        
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }


};

module.exports.RetrieveAllStudents=async(req,res)=>{
   
    try{
        const Students = await StudentService.RetrieveAllStudents();
        return res.send({Students});   
    }
    catch(err){

        return res.status(500).send({
            error:err
            });
    }


};