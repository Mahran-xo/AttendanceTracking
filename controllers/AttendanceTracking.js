const AttendanceService = require('../services/AttendanceTracking');

module.exports.postAttendance=async(req,res)=>{

    const AttendanceInfo={
        moduleId:req.body.moduleId,
        lectureHall:req.body.lectureHall
    };

    try{
        await AttendanceService.AddAttendanceSheet(AttendanceInfo);
        
        return res.status(201).send({
            msg:'Attendance sheet Added successfully!'
        
        });
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }

};

module.exports.AddAttendance=async(req,res)=>{

    const AttendanceInfo={
        sheetId:req.body.sheetId,
        studentIds:req.body.studentIds
    };

    try{
        await AttendanceService.AddAttendance(AttendanceInfo);
        
        return res.status(201).send({
            msg:'Attendance Added successfully!'
        
        });
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }

};

module.exports.GenerateAttendance=async(req,res)=>{

  
    try{
        const Attendance = await AttendanceService.GenerateAttendanceReport();
        return res.send({Attendance});   
    }
    catch(err){

        return res.status(500).send({
            error:err
            });
    }

};
