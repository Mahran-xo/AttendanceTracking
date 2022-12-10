const AbsenceService = require('../services/AbsenceFormManagement');

module.exports.postAbsence=async(req,res)=>{

    const AbsenceInfo={
        id:req.params.id,
        module:req.params.module,
        reason:req.body.reason
    };

    try{
        await AbsenceService.SubmitAbscenceForm(AbsenceInfo);
        
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

module.exports.RetrieveAbsenceForms=async(req,res)=>{
   
    try{
        const Absence = await AbsenceService.RetrieveAbsenceForms();
        return res.send({Absence});   
    }
    catch(err){

        return res.status(500).send({
            error:err
            });
    }


};
