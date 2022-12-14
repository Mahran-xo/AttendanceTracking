const AttendanceModel = require('../models/Attendance');
const AbsenceModel = require('../models/AbsenceForm');
const ModuleModel = require('../models/Module');
const StudentModel = require('../models/Student');
const axios = require('axios');


module.exports.SubmitAbscenceForm = async (AbsenceForm) => {

    const ABS = new AbsenceModel({
        studentId: AbsenceForm.id,
        module:AbsenceForm.module,
        reason:AbsenceForm.reason
        
    });

    try {

        const ABSsaved = await ABS.save();
        const resp = await StudentModel.findOne({_id:ABS.studentId})
        const modspec = await ModuleModel.findOne({moduleName:ABS.module})

        jsonData={
            studentName:resp.name,
            email:resp.email,
            moduleCode:modspec.moduleCode,
            assignedProfessor:modspec.assignedProfessor
        }
        axios.post(process.env.ABSENCE, jsonData);
        console.log({ABSsaved});
        return ABSsaved;

        

    }


    catch (error) {
        console.log(error);
        throw new Error('Abscence Form submitted');
    }


};

module.exports.RetrieveAbsenceForms=async()=>{

    try{
        const ABS = await AbsenceModel.find().populate('studentId');
        return ABS

        }
        
    
    catch(error){
        console.log(error);
        throw new Error('Could not Absence forms');
    }


};