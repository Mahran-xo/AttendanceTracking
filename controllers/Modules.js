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


module.exports.RemoveModule=async(req,res)=>{
   
    const ModuleInfo={
        moduleName: req.body.moduleName,
        moduleCode: req.body.moduleCode,
        assignedProfessor: req.body.assignedProfessor};

    try{
        const removeModule = await ModuleService.RemoveModule(ModuleInfo);

        
        
        return res.status(201).send({
            msg:'Module Removed successfully!',
        
        });

        
    }
    catch(err){

        return res.status(500).send({
            error:err.message
            });
    }


};

module.exports.RetrieveAllModule=async(req,res)=>{
   
    try{
        const Module = await ModuleService.RetrieveAllModule();
        return res.send({Module});   
    }
    catch(err){

        return res.status(500).send({
            error:err
            });
    }


};

module.exports.updateModule = async (req, res) => {
    const moduleName = req.params.moduleName;
    const assignedProfessor = req.body.assignedProfessor;
    try {
      let result = await ModuleService.updateModule(moduleName, assignedProfessor);
      return res.send({
        msg: 'Module information updated successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  }


