const ModuleService = require('../services/Module');

module.exports.postModule=async(req,res)=>{

    const ModuleInfo={
        moduleName: req.body.moduleName,
        moduleCode: req.body.moduleCode,
        assignedProfessor: req.body.assignedProfessor
    };

    try{
        const addedModule = await ModuleService.AddModule(ModuleInfo);
        
        return res.status(201).send({
            msg:'Module Added successfully!',
            moduleName : addedModule.moduleName,
            moduleCode: addedModule.moduleCode,
            assignedProfessor: addedModule.assignedProfessor
            
        
        });
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }

};

