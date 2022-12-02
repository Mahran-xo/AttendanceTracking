const StudentService = require('../services/Student');

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
            studentID : addedStudent.id,
            StudentName: addedStudent.name
        
        });
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }

};