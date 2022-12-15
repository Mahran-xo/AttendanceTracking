const StudentService = require('../services/Student');
const {validationResult} = require('express-validator');



module.exports.postStudent=async(req,res)=>{

    const validationErrors = validationResult(req).array();
    if(validationErrors.length>0){
        const firstError = validationErrors[0];
        return res.status(422).send({
            error:firstError.msg
        });
    }

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
        id: req.params.id,
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


module.exports.getStudent = async (req, res) => {
    const studentId = req.params.studentId;
    try {
      const Student = await StudentService.findStudentById(studentId); //here
      if (!Student) {
        return res.status(404).send({
          error: 'Student not found.'
        });
      }
      return res.send({
        Student: Student
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
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

